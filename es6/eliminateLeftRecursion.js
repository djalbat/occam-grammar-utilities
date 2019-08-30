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
      { resetRightRecursiveRuleNameCount, rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

function eliminateLeftRecursion(rules) {
  rules.forEach((rule) => {
    const ruleNames = [];

    resetRightRecursiveRuleNameCount();

    eliminateLeftRecursionFromRule(rule, ruleNames, rules)
  });
}

module.exports = eliminateLeftRecursion;

function eliminateLeftRecursionFromRule(rule, ruleNames, rules) {
  let ruleRecursive = false;

  const ruleName = rule.getName(),
        definitions = rule.getDefinitions(),
        recursiveDefinitions = [],
        nonRecursiveDefinitions = [];

  ruleNames = ruleNames.concat(ruleName);

  definitions.forEach((definition) => {
    const recursiveDefinition = eliminateLeftRecursionFromDefinition(definition, ruleNames, rules);

    if (recursiveDefinition !== null) {
      ruleRecursive = true;

      recursiveDefinitions.push(recursiveDefinition);
    } else {
      const nonRecursiveDefinition = definition;  ///

      nonRecursiveDefinitions.push(nonRecursiveDefinition);
    }
  });

  if (ruleRecursive) {
    const definitions = recursiveDefinitions, ///
          nonRecursiveDefinitionsLength = nonRecursiveDefinitions.length;

    if (nonRecursiveDefinitionsLength > 0) {
      const nonRecursiveRule = NonRecursiveRule.fromNonRecursiveDefinitionsAndRuleNames(nonRecursiveDefinitions, ruleNames),
            nonRecursiveRuleName = nonRecursiveRule.getName(),
            nonRecursiveDefinition = NonRecursiveDefinition.fromNonRecursiveRuleName(nonRecursiveRuleName),
            definition = nonRecursiveDefinition; ///

      definitions.push(definition);

      rules.push(nonRecursiveRule);
    }

    rule.setDefinitions(definitions);
  }

  return ruleRecursive;
}

function eliminateLeftRecursionFromDefinition(definition, ruleNames, rules) {
  let recursiveDefinition = null;

  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartRuleNamePart = isPartRuleNamePart(firstPart);

  if (firstPartRuleNamePart) {
    const ruleNamePart = firstPart; ///

    if (recursiveDefinition === null) {
      recursiveDefinition = eliminateImmediateLeftRecursionFromDefinition(definition, ruleNamePart, ruleNames, rules);
    }

    if (recursiveDefinition === null) {
      recursiveDefinition = eliminateIndirectLeftRecursionFromDefinition(definition, ruleNamePart, ruleNames, rules);
    }
  }

  return recursiveDefinition;
}

function eliminateIndirectLeftRecursionFromDefinition(definition, ruleNamePart, ruleNames, rules) {
  let recursiveDefinition = null;

  const ruleName = ruleNamePart.getRuleName(),
        name = ruleName,  ///
        rule = findRuleByName(name, rules);

  if (rule !== null) {
    const ruleRecursive = eliminateLeftRecursionFromRule(rule, ruleNames, rules);

    if (ruleRecursive) {
      recursiveDefinition = definition; ///
    }
  }

  return recursiveDefinition;
}

function eliminateImmediateLeftRecursionFromDefinition(definition, ruleNamePart, ruleNames, rules) {
  let recursiveDefinition = null;

  const ruleName = ruleNamePart.getRuleName(),
        firstRuleName = first(ruleNames),
        ruleNameTopmostRuleName = (ruleName === firstRuleName);

  if (ruleNameTopmostRuleName) {
    const lastRuleName = last(ruleNames),
          ruleName = lastRuleName,  ///
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          rightRecursiveRule = RightRecursiveRule.fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName);

    recursiveDefinition = RecursiveDefinition.fromRuleNamePartAndRightRecursiveRuleName(ruleNamePart, rightRecursiveRuleName);

    rules.push(rightRecursiveRule);
  }

  return recursiveDefinition;
}
