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

function eliminateLeftRecursionFromRule(rule, ruleNames, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions(),
        recursiveDefinitions = [],
        nonRecursiveDefinitions = [];

  ruleNames = ruleNames.concat(ruleName);

  definitions.forEach((definition, count) => {
    const recursiveDefinition = eliminateLeftRecursionFromDefinition(definition, ruleNames, rule, rules, count);

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
    const nonRecursiveRule = NonRecursiveRule.fromNonRecursiveDefinitionsAndRuleNames(nonRecursiveDefinitions, ruleNames),
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

function eliminateLeftRecursionFromDefinition(definition, ruleNames, rule, rules, count) {
  let recursiveDefinition = null;

  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartRuleNamePart = isPartRuleNamePart(firstPart);

  if (firstPartRuleNamePart) {
    const ruleNamePart = firstPart; ///

    if (recursiveDefinition === null) {
      recursiveDefinition = eliminateImmediateLeftRecursionFromDefinition(ruleNamePart, definition, ruleNames, rule, rules, count);
    }

    if (recursiveDefinition === null) {
      recursiveDefinition = eliminateImplicitLeftRecursionFromDefinition(ruleNamePart, definition, ruleNames, rules);
    }
  }

  return recursiveDefinition;
}

function eliminateImmediateLeftRecursionFromDefinition(ruleNamePart, definition, ruleNames, rule, rules, count) {
  let recursiveDefinition = null;

  const firstRuleName = first(ruleNames),
        ruleNamePartRuleName = ruleNamePart.getRuleName(),
        ruleNamePartRuleNameRuleName = (ruleNamePartRuleName === firstRuleName);

  if (ruleNamePartRuleNameRuleName) {
    const ruleName = rule.getName(),
          rightRecursiveRule = RightRecursiveRule.fromDefinitionAndRuleName(definition, ruleName, rules, count);

    recursiveDefinition = RecursiveDefinition.fromRuleName(ruleName, count);

    rules.push(rightRecursiveRule);
  }

  return recursiveDefinition;
}

function eliminateImplicitLeftRecursionFromDefinition(ruleNamePart, definition, ruleNames, rules) {
  let recursiveDefinition = null;

  const ruleNamePartRuleName = ruleNamePart.getRuleName(),
        name = ruleNamePartRuleName,  ///
        rule = findRuleByName(name, rules);

  if (rule !== null) {
    const ruleRecursive = eliminateLeftRecursionFromRule(rule, ruleNames, rules);

    if (ruleRecursive) {
      recursiveDefinition = definition; ///
    }
  }

  return recursiveDefinition;
}
