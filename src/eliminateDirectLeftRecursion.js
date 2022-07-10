"use strict";

import { arrayUtilities } from "necessary";

import RecursiveDefinition from "./definition/recursive";
import DirectlyReducedRule from "./rule/reduced/directly";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";

import { mergeDirectlyLeftRecursiveDefinitions } from "./utilities/definitions";

const { filter } = arrayUtilities;

export default function eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let directlyLeftRecursiveDefinition = retrieveDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (directlyLeftRecursiveDefinition !== null) {
    rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

    directlyLeftRecursiveDefinition = retrieveDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);  ///
  }
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName],
        directlyReducedRule = DirectlyReducedRule.fromRule(rule);

  if (directlyReducedRule === null) {
    const definition = directlyLeftRecursiveDefinition, ///
          definitionString = definition.asString();

    throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is isolated and therefore cannot be rewritten.`);
  }

  const directlyReducedRuleName = directlyReducedRule.getName();

  ruleMap[directlyReducedRuleName] = directlyReducedRule;

  const leftRecursiveRuleName = directlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveRuleName);

  directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions);  ///

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

function retrieveDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions) {
  let directlyLeftRecursiveDefinition = null;

  leftRecursiveDefinitions.some((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
      directlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///

      return true;
    }
  });

  return directlyLeftRecursiveDefinition;
}

function retrieveDirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveRuleName) {
  const directlyLeftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition) => {
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
