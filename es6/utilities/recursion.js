'use strict';

const necessary = require('necessary');

const partUtilities = require('../utilities/part'),
      ruleUtilities = require('../utilities/rule'),
      NonRecursiveRule = require('../rule/nonRecursive'),
      RightRecursiveRule = require('../rule/rightRecursive'),
      RecursiveDefinition = require('../definition/recursive'),
      NonRecursiveRuleNameDefinition = require('../definition/nonRecursiveRuleName');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { findRuleByName } = ruleUtilities,
      { isPartRuleNamePart } = partUtilities;

function eliminateLeftRecursionFromRule(rule, ruleName, rules) {
  if (ruleName === null) {
    ruleName = rule.getName();
  }

  const definitions = rule.getDefinitions(),
        recursiveDefinitions = [],
        nonRecursiveDefinitions = [];

  definitions.forEach((definition, count) => {
    const recursiveDefinition = eliminateLeftRecursionFromDefinition(definition, ruleName, rule, rules, count);

    if (recursiveDefinition === null) {
      const nonRecursiveDefinition = definition;  ///

      nonRecursiveDefinitions.push(nonRecursiveDefinition);
    } else {
      recursiveDefinitions.push(recursiveDefinition);
    }
  });

  const recursiveDefinitionsLength = recursiveDefinitions.length,
        ruleRecursive = (recursiveDefinitionsLength > 0);

  if (ruleRecursive) {
    const nonRecursiveRule = NonRecursiveRule.fromRuleRuleNameAndNonRecursiveDefinitions(rule, ruleName, nonRecursiveDefinitions),
          nonRecursiveRuleNameDefinition = NonRecursiveRuleNameDefinition.fromNonRecursiveRule(nonRecursiveRule),
          definitions = [
              ...recursiveDefinitions,
            nonRecursiveRuleNameDefinition
          ];

    rule.setDefinitions(definitions);

    rules.push(nonRecursiveRule);
  }

  return ruleRecursive;
}

module.exports = {
  eliminateLeftRecursionFromRule
};

function eliminateLeftRecursionFromDefinition(definition, ruleName, rule, rules, count) {
  let recursiveDefinition = null;

  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartRuleNamePart = isPartRuleNamePart(firstPart);

  if (firstPartRuleNamePart) {
    const ruleNamePart = firstPart; ///

    if (recursiveDefinition === null) {
      recursiveDefinition = eliminateImmediateLeftRecursionFromDefinition(ruleNamePart, definition, ruleName, rule, rules, count);
    }

    if (recursiveDefinition === null) {
      recursiveDefinition = eliminateImplicitLeftRecursionFromDefinition(ruleNamePart, definition, ruleName, rules);
    }
  }

  return recursiveDefinition;
}

function eliminateImmediateLeftRecursionFromDefinition(ruleNamePart, definition, ruleName, rule, rules, count) {
  let recursiveDefinition = null;

  const ruleNamePartRuleName = ruleNamePart.getRuleName(),
        ruleNamePartRuleNameRuleName = (ruleNamePartRuleName === ruleName);

  if (ruleNamePartRuleNameRuleName) {
    const ruleName = rule.getName(),
          rightRecursiveRule = RightRecursiveRule.fromDefinitionAndRuleName(definition, ruleName, rules, count);

    recursiveDefinition = RecursiveDefinition.fromRuleName(ruleName, count);

    rules.push(rightRecursiveRule);
  }

  return recursiveDefinition;
}

function eliminateImplicitLeftRecursionFromDefinition(ruleNamePart, definition, ruleName, rules) {
  let recursiveDefinition = null;

  const ruleNamePartRuleName = ruleNamePart.getRuleName(),
        name = ruleNamePartRuleName,  ///
        rule = findRuleByName(name, rules);

  if (rule !== null) {
    const ruleRecursive = eliminateLeftRecursionFromRule(rule, ruleName, rules);

    if (ruleRecursive) {
      recursiveDefinition = definition; ///
    }
  }

  return recursiveDefinition;
}
