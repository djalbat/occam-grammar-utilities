"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RecursiveDefinition from "./definition/recursive";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";

import { mergeLeftRecursiveDefinitions } from "./utilities/definitions";
import LeftRecursiveDefinition from "./definition/recursive/left";

const { tail, first, filter } = arrayUtilities;

export default function eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let directlyLeftRecursiveDefinition = retrieveDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (directlyLeftRecursiveDefinition !== null) {
    const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
          rule = ruleMap[ruleName];

    reduceRule(rule, ruleMap);

    const directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions, ruleName);

    directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions);  ///

    const replacementDefinition = rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition),
          firstDirectlyLeftRecursiveDefinitions = first(directlyLeftRecursiveDefinitions),
          directlyLeftRecursiveDefinitionsTail = tail(directlyLeftRecursiveDefinitions),
          replacedDefinition = firstDirectlyLeftRecursiveDefinitions, ///
          definitions = directlyLeftRecursiveDefinitionsTail; ///

    rule.removeDefinitions(definitions);

    rule.replaceDefinition(replacedDefinition, replacementDefinition);

    const removedLeftRecursiveDefinitions = directlyLeftRecursiveDefinitions; ///

    amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions);

    directlyLeftRecursiveDefinition = retrieveDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);
  }
}

function reduceRule(rule, ruleMap) {
  let reducedLeftRecursiveDefinition = null;

  const reducedRule = ReducedRule.fromRule(rule);

  if (reducedRule !== null) {
    const leftRecursiveDefinition = LeftRecursiveDefinition.fromReducedRule(reducedRule),
          reducedRuleName = reducedRule.getName(),
          definitions = reducedRule.getDefinitions(),
          definition = leftRecursiveDefinition; ///

    rule.removeDefinitions(definitions);

    ruleMap[reducedRuleName] = reducedRule;

    reducedLeftRecursiveDefinition = definition;  ///
  }

  return reducedLeftRecursiveDefinition;
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

function retrieveDirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions, ruleName) {
  const directlyLeftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition) => {
          const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

          if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
            const directlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
                  directlyLeftRecursiveDefinitionRuleName = directlyLeftRecursiveDefinition.getRuleName();

            if (directlyLeftRecursiveDefinitionRuleName === ruleName) {
              return true;
            }
          }
        });

  return directlyLeftRecursiveDefinitions;
}
