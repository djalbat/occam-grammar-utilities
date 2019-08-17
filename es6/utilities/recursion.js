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
      { push, filter, iterateWithReplace } = arrayUtilities,
      { isDefinitionImmediatelyLeftRecursive } = definitionUtilities,
      { findRuleByName, deleteRuleByName, isRuleImmediatelyLeftRecursive } = ruleUtilities;

function eliminateLeftRecursionFromRule(rule, ruleName, rules) {
  let ruleLeftRecursive = false;

  if (ruleName === null) {
    ruleName = rule.getName();
  }

  const definitions = rule.getDefinitions(),
        nonRecursiveRule = NonRecursiveRule.fromRule(rule),
        rightRecursiveRules = [],
        nonRecursiveDefinitions = [];

  iterateWithReplace(definitions, (definition, count) => {
    const definitionImmediatelyLeftRecursive = isDefinitionImmediatelyLeftRecursive(definition, ruleName);

    if (definitionImmediatelyLeftRecursive) {
      const immediatelyLeftRecursiveDefinition = definition, ///
            rightRecursiveRule = RightRecursiveRule.fromRuleAndImmediatelyLeftRecursiveDefinition(rule, immediatelyLeftRecursiveDefinition, count),
            rightRecursiveDefinition = NonRecursiveDefinition.fromNonRecursiveRuleAndRightRecursiveRule(nonRecursiveRule, rightRecursiveRule);

      rightRecursiveRules.push(rightRecursiveRule);

      return rightRecursiveDefinition;
    }

    const definitionLeftRecursive = eliminateLeftRecursionFromDefinition(definition, ruleName, rules);

    if (!definitionLeftRecursive) {
      const nonRecursiveDefinition = definition;  ///

      nonRecursiveDefinitions.push(nonRecursiveDefinition);
    }
  });

  nonRecursiveRule.addNonRecursiveDefinitions(nonRecursiveDefinitions);

  push(rules, rightRecursiveRules);

  const definitionsLength = definitions.length,
        nonRecursiveDefinitionsLength = nonRecursiveDefinitions.length;

  if (nonRecursiveDefinitionsLength < definitionsLength) {
    const nonRecursiveDefinition = NonRecursiveDefinition.fromNonRecursiveRule(nonRecursiveRule);

    filter(definitions, (definition) => {
      const nonRecursiveDefinitionsIncludesDefinition = nonRecursiveDefinitions.includes(definition);

      if (!nonRecursiveDefinitionsIncludesDefinition) {
        return true;
      }
    });

    rule.addDefinition(nonRecursiveDefinition);

    rules.push(nonRecursiveRule);
  }

  return ruleLeftRecursive;
}

module.exports = {
  eliminateLeftRecursionFromRule
};

function eliminateLeftRecursionFromDefinition(definition, ruleName, rules) {
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
            ruleLeftRecursive = eliminateLeftRecursionFromRule(rule, ruleName, rules);

      definitionLeftRecursive = ruleLeftRecursive; ///
    }
  }

  return definitionLeftRecursive;
}

function isDefinitionLeftRecursive(definition, ruleName, rules) {
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
            ruleLeftRecursive = isRuleLeftRecursive(rule, ruleName, rules);

      definitionLeftRecursive = ruleLeftRecursive;  ///
    }
  }

  return definitionLeftRecursive;
}

function isRuleLeftRecursive(rule, ruleName, rules) {
  const definitions = rule.getDefinitions(),
        ruleLeftRecursive = definitions.some((definition) => {
          const definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName, rules);

          if (definitionLeftRecursive) {
            return true;
          }
        });

  return ruleLeftRecursive;
}















// definitions.forEach((definition) => {
// const leftRecursiveRule = leftRecursiveRuleFromRuleNameAndDefinition(definition, ruleName, rules);
//
// if (leftRecursiveRule !== null) {
//   rule = leftRecursiveRule; ///
//
//   const definitions = rule.getDefinitions(),
//         nonTerminalNode = rule.getNonTerminalNode(),
//         rightRecursiveRules = [];
//
//   iterateWithDelete(definitions, (definition, count) => {
//     const definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName);
//
//     if (definitionLeftRecursive) {
//       const rightRecursiveRule = RightRecursiveRule.fromLeftRecursiveRuleAndNonTerminalNode(leftRecursiveRule, nonTerminalNode, count);
//
//       rightRecursiveRules.push(rightRecursiveRule);
//
//       return true;
//     }
//   });

// const nonRecursiveRule = NonRecursiveRule.fromRule(rule),
//       nonRecursiveDefinition = NonRecursiveDefinition.fromNonRecursiveRule(nonRecursiveRule),
//       rightRecursiveRuleNameDefinitions = rightRecursiveRules.map((rightRecursiveRule) => {
//         const rightRecursiveRuleNameDefinition = RecursiveRuleNameDefinition.fromNonRecursiveRuleAndRecursiveRule(nonRecursiveRule, rightRecursiveRule);
//
//         return rightRecursiveRuleNameDefinition;
//       });
//
// rule.setDefinitions([
//   ...rightRecursiveRuleNameDefinitions,
//   nonRecursiveDefinition
// ]);
//
// rules.push(nonRecursiveRule);
//
// push(rules, rightRecursiveRules);

// rightRecursiveRules.forEach((rightRecursiveRule) => {
//   const leftRecursiveRuleName = rightRecursiveRule.getLeftRecursiveRuleName();
//
//   deleteRuleByName(leftRecursiveRuleName, rules);
// });
// }
// });