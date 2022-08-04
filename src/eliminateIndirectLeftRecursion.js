"use strict";

import { arrayUtilities } from "necessary";

import DirectlyReducedRule from "./rule/reduced/directly";
import DirectlyRepeatedRule from "./rule/repeated/directly";
import IndirectlyReducedRule from "./rule/reduced/indirectly";
import IndirectlyRepeatedRule from "./rule/repeated/indirectly";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { indirectlyReducedRuleNameFromRuleName } from "./utilities/ruleName";
import {isDefinitionUnary} from "./utilities/definition";

const { find, push, first, filter } = arrayUtilities;

let count = 0;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let greatestIndirectlyLeftRecursiveDefinition = retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (greatestIndirectlyLeftRecursiveDefinition !== null) {
    const indirectlyLeftRecursiveDefinition = greatestIndirectlyLeftRecursiveDefinition, ///
          directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, ruleMap);

    (directlyLeftRecursiveDefinition !== null) ?
      rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) :
        rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

    greatestIndirectlyLeftRecursiveDefinition = ++count > Infinity ? null : retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);
  }
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName];

  const disallowIsolated = false,
        directlyReducedRule = DirectlyReducedRule.fromRule(rule, disallowIsolated);

  let directlyReducedRuleName = null;

  if (directlyReducedRule !== null) {
    directlyReducedRuleName = directlyReducedRule.getName();

    ruleMap[directlyReducedRuleName] = directlyReducedRule;
  }

  const directlyRepeatedRule = DirectlyRepeatedRule.fromRule(rule),
        directlyRepeatedRuleName = directlyRepeatedRule.getName();

  ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;

  const definitions = rule.getDefinitions(),
        directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(definitions);

  let indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(definitions);

  const removedLeftRecursiveDefinitions = [
    ...directlyLeftRecursiveDefinitions,
    ...indirectlyLeftRecursiveDefinitions
  ];

  indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {
    indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, directlyRepeatedRuleName);  ///

    return indirectlyLeftRecursiveDefinition;
  });

  let replacementDefinitions = [
    ...indirectlyLeftRecursiveDefinitions
  ];

  if (directlyReducedRuleName !== null) {
    const leftRecursiveDefinition = LeftRecursiveDefinition.fromDirectlyReducedRuleNameAndDirectlyRepeatedRuleName(directlyReducedRuleName, directlyRepeatedRuleName);

    replacementDefinitions = [
      ...replacementDefinitions,
      leftRecursiveDefinition
    ];
  }

  rule.replaceAllDefinitions(...replacementDefinitions);

  const addedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///

  amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, ...addedLeftRecursiveDefinitions);
}

function rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
        leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        least = indirectlyLeftRecursiveDefinition.isLeast();

  const leftRecursiveDefinitionRuleName = leftRecursiveDefinition.getRuleName(),
        leftRecursiveDefinitionRule = ruleMap[leftRecursiveDefinitionRuleName];

  const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName];

  const indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName),
        indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();

  ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;

  let indirectlyReducedLeftRecursiveDefinition = null,
      indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleName(ruleName),
      indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || null;

  if (indirectlyReducedRule === null) {
    indirectlyReducedRule = IndirectlyReducedRule.fromRule(rule);

    ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;

    const indirectlyReducedRuleDefinitions = indirectlyReducedRule.getDefinitions(),
          indirectlyReducedRuleDefinitionsLength = indirectlyReducedRuleDefinitions.length;

    if (indirectlyReducedRuleDefinitionsLength > 0) {
      indirectlyReducedLeftRecursiveDefinition = LeftRecursiveDefinition.fromLeftRecursiveDefinitionAndIndirectlyReducedRuleName(leftRecursiveDefinition, indirectlyReducedRuleName);  ///
    }
  }

  const definitions = rule.getDefinitions(),
        replacedDefinition = indirectlyLeftRecursiveDefinition, ///
        leftRecursiveDefinitionUnary = isDefinitionUnary(leftRecursiveDefinition),
        unary = leftRecursiveDefinitionUnary, ///
        replacementDefinition = LeftRecursiveDefinition.fromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName, unary),  ///
        indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName);

  rule.replaceDefinition(replacedDefinition, replacementDefinition);

  rule.removeDefinitions(indirectlyLeftRecursiveDefinitions);

  const addedLeftRecursiveDefinition = least ?
                                         DirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndIndirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, indirectlyRepeatedRuleName) :  ///
                                           IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndIndirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, indirectlyRepeatedRuleName),  ///
        removedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///

  leftRecursiveDefinitionRule.addDefinition(addedLeftRecursiveDefinition);

  leftRecursiveDefinitionRule.removeDefinition(leftRecursiveDefinition);

  if (indirectlyReducedLeftRecursiveDefinition !== null) {
    leftRecursiveDefinitionRule.addDefinition(indirectlyReducedLeftRecursiveDefinition);
  }

  amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, addedLeftRecursiveDefinition);
}

function amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, ...addedLeftRecursiveDefinitions) {
  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition = removedLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

    if (!removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition) {
      return true;
    }
  });

  push(leftRecursiveDefinitions, addedLeftRecursiveDefinitions);
}

function findDirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, ruleMap) {
  const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName],
        definitions = rule.getDefinitions(),
        directlyLeftRecursiveDefinition = definitions.find((definition) => {
          const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

          if (definitionDirectlyLeftRecursiveDefinition) {
            return true;
          }
        }) || null;

  return directlyLeftRecursiveDefinition;
}

function findDirectlyLeftRecursiveDefinitions(definitions) {
  const directlyLeftRecursiveDefinitions = find(definitions, (definition) => {
    const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

    if (definitionDirectlyLeftRecursiveDefinition) {
      return true;
    }
  });

  return directlyLeftRecursiveDefinitions;
}

function findIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName = null) {
  const indirectlyLeftRecursiveDefinitions = find(definitions, (definition) => {
    const definitionIndirectlyLeftRecursiveDefinition = (definition instanceof IndirectlyLeftRecursiveDefinition);

    if (definitionIndirectlyLeftRecursiveDefinition) {
      if (leftRecursiveRuleName === null) {
        return true;
      }

      const indirectlyLeftRecursiveDefinition = definition,  ///
            leftRecursiveRuleNames = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleNames(),
            firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
            ruleName = firstLeftRecursiveRuleName; ///

      if (ruleName === leftRecursiveRuleName) {
        return true;
      }
    }
  });

  return indirectlyLeftRecursiveDefinitions;
}

function retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions) {
  let greatestIndirectlyLeftRecursiveDefinition = null;

  const definitions = leftRecursiveDefinitions, ///
        indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(definitions);

  indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
    if (greatestIndirectlyLeftRecursiveDefinition === null) {
      greatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
    } else {
      const indirectlyLeftRecursiveDefinitionGreaterThanGreatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.isGreaterThan(greatestIndirectlyLeftRecursiveDefinition);

      if (indirectlyLeftRecursiveDefinitionGreaterThanGreatestIndirectlyLeftRecursiveDefinition) {
        greatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
      }
    }
  });

  return greatestIndirectlyLeftRecursiveDefinition;
}
