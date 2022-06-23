"use strict";

import { Definition } from "occam-parsers";

import ReducedRule from "./rule/reduced";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";

import { isInstanceOf } from "./utilities/class";
import { repeatedPartFromParts } from "./utilities/parts";
import { reducedPartFromRuleName } from "./utilities/part";
import { mergeLeftRecursiveDefinitions } from "./utilities/definitions";

export default function eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const directlyLeftRecursiveRules = retrieveDirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap);

  directlyLeftRecursiveRules.forEach((directlyLeftRecursiveRule) => {
    const reducedRule = ReducedRule.fromDirectlyLeftRecursiveRule(directlyLeftRecursiveRule),
          reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;

    const directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveRule),
          directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions),
          definition = rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition);

    const replacementDefinition = definition,  ///
          replacedDefinition = directlyLeftRecursiveDefinitions.shift(), ///
          definitions = directlyLeftRecursiveDefinitions; ///

    directlyLeftRecursiveRule.removeDefinitions(definitions);

    directlyLeftRecursiveRule.replaceDefinition(replacedDefinition, replacementDefinition);
  });
}

function retrieveDirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap) {
  const directlyLeftRecursiveRules = [];

  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, DirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
      const directlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
            ruleName = directlyLeftRecursiveDefinition.getRuleName(),
            rule = ruleMap[ruleName],
            directlyLeftRecursiveRulesIncludesRule = directlyLeftRecursiveRules.includes(rule);

      if (!directlyLeftRecursiveRulesIncludesRule) {
        const directlyLeftRecursiveRule = rule; ///

        directlyLeftRecursiveRules.push(directlyLeftRecursiveRule);
      }
    }
  });

  return directlyLeftRecursiveRules;
}

function mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinition = mergeLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, DirectlyLeftRecursiveDefinition);

  return directlyLeftRecursiveDefinition;
}

function rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
  let parts = directlyLeftRecursiveDefinition.getParts();

  parts.shift();

  const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
        reducedPart = reducedPartFromRuleName(ruleName),
        repeatedPart = repeatedPartFromParts(parts);

  parts = [ ///
    reducedPart,
    repeatedPart
  ]

  const definition = new Definition(parts);

  return definition;
}

function retrieveDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveRule) {
  const definitions = directlyLeftRecursiveRule.getDefinitions(),
        directlyLeftRecursiveDefinitions = definitions.filter((definition) => {
          const definitionDirectlyLeftRecursiveDefinition = isInstanceOf(definition, DirectlyLeftRecursiveDefinition);

          if (definitionDirectlyLeftRecursiveDefinition) {
            return true;
          }
        });

  return directlyLeftRecursiveDefinitions;
}
