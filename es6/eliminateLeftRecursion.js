'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      ruleNameUtilities = require('./utilities/ruleName'),
      RuleNameDefinition = require('./definition/ruleName'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      RecursiveDefinition = require('./definition/recursive'),
      NonLeftRecursiveRule = require('./rule/nonLeftRecursive'),
      RightRecursiveDefinition = require('./definition/rightRecursive'),
      recursiveDefinitionUtilities = require('./utilities/recursiveDefinition'),
      NonLeftRecursiveRuleNameDefinition = require('./definition/nonLeftRecursiveRuleName'),
      NonLeftRecursiveAndRightRecursiveRuleNamesDefinition = require('./definition/nonLeftRecursiveAndRightRecursiveRuleNames');

const { findRule } = ruleUtilities,
      { first, forEachWithRemove } = arrayUtilities,
      { findIndirectlyLeftRecursiveDefinition } = recursiveDefinitionUtilities,
      { rightRecursiveRuleNameFromRuleName, nonLeftRecursiveRuleNameFromRuleName } = ruleNameUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveDefinitions = [],
        immediatelyLeftRecursiveDefinitions = [];

  removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules);

  rewriteLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinitions, rules);

  const ruleNames = immediatelyLeftRecursiveDefinitions.map((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.getRuleName()),
        ruleNamesLength = ruleNames.length;

  if (ruleNamesLength > 0) {
    const ruleNamesString = ruleNames.reduce((ruleNamesString, ruleName) => {
      ruleNamesString = (ruleNamesString !== '') ?
                         `${ruleNamesString}, '${ruleName}'` :
                          `'${ruleName}'`;

      return ruleNamesString;
    }, '');

    throw new Error(`Left recursion cannot be eliminated from the folliowing rule or rules: ${ruleNamesString}.`);
  }
}

module.exports = eliminateLeftRecursion;

function removeStrictlyLeftRecursiveDefinition(recursiveDefinition, immediatelyLeftRecursiveDefinitions) {
  const recursiveDefinitionStrictlyLeftRecursive = recursiveDefinition.isStrictlyLeftRecursive();

  if (recursiveDefinitionStrictlyLeftRecursive) {
    const strictlyLeftRecursiveDefinition = recursiveDefinition,  ///
          immediatelyLeftRecursiveDefinition = strictlyLeftRecursiveDefinition; ///

    immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);

    return true;
  }
}

function removeImmediatelyLeftRecursiveDefinition(recursiveDefinition, recursiveDefinitions, immediatelyLeftRecursiveDefinitions) {
  const recursiveDefinitionLeftRecursive = recursiveDefinition.isLeftRecursive();

  if (recursiveDefinitionLeftRecursive) {
    const leftRecursiveDefinition = recursiveDefinition,  ///
          indirectlyLeftRecursiveDefinition = findIndirectlyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions);

    if (indirectlyLeftRecursiveDefinition !== null) {
      const immediatelyLeftRecursiveDefinition = leftRecursiveDefinition; ///

      immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);

      return true;
    }
  }
}

function removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    const recursiveDefinition = RecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

    if (recursiveDefinition !== null) {
      const remove = removeStrictlyLeftRecursiveDefinition(recursiveDefinition, immediatelyLeftRecursiveDefinitions)
                   || removeImmediatelyLeftRecursiveDefinition(recursiveDefinition, recursiveDefinitions, immediatelyLeftRecursiveDefinitions);

      if (remove) {
        return true;
      }

      recursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ];

      const recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(),
            recursiveDefinitionRuleNames = recursiveDefinitions.map((recursiveDefinition) => recursiveDefinition.getRuleName());

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const recursiveDefinitionRuleNamesIncludesRecursiveRuleName = recursiveDefinitionRuleNames.includes(recursiveRuleName);

        if (!recursiveDefinitionRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = findRule(ruleName, rules);

          if (rule !== null) {
            removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules);
          }
        }
      });
    }
  });
}

function rewriteLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinitions, rules) {
  forEachWithRemove(immediatelyLeftRecursiveDefinitions, (immediatelyLeftRecursiveDefinition) => {
    const rewritable = immediatelyLeftRecursiveDefinition.isRewritable();

    if (rewritable) {
      const remove = rewriteStrictlyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition, rules);

      if (remove) {
        return true;
      }
    }
  });
}

function rewriteStrictlyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition, rules) {
  const strictlyLeftRecursive = immediatelyLeftRecursiveDefinition.isStrictlyLeftRecursive();

  if (strictlyLeftRecursive) {
    const ruleName = immediatelyLeftRecursiveDefinition.getRuleName(),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          nonLeftRecursiveRuleName = nonLeftRecursiveRuleNameFromRuleName(ruleName);

    let nonLeftRecursiveRule = findRule(nonLeftRecursiveRuleName, rules);

    if (nonLeftRecursiveRule === null) {
      let definitions;

      const rule = findRule(ruleName, rules);

      definitions = rule.getDefinitions();

      nonLeftRecursiveRule = NonLeftRecursiveRule.fromNonLeftRecursiveRuleNameAndDefinitions(nonLeftRecursiveRuleName, definitions);

      rules.push(nonLeftRecursiveRule);

      const lookAhead = immediatelyLeftRecursiveDefinition.isLookAhead(),
            leftRecursiveRuleName = ruleName, ///
            nonLeftRecursiveRuleNameDefinition = NonLeftRecursiveRuleNameDefinition.fromRuleName(ruleName),
            nonLeftRecursiveAndRightRecursiveRuleNamesDefinition = NonLeftRecursiveAndRightRecursiveRuleNamesDefinition.fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead);

      definitions = [
        nonLeftRecursiveAndRightRecursiveRuleNamesDefinition,
        nonLeftRecursiveRuleNameDefinition
      ];

      rule.setDefinitions(definitions);
    } else {
      const rule = findRule(ruleName, rules),
            definitions = rule.getDefinitions(),
            firstDefinition = first(definitions),
            immediatelyLeftRecursiveDefinitionLookAhead = immediatelyLeftRecursiveDefinition.isLookAhead(),
            nonLeftRecursiveAndRightRecursiveRuleNamesDefinition = firstDefinition, ///
            nonLeftRecursiveAndRightRecursiveRuleNamesDefinitionLookAhead = nonLeftRecursiveAndRightRecursiveRuleNamesDefinition.isLookAhead();

      if (immediatelyLeftRecursiveDefinitionLookAhead !== nonLeftRecursiveAndRightRecursiveRuleNamesDefinitionLookAhead) {
        return false;
      }
    }

    let rightRecursiveRule = findRule(rightRecursiveRuleName, rules);

    if (rightRecursiveRule === null) {
      rightRecursiveRule = RightRecursiveRule.fromRightRecursiveRuleName(rightRecursiveRuleName);

      rules.push(rightRecursiveRule);
    }

    const rightRecursiveDefinition = RightRecursiveDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition);

    rightRecursiveRule.addRightRecursiveDefinition(rightRecursiveDefinition);

    return true;
  }
}

function rewriteImmediatelyAndIndirectlyLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinitions, rules) {
  let remove = false;

  const ruleRewritable = immediatelyLeftRecursiveDefinitions.every((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.isRewritable());

  if (ruleRewritable) {
    const ruleNonStrictlyLeftRecursive = !immediatelyLeftRecursiveDefinitions.some((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.isStrictlyLeftRecursive());

    if (ruleNonStrictlyLeftRecursive) {
      const lookAheads = immediatelyLeftRecursiveDefinitions.map((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.isLookAhead()),
            lookAheadsEqual = areElementsEqual(lookAheads),
            leftRecursiveRuleNames = immediatelyLeftRecursiveDefinitions.map((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.getLeftRecursiveRuleName()),
            leftRecursiveRuleNamesEqual = areElementsEqual(leftRecursiveRuleNames);

      if (lookAheadsEqual && leftRecursiveRuleNamesEqual) {
        let rule,
            definitions,
            nonLeftRecursiveRule,
            nonLeftRecursiveRuleNameDefinition;

        rule = findRule(ruleName, rules);

        const immediatelyLeftRecursiveRule = rule;  ///

        nonLeftRecursiveRule = NonLeftRecursiveRule.fromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule);

        const rightRecursiveRule = RightRecursiveRule.fromRuleNameAndImmediatelyLeftRecursiveRecursiveDefinitions(ruleName, immediatelyLeftRecursiveDefinitions);

        rules.push(nonLeftRecursiveRule);

        rules.push(rightRecursiveRule);

        const firstLookAhead = first(lookAheads),
              firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
              lookAhead = firstLookAhead, ///
              leftRecursiveRuleName = firstLeftRecursiveRuleName; ///

        nonLeftRecursiveRuleNameDefinition = NonLeftRecursiveRuleNameDefinition.fromRuleName(ruleName);

        const nonLeftRecursiveAndRightRecursiveRuleNamesDefinition = NonLeftRecursiveAndRightRecursiveRuleNamesDefinition.fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead);

        definitions = [
          nonLeftRecursiveAndRightRecursiveRuleNamesDefinition,
          nonLeftRecursiveRuleNameDefinition
        ];

        immediatelyLeftRecursiveRule.setDefinitions(definitions);

        const indirectlyLeftRecursiveRuleName = leftRecursiveRuleName, ///
              indirectlyLeftRecursiveRule = indirectlyLeftRecursiveRuleName(indirectlyLeftRecursiveRuleName, rules),
              firstImmediatelyLeftRecursiveDefinition = first(immediatelyLeftRecursiveDefinitions),
              immediatelyLeftRecursiveDefinition = firstImmediatelyLeftRecursiveDefinition, ///
              indirectlyLeftRecursiveDefinition = immediatelyLeftRecursiveDefinition.getIndirectlyLeftRecursiveDefinition();

        nonLeftRecursiveRule = NonLeftRecursiveRule.fromIndirectlyLeftRecursiveRuleAndIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition);

        const ruleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

        nonLeftRecursiveRuleNameDefinition = NonLeftRecursiveRuleNameDefinition.fromLeftRecursiveRuleName(leftRecursiveRuleName);

        definitions = [
          ruleNameDefinition,
          nonLeftRecursiveRuleNameDefinition
        ];

        indirectlyLeftRecursiveRule.setDefinitions(definitions);

        rules.push(nonLeftRecursiveRule);

        remove = true;
      }
    }
  }

  return remove;
}
