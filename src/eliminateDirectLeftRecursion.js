"use strict";

import { arrayUtilities } from "necessary";

import RecursiveDefinition from "./definition/recursive";
import DirectlyReducedRule from "./rule/reduced/directly";
import DirectlyRepeatedRule from "./rule/repeated/directly";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";

const { find, filter } = arrayUtilities;

export default function eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (directlyLeftRecursiveDefinition !== null) {
    rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

    directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);  ///
  }
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName];

  const directlyReducedRule = DirectlyReducedRule.fromRule(rule),
        directlyRepeatedRule = DirectlyRepeatedRule.fromRule(rule);

  if (directlyReducedRule === null) {
    const definition = directlyLeftRecursiveDefinition, ///
          definitionString = definition.asString();

    throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is isolated and therefore the rule cannot be rewritten.`);
  }

  if (directlyRepeatedRule === null) {
    const definition = directlyLeftRecursiveDefinition, ///
          definitionString = definition.asString();

    throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore the rule cannot be rewritten.`);
  }

  const directlyReducedRuleName = directlyReducedRule.getName(),
        directlyRepeatedRuleName = directlyRepeatedRule.getName();

  ruleMap[directlyReducedRuleName] = directlyReducedRule;

  ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;

  const leftRecursiveRuleName = directlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveRuleName);

  // directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions);  ///

  const recursiveDefinition = RecursiveDefinition.fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition),
        replacementDefinition = recursiveDefinition,  ///
        removedLeftRecursiveDefinitions = directlyLeftRecursiveDefinitions; ///

  rule.replaceAllDefinitions(replacementDefinition);

  amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions);
}

function amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions) {
  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition = removedLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

    if (!removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition) {
      return true;
    }
  });
}

function findDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinition = leftRecursiveDefinitions.find((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
      return true;
    }
  }) || null;

  return directlyLeftRecursiveDefinition;
}

function findDirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveRuleName) {
  const directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
      const directlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
            ruleName = directlyLeftRecursiveDefinition.getRuleName();

      if (ruleName === leftRecursiveRuleName) {
        return true;
      }
    }
  });

  return directlyLeftRecursiveDefinitions;
}
