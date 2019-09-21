'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      objectUtilities = require('./utilities/object'),
      RuleNameDefinition = require('./definition/ruleName'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      RecursiveDefinition = require('./definition/recursive'),
      NonLeftRecursiveRule = require('./rule/nonLeftRecursive'),
      recursiveDefinitionUtilities = require('./utilities/recursiveDefinition'),
      NonLeftRecursiveRuleNameDefinition = require('./definition/nonLeftRecursiveRuleName'),
      NonLeftRecursiveAndRightRecursiveRuleNamesDefinition = require('./definition/nonLeftRecursiveAndRightRecursiveRuleNames');

const { findRuleByName } = ruleUtilities,
      { first, forEachWithRemove, areElementsEqual } = arrayUtilities,
      { addToArrayMap, forEachNameValueWithRemove } = objectUtilities,
      { findIndirectlyLeftRecursiveDefinition } = recursiveDefinitionUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveDefinitions = [],
        immediatelyLeftRecursiveDefinitionsMap = {};

  removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules);

  rewriteLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinitionsMap, rules);

  const ruleNames = Object.keys(immediatelyLeftRecursiveDefinitionsMap),
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

function removeStrictlyLeftRecursiveDefinition(ruleName, recursiveDefinition, immediatelyLeftRecursiveDefinitionsMap) {
  let remove = false;

  const recursiveDefinitionStrictlyLeftRecursive = recursiveDefinition.isStrictlyLeftRecursive();

  if (recursiveDefinitionStrictlyLeftRecursive) {
    const strictlyLeftRecursiveDefinition = recursiveDefinition,  ///
          immediatelyLeftRecursiveDefinition = strictlyLeftRecursiveDefinition; ///

    addToArrayMap(immediatelyLeftRecursiveDefinitionsMap, ruleName, immediatelyLeftRecursiveDefinition);

    remove = true;
  }

  return remove;
}

function removeImmediatelyLeftRecursiveDefinition(ruleName, recursiveDefinition, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap) {
  let remove = false;

  const recursiveDefinitionLeftRecursive = recursiveDefinition.isLeftRecursive();

  if (recursiveDefinitionLeftRecursive) {
    const leftRecursiveDefinition = recursiveDefinition,  ///
          indirectlyLeftRecursiveDefinition = findIndirectlyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions);

    if (indirectlyLeftRecursiveDefinition !== null) {
      const immediatelyLeftRecursiveDefinition = leftRecursiveDefinition; ///

      immediatelyLeftRecursiveDefinition.setIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition);

      addToArrayMap(immediatelyLeftRecursiveDefinitionsMap, ruleName, immediatelyLeftRecursiveDefinition);

      remove = true;
    }
  }

  return remove;
}

function removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    let remove = false;

    const recursiveDefinition = RecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

    if (recursiveDefinition !== null) {
      remove = remove || removeStrictlyLeftRecursiveDefinition(ruleName, recursiveDefinition, immediatelyLeftRecursiveDefinitionsMap);

      remove = remove || removeImmediatelyLeftRecursiveDefinition(ruleName, recursiveDefinition, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap);

      if (!remove) {
        recursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ];

        const recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(),
              recursiveDefinitionRuleNames = recursiveDefinitions.map((recursiveDefinition) => recursiveDefinition.getRuleName());

        recursiveRuleNames.forEach((recursiveRuleName) => {
          const recursiveDefinitionRuleNamesIncludesRecursiveRuleName = recursiveDefinitionRuleNames.includes(recursiveRuleName);

          if (!recursiveDefinitionRuleNamesIncludesRecursiveRuleName) {
            const name = recursiveRuleName,  ///
                  rule = findRuleByName(name, rules);

            if (rule !== null) {
              removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules);
            }
          }
        });
      }
    }

    return remove;
  });
}

function rewriteLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinitionsMap, rules) {
  forEachNameValueWithRemove(immediatelyLeftRecursiveDefinitionsMap, (ruleName, immediatelyLeftRecursiveDefinitions) => {
    let remove = false;

    remove = remove || rewriteStrictlyLeftRecursiveRule(ruleName, immediatelyLeftRecursiveDefinitions, rules);

    remove = remove || rewriteImmediatelyAndIndirectlyLeftRecursiveRules(ruleName, immediatelyLeftRecursiveDefinitions, rules);

    return remove;
  });
}

function rewriteStrictlyLeftRecursiveRule(ruleName, immediatelyLeftRecursiveDefinitions, rules) {
  let remove = false;

  const ruleRewritable = immediatelyLeftRecursiveDefinitions.every((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.isRewritable());

  if (ruleRewritable) {
    const ruleStrictlyLeftRecursive = immediatelyLeftRecursiveDefinitions.every((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.isStrictlyLeftRecursive());

    if (ruleStrictlyLeftRecursive) {
      const lookAheads = immediatelyLeftRecursiveDefinitions.map((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.isLookAhead()),
            lookAheadsEqual = areElementsEqual(lookAheads);

      if (lookAheadsEqual) {
        const name = ruleName,  ///
              rule = findRuleByName(name, rules),
              immediatelyLeftRecursiveRule = rule,  ///
              rightRecursiveRule = RightRecursiveRule.fromRuleNameAndImmediatelyLeftRecursiveRecursiveDefinitions(ruleName, immediatelyLeftRecursiveDefinitions),
              nonLeftRecursiveRule = NonLeftRecursiveRule.fromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule);

        rules.push(nonLeftRecursiveRule);

        rules.push(rightRecursiveRule);

        const firstLookAhead = first(lookAheads),
              lookAhead = firstLookAhead, ///
              leftRecursiveRuleName = ruleName, ///
              nonLeftRecursiveRuleNameDefinition = NonLeftRecursiveRuleNameDefinition.fromRuleName(ruleName),
              nonLeftRecursiveAndRightRecursiveRuleNamesDefinition = NonLeftRecursiveAndRightRecursiveRuleNamesDefinition.fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead),
              definitions = [
                nonLeftRecursiveAndRightRecursiveRuleNamesDefinition,
                nonLeftRecursiveRuleNameDefinition
              ];

        immediatelyLeftRecursiveRule.setDefinitions(definitions);

        remove = true;
      }
    }
  }

  return remove;
}

function rewriteImmediatelyAndIndirectlyLeftRecursiveRules(ruleName, immediatelyLeftRecursiveDefinitions, rules) {
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
            name,
            definitions,
            nonLeftRecursiveRule,
            nonLeftRecursiveRuleNameDefinition;

        name = ruleName;  ///

        rule = findRuleByName(name, rules);

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

        name = leftRecursiveRuleName;  ///

        rule = findRuleByName(name, rules);

        const indirectlyLeftRecursiveRule = rule, ///
              firstImmediatelyLeftRecursiveDefinition = first(immediatelyLeftRecursiveDefinitions),
              immediatelyLeftRecursiveDefinition = firstImmediatelyLeftRecursiveDefinition, ///
              indirectlyLeftRecursiveDefinition = immediatelyLeftRecursiveDefinition.getIndirectlyLeftRecursiveDefinition();

        nonLeftRecursiveRule = NonLeftRecursiveRule.fromIndirectlyLeftRecursiveRuleAndIndirectlyLeftRecursiveDefintion(indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition);

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
