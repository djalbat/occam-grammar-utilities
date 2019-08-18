'use strict';

const partUtilities = require('../utilities/part'),
      ruleUtilities = require('../utilities/rule'),
      arrayUtilities = require('../utilities/array'),
      NonRecursiveRule = require('../rule/nonRecursive'),
      RightRecursiveRule = require('../rule/rightRecursive'),
      RecursiveDefinition = require('../definition/recursive'),
      definitionUtilities = require('../utilities/definition'),
      NonRecursiveDefinition = require('../definition/nonRecursive'),
      RightRecursiveDefinition = require('../definition/rightRecursive'),
      RecursiveRuleNameDefinition = require('../definition/recursiveRuleName'),
      NonRecursiveRuleNameDefinition = require('../definition/nonRecursiveRuleName');

const { first } = arrayUtilities,
      { isPartRuleNamePart } = partUtilities,
      { push, filter, iterateWithReplace } = arrayUtilities,
      { isDefinitionImmediatelyLeftRecursive } = definitionUtilities,
      { findRuleByName, deleteRuleByName, isRuleImmediatelyLeftRecursive } = ruleUtilities;

function eliminateLeftRecursionFromRule(rule, ruleName, rules) {
  if (ruleName === null) {
    ruleName = rule.getName();
  }

  const definitions = rule.getDefinitions(),
        recursiveDefinitions = [],
        nonRecursiveDefinitions = [];

  definitions.forEach((definition, count) => {
    const recursiveDefinition = eliminateLeftRecursionFromDefinition(definition, ruleName, rules, count);

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
    const nonRecursiveRule = NonRecursiveRule.fromRuleAndNonRecursiveDefinitions(rule, nonRecursiveDefinitions),
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

function eliminateLeftRecursionFromDefinition(definition, ruleName, rules, count) {
  let recursiveDefinition = null;

  if (recursiveDefinition === null) {
    recursiveDefinition = eliminateImmediateLeftRecursionFromDefinition(definition, ruleName, rules, count);
  }

  if (recursiveDefinition === null) {
    recursiveDefinition = eliminateImplicitLeftRecursionFromDefinition(definition, ruleName, rules);
  }

  return recursiveDefinition;
}

function eliminateImmediateLeftRecursionFromDefinition(definition, ruleName, rules, count) {
  let recursiveDefinition = null;

  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartRuleNamePart = isPartRuleNamePart(firstPart);

  if (firstPartRuleNamePart) {
    const ruleNamePart = firstPart, ///
          ruleNamePartRuleName = ruleNamePart.getRuleName(),
          ruleNamePartRuleNameRuleName = (ruleNamePartRuleName === ruleName);

    if (ruleNamePartRuleNameRuleName) {
      const rightRecursiveRule = RightRecursiveRule.fromDefinitionAndRuleName(definition, ruleName, rules, count);

      recursiveDefinition = RecursiveDefinition.fromRuleName(ruleName, count);

      rules.push(rightRecursiveRule);
    }
  }

  return recursiveDefinition;
}

function eliminateImplicitLeftRecursionFromDefinition(definition, ruleName, rules) {
  let recursiveDefinition = null;

  ///

  return recursiveDefinition;
}

// function eliminateLeftRecursionFromDefinition(definition, ruleName, rules) {
//   let definitionLeftRecursive = false;
//
//   const parts = definition.getParts(),
//         firstPart = first(parts),
//         firstPartRuleNamePart = isPartRuleNamePart(firstPart);
//
//   if (firstPartRuleNamePart) {
//     const ruleNamePart = firstPart, ///
//           ruleNamePartRuleName = ruleNamePart.getRuleName(),
//           ruleNamePartRuleNameRuleName = (ruleNamePartRuleName === ruleName);
//
//     if (ruleNamePartRuleNameRuleName) {
//       definitionLeftRecursive = true;
//     } else {
//       const name = ruleNamePartRuleName,  ///
//             rule = findRuleByName(name, rules);
//
//       if (rule !== null) {
//         const ruleLeftRecursive = eliminateLeftRecursionFromRule(rule, ruleName, rules);
//
//         definitionLeftRecursive = ruleLeftRecursive; ///
//       }
//     }
//   }
//
//   return definitionLeftRecursive;
// }
//
// function isDefinitionLeftRecursive(definition, ruleName, rules) {
//   let definitionLeftRecursive = false;
//
//   const parts = definition.getParts(),
//         firstPart = first(parts),
//         firstPartRuleNamePart = isPartRuleNamePart(firstPart);
//
//   if (firstPartRuleNamePart) {
//     const ruleNamePart = firstPart, ///
//           ruleNamePartRuleName = ruleNamePart.getRuleName(),
//           ruleNamePartRuleNameRuleName = (ruleNamePartRuleName === ruleName);
//
//     if (ruleNamePartRuleNameRuleName) {
//       definitionLeftRecursive = true;
//     } else {
//       const name = ruleNamePartRuleName,  ///
//             rule = findRuleByName(name, rules),
//             ruleLeftRecursive = isRuleLeftRecursive(rule, ruleName, rules);
//
//       definitionLeftRecursive = ruleLeftRecursive;  ///
//     }
//   }
//
//   return definitionLeftRecursive;
// }
//
// function isRuleLeftRecursive(rule, ruleName, rules) {
//   const definitions = rule.getDefinitions(),
//         ruleLeftRecursive = definitions.some((definition) => {
//           const definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName, rules);
//
//           if (definitionLeftRecursive) {
//             return true;
//           }
//         });
//
//   return ruleLeftRecursive;
// }
