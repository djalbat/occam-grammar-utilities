"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RecursiveDefinition from "./definition/recursive";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";

import { mergeLeftRecursiveDefinitions } from "./utilities/definitions";

const { filter } = arrayUtilities;

export default function eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let directlyLeftRecursiveDefinition = retrieveDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (directlyLeftRecursiveDefinition !== null) {
    const leftRecursiveRuleName = directlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveRuleName);

    directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions);  ///

    const removedLeftRecursiveDefinitions = directlyLeftRecursiveDefinitions, ///
          replacementDefinition = rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition),
          ruleName = leftRecursiveRuleName, ///
          rule = ruleMap[ruleName];

    reduceRule(rule, ruleMap);

    rule.replaceAllDefinitions(replacementDefinition);

    amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions);

    directlyLeftRecursiveDefinition = retrieveDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);  ///
  }
}

function reduceRule(rule, ruleMap) {
  let reducedRuleName = null;

  const reducedRule = ReducedRule.fromRule(rule);

  if (reducedRule !== null) {
    reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;
  }

  return reducedRuleName;
}

function amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions) {
  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition = removedLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

    if (!removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition) {
      return true;
    }
  });
}

function mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinition = mergeLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, (parts, ruleName) => {
    const directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromPartsAndRuleName(parts, ruleName);

    return directlyLeftRecursiveDefinition;
  });

  return directlyLeftRecursiveDefinition;
}

function rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
  const recursiveDefinition = RecursiveDefinition.fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition),
        replacementDefinition = recursiveDefinition;  ///

  return replacementDefinition;
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
