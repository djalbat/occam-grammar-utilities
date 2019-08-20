'use strict';

const necessary = require('necessary');

const partUtilities = require('./utilities/part'),
      ruleUtilities = require('./utilities/rule'),
      NonRecursiveRule = require('./rule/nonRecursive'),
      ruleNameUtilities = require('./utilities/ruleName'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      RecursiveDefinition = require('./definition/recursive'),
      NonRecursiveDefinition = require('./definition/nonRecursive');

const { arrayUtilities } = necessary,
      { first, last } = arrayUtilities,
      { findRuleByName } = ruleUtilities,
      { isPartRuleNamePart } = partUtilities,
      { nonRecursiveRuleNameFromRuleName, rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

function eliminateLeftRecursion(rules) {
  const ruleNames = [];

  eliminateLeftRecursionFromRules(rules, ruleNames);
}

module.exports = eliminateLeftRecursion;

function eliminateLeftRecursionFromRules(rules, ruleNames) {
  rules.forEach((rule) => eliminateLeftRecursionFromRule(rule, ruleNames, rules));
}

function eliminateLeftRecursionFromRule(rule, ruleNames, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions(),
        recursiveDefinitions = [],
        nonRecursiveDefinitions = [];

  ruleNames = ruleNames.concat(ruleName);

  definitions.forEach((definition) => {
    const recursiveDefinition = eliminateLeftRecursionFromDefinition(definition, ruleNames, rules);

    if (recursiveDefinition !== null) {
      recursiveDefinitions.push(recursiveDefinition);
    } else {
      const nonRecursiveDefinition = definition;  ///

      nonRecursiveDefinitions.push(nonRecursiveDefinition);
    }
  });

  const recursiveDefinitionsLength = recursiveDefinitions.length,
        ruleRecursive = (recursiveDefinitionsLength > 0);

  if (ruleRecursive) {
    const nonRecursiveRule = NonRecursiveRule.fromNonRecursiveDefinitionsAndRuleNames(nonRecursiveDefinitions, ruleNames),
          nonRecursiveRuleName = nonRecursiveRule.getName(),
          nonRecursiveDefinition = NonRecursiveDefinition.fromNonRecursiveRuleName(nonRecursiveRuleName),
          definitions = [
            ...recursiveDefinitions,
            nonRecursiveDefinition
          ];

    rule.setDefinitions(definitions);

    rules.push(nonRecursiveRule);
  }

  return ruleRecursive;
}

function eliminateLeftRecursionFromDefinition(definition, ruleNames, rules) {
  let recursiveDefinition = null;

  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartRuleNamePart = isPartRuleNamePart(firstPart);

  if (firstPartRuleNamePart) {
    const ruleNamePart = firstPart, ///
          ruleName = ruleNamePart.getRuleName();

    if (recursiveDefinition === null) {
      recursiveDefinition = eliminateImmediateLeftRecursionFromDefinition(definition, ruleName, ruleNames, rules);
    }

    if (recursiveDefinition === null) {
      recursiveDefinition = eliminateImplicitLeftRecursionFromDefinition(definition, ruleName, ruleNames, rules);
    }
  }

  return recursiveDefinition;
}

function eliminateImmediateLeftRecursionFromDefinition(definition, ruleName, ruleNames, rules) {
  let recursiveDefinition = null;

  const firstRuleName = first(ruleNames),
        ruleNameTopmostRuleName = (ruleName === firstRuleName);

  if (ruleNameTopmostRuleName) {
    const lastRuleName = last(ruleNames),
          ruleName = lastRuleName,  ///
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          rightRecursiveRule = RightRecursiveRule.fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName);

    recursiveDefinition = RecursiveDefinition.fromNonRecursiveRuleNameAndRightRecursiveRuleName(nonRecursiveRuleName, rightRecursiveRuleName);

    rules.push(rightRecursiveRule);
  }

  return recursiveDefinition;
}

function eliminateImplicitLeftRecursionFromDefinition(definition, ruleName, ruleNames, rules) {
  let recursiveDefinition = null;

  const name = ruleName,  ///
        rule = findRuleByName(name, rules);

  if (rule !== null) {
    const ruleRecursive = eliminateLeftRecursionFromRule(rule, ruleNames, rules);

    if (ruleRecursive) {
      recursiveDefinition = definition; ///
    }
  }

  return recursiveDefinition;
}
