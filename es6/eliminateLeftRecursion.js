'use strict';

const ReducedRule = require('./rule/reduced'),
      ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      ruleNameUtilities = require('./utilities/ruleName'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      RecursiveDefinition = require('./definition/recursive'),
      RightRecursiveDefinition = require('./definition/rightRecursive'),
      ReducedRuleNameDefinition = require('./definition/reducedRuleName'),
      recursiveDefinitionUtilities = require('./utilities/recursiveDefinition'),
      ReducedAndRightRecursiveRuleNamesDefinition = require('./definition/reducedAndRightRecursiveRuleNames');

const { findRule } = ruleUtilities,
      { first, forEachWithRemove } = arrayUtilities,
      { findIndirectlyLeftRecursiveDefinition } = recursiveDefinitionUtilities,
      { rightRecursiveRuleNameFromRuleName, reducedRuleNameFromRuleName } = ruleNameUtilities;

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

function removeNonStrictlyLeftRecursiveDefinition(recursiveDefinition, recursiveDefinitions, immediatelyLeftRecursiveDefinitions) {
  const recursiveDefinitionNonStrictlyLeftRecursive = recursiveDefinition.isNonStrictlyLeftRecursive();

  if (recursiveDefinitionNonStrictlyLeftRecursive) {
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
                   || removeNonStrictlyLeftRecursiveDefinition(recursiveDefinition, recursiveDefinitions, immediatelyLeftRecursiveDefinitions);

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
      const remove = rewriteStrictlyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition, rules)
                   || rewriteImmediatelyAndIndirectlyLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinition, rules);

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
          reducedRuleName = reducedRuleNameFromRuleName(ruleName);

    let reducedRule = findRule(reducedRuleName, rules);

    if (reducedRule === null) {
      let definitions;

      const rule = findRule(ruleName, rules);

      definitions = rule.getDefinitions();

      reducedRule = ReducedRule.fromReducedRuleNameAndDefinitions(reducedRuleName, definitions);

      rules.push(reducedRule);

      const lookAhead = immediatelyLeftRecursiveDefinition.isLookAhead(),
            leftRecursiveRuleName = ruleName, ///
            reducedRuleNameDefinition = ReducedRuleNameDefinition.fromRuleName(ruleName),
            reducedAndRightRecursiveRuleNamesDefinition = ReducedAndRightRecursiveRuleNamesDefinition.fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead);

      definitions = [
        reducedAndRightRecursiveRuleNamesDefinition,
        reducedRuleNameDefinition
      ];

      rule.setDefinitions(definitions);
    } else {
      const rule = findRule(ruleName, rules),
            definitions = rule.getDefinitions(),
            firstDefinition = first(definitions),
            immediatelyLeftRecursiveDefinitionLookAhead = immediatelyLeftRecursiveDefinition.isLookAhead(),
            reducedAndRightRecursiveRuleNamesDefinition = firstDefinition, ///
            reducedAndRightRecursiveRuleNamesDefinitionLookAhead = reducedAndRightRecursiveRuleNamesDefinition.isLookAhead();

      if (immediatelyLeftRecursiveDefinitionLookAhead !== reducedAndRightRecursiveRuleNamesDefinitionLookAhead) {
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

function rewriteImmediatelyAndIndirectlyLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinition, rules) {
  const nonStrictlyLeftRecursive = immediatelyLeftRecursiveDefinition.isNonStrictlyLeftRecursive();

  if (nonStrictlyLeftRecursive) {
    const ruleName = immediatelyLeftRecursiveDefinition.getRuleName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName);

    let reducedRule = findRule(reducedRuleName, rules);

    if (reducedRule === null) {
      let definitions;

      const rule = findRule(ruleName, rules);

      definitions = rule.getDefinitions();

      reducedRule = ReducedRule.fromReducedRuleNameAndDefinitions(reducedRuleName, definitions);

      rules.push(reducedRule);

      const lookAhead = immediatelyLeftRecursiveDefinition.isLookAhead(),
            leftRecursiveRuleName = ruleName, ///
            reducedRuleNameDefinition = ReducedRuleNameDefinition.fromRuleName(ruleName),
            reducedAndRightRecursiveRuleNamesDefinition = ReducedAndRightRecursiveRuleNamesDefinition.fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead);

      definitions = [
        reducedAndRightRecursiveRuleNamesDefinition,
        reducedRuleNameDefinition
      ];

      rule.setDefinitions(definitions);

      return true;
    }
  }

  /*
  let rule,
      definitions,
      reducedRule,
      reducedRuleNameDefinition;

  rule = findRule(ruleName, rules);

  const immediatelyLeftRecursiveRule = rule;  ///

  reducedRule = ReducedRule.fromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule);

  const rightRecursiveRule = RightRecursiveRule.fromRuleNameAndImmediatelyLeftRecursiveRecursiveDefinitions(ruleName, immediatelyLeftRecursiveDefinitions);

  rules.push(reducedRule);

  rules.push(rightRecursiveRule);

  const firstLookAhead = first(lookAheads),
        firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
        lookAhead = firstLookAhead, ///
        leftRecursiveRuleName = firstLeftRecursiveRuleName; ///

  reducedRuleNameDefinition = ReducedRuleNameDefinition.fromRuleName(ruleName);

  const reducedAndRightRecursiveRuleNamesDefinition = ReducedAndRightRecursiveRuleNamesDefinition.fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead);

  definitions = [
    reducedAndRightRecursiveRuleNamesDefinition,
    reducedRuleNameDefinition
  ];

  immediatelyLeftRecursiveRule.setDefinitions(definitions);

  const indirectlyLeftRecursiveRuleName = leftRecursiveRuleName, ///
        indirectlyLeftRecursiveRule = indirectlyLeftRecursiveRuleName(indirectlyLeftRecursiveRuleName, rules),
        firstImmediatelyLeftRecursiveDefinition = first(immediatelyLeftRecursiveDefinitions),
        immediatelyLeftRecursiveDefinition = firstImmediatelyLeftRecursiveDefinition, ///
        indirectlyLeftRecursiveDefinition = immediatelyLeftRecursiveDefinition.getIndirectlyLeftRecursiveDefinition();

  reducedRule = ReducedRule.fromIndirectlyLeftRecursiveRuleAndIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition);

  const ruleNameDefinition = RuleNameDefinition.fromRuleName(ruleName);

  reducedRuleNameDefinition = ReducedRuleNameDefinition.fromLeftRecursiveRuleName(leftRecursiveRuleName);

  definitions = [
    ruleNameDefinition,
    reducedRuleNameDefinition
  ];

  indirectlyLeftRecursiveRule.setDefinitions(definitions);

  rules.push(reducedRule);
  */
}
