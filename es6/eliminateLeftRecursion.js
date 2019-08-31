'use strict';

const partUtilities = require('./utilities/part'),
      ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      NonRecursiveRule = require('./rule/nonRecursive'),
      ruleNameUtilities = require('./utilities/ruleName'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      RecursiveDefinition = require('./definition/recursive'),
      definitionUtilities = require('./utilities/definition'),
      NonRecursiveDefinition = require('./definition/nonRecursive');

const { findRuleByName } = ruleUtilities,
      { isPartRuleNamePart } = partUtilities,
      { first, last, forEachWithRemove } = arrayUtilities,
      { ruleFromDefinition, isDDefinitionImmediateLeftRecursiveDefinition } = definitionUtilities,
      { resetRightRecursiveRuleNameCount, rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

function eliminateLeftRecursion(rules) {
  const map = {};

  removeImmediateLeftRecursionFromRules(rules, map);
}

module.exports = eliminateLeftRecursion;

function removeImmediateLeftRecursionFromRules(rules, map) {
  rules.forEach((rule) => {
    const ruleNames = [];

    removeImmediateLeftRecursionFromRule(rule, ruleNames, rules, map);
  });
}

function removeImmediateLeftRecursionFromRule(rule, ruleNames, rules, map) {
  const ruleName = rule.getName(),
        ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

  if (ruleNamesIncludesRuleName) {
    return;
  }

  ruleNames = [ ...ruleNames, ruleName ];

  const definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    const firstRuleName = first(ruleNames),
          ruleName = firstRuleName, ///
          definitionImmediatelyLeftRecursiveDefinition = isDDefinitionImmediateLeftRecursiveDefinition(definition, ruleName);

    if (definitionImmediatelyLeftRecursiveDefinition) {
      if (!map[ruleName]) {
        map[ruleName] = [];
      }

      const immediatelyLeftRecursiveDefinitions = map[ruleName],
            immediatelyLeftRecursiveDefinition = definition;  ///

      immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);

      return true;
    }

    const rule = ruleFromDefinition(definition, rules);

    if (rule !== null) {
      removeImmediateLeftRecursionFromRule(rule, ruleNames, rules, map)
    }
  });
}





























function eliminateLeftRecursionFromRules(rules) {
  rules.forEach((rule) => {
    const ruleNames = [];

    resetRightRecursiveRuleNameCount();

    eliminateLeftRecursionFromRule(rule, ruleNames, rules)
  });
}

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
