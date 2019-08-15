'use strict';

const partUtilities = require('../utilities/part'),
      ruleUtilities = require('../utilities/rule'),
      arrayUtilities = require('../utilities/array'),
      NonRecursiveRule = require('../rule/nonRecursive'),
      RightRecursiveRule = require('../rule/rightRecursive'),
      definitionUtilities = require('../utilities/definition'),
      NonRecursiveDefinition = require('../definition/nonRecursive'),
      RecursiveRuleNameDefinition = require('../definition/recursiveRuleName');

const { first } = arrayUtilities,
      { isPartRuleNamePart } = partUtilities,
      { push, iterateWithDelete } = arrayUtilities,
      { findRuleByName, deleteRuleByName } = ruleUtilities,
      { leftRecursiveRuleNameFromLeftRecursiveDefinition } = definitionUtilities;

function eliminateLeftRecursionFromRule(rule, rules) {
  const ruleName = rule.getName(),
        ruleLeftRecursive = isRuleLeftRecursive(rule, rules, ruleName);

  if (!ruleLeftRecursive) {
    return;
  }

  const definitions = rule.getDefinitions(),
        nonTerminalNode = rule.getNonTerminalNode(),
        rightRecursiveRules = [];

  iterateWithDelete(definitions, (definition, count) => {
    const definitionLeftRecursive = isDefinitionLeftRecursive(definition, rules, ruleName);

    if (definitionLeftRecursive) {
      const leftRecursiveDefinition = definition, ///
            leftRecursiveRuleName = leftRecursiveRuleNameFromLeftRecursiveDefinition(leftRecursiveDefinition),
            leftRecursiveRule = findRuleByName(leftRecursiveRuleName, rules),
            rightRecursiveRule = RightRecursiveRule.fromLeftRecursiveRuleAndNonTerminalNode(leftRecursiveRule, nonTerminalNode, count);

      rightRecursiveRules.push(rightRecursiveRule);

      return true;
    }
  });

  const nonRecursiveRule = NonRecursiveRule.fromRule(rule),
        nonRecursiveDefinition = NonRecursiveDefinition.fromNonRecursiveRule(nonRecursiveRule),
        rightRecursiveRuleNameDefinitions = rightRecursiveRules.map((rightRecursiveRule) => {
          const rightRecursiveRuleNameDefinition = RecursiveRuleNameDefinition.fromNonRecursiveRuleAndRecursiveRule(nonRecursiveRule, rightRecursiveRule);

          return rightRecursiveRuleNameDefinition;
        });

  rule.setDefinitions([
    ...rightRecursiveRuleNameDefinitions,
    nonRecursiveDefinition
  ]);

  rules.push(nonRecursiveRule);

  push(rules, rightRecursiveRules);

  rightRecursiveRules.forEach((rightRecursiveRule) => {
    const leftRecursiveRuleName = rightRecursiveRule.getLeftRecursiveRuleName();

    deleteRuleByName(leftRecursiveRuleName, rules);
  })
}

module.exports = {
  eliminateLeftRecursionFromRule
};

function isRuleLeftRecursive(rule, rules, ruleName) {
  const definitions = rule.getDefinitions(),
        ruleLeftRecursive = definitions.some((definition) => {
          const definitionLeftRecursive = isDefinitionLeftRecursive(definition, rules, ruleName);

          if (definitionLeftRecursive) {
            return true;
          }
        });

  return ruleLeftRecursive;
}

function isDefinitionLeftRecursive(definition, rules, ruleName) {
  let definitionLeftRecursive = false;

  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartRuleNamePart = isPartRuleNamePart(firstPart);

  if (firstPartRuleNamePart) {
    const ruleNamePart = firstPart, ///
          ruleNamePartRuleName = ruleNamePart.getRuleName(),
          ruleNamePartRuleNameRuleName = (ruleNamePartRuleName === ruleName);

    if (ruleNamePartRuleNameRuleName) {
      definitionLeftRecursive = true;
    } else {
      const name = ruleNamePartRuleName,  ///
            rule = findRuleByName(name, rules),
            ruleLeftRecursive = isRuleLeftRecursive(rule, rules, ruleName);

      definitionLeftRecursive = ruleLeftRecursive;  ///
    }
  }

  return definitionLeftRecursive;
}
