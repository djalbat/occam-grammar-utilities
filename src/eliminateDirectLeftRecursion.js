"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";

import { reducedPartFromPart } from "./utilities/part";
import { repeatedPartFromParts } from "./utilities/parts";
import { retrieveLeftRecursiveRules } from "./utilities/rules";
import { definitionPartsFromDefinition } from "./utilities/definition";
import { mergeLeftRecursiveDefinitions } from "./utilities/definitions";

const { first, tail } = arrayUtilities;

export default function eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const directlyLeftRecursiveRules = retrieveDirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap);

  directlyLeftRecursiveRules.forEach((directlyLeftRecursiveRule) => {
    const reducedRule = ReducedRule.fromDirectlyLeftRecursiveRule(directlyLeftRecursiveRule),
          reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;

    const directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveRule),
          directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions),
          rewrittenDefinition = rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition);

    const replacementDefinition = rewrittenDefinition,  ///
          replacedDefinition = first(directlyLeftRecursiveDefinitions), ///
          definitions = tail(directlyLeftRecursiveDefinitions); ///

    directlyLeftRecursiveRule.removeDefinitions(definitions);

    directlyLeftRecursiveRule.replaceDefinition(replacedDefinition, replacementDefinition);
  });
}

function retrieveDirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap) {
  const directlyLeftRecursiveRules = retrieveLeftRecursiveRules(leftRecursiveDefinitions, DirectlyLeftRecursiveDefinition, ruleMap);

  return directlyLeftRecursiveRules;
}

function mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinition = mergeLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, DirectlyLeftRecursiveDefinition);

  return directlyLeftRecursiveDefinition;
}

function rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
  let directlyLeftRecursiveDefinitionParts = definitionPartsFromDefinition(directlyLeftRecursiveDefinition);

  const firstDirectlyLeftDefinitionPart = first(directlyLeftRecursiveDefinitionParts),
        part = firstDirectlyLeftDefinitionPart, ///
        reducedPart = reducedPartFromPart(part);

  let parts = directlyLeftRecursiveDefinitionParts; ///

  const repeatedPart = repeatedPartFromParts(parts);

  parts = [
    reducedPart,
    repeatedPart
  ]

  const definition = new Definition(parts),
        rewrittenDefinition = definition; ///

  return rewrittenDefinition;
}

function retrieveDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveRule) {
  const definitions = directlyLeftRecursiveRule.getDefinitions(),
        directlyLeftRecursiveDefinitions = definitions.filter((definition) => {
          const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

          if (definitionDirectlyLeftRecursiveDefinition) {
            return true;
          }
        });

  return directlyLeftRecursiveDefinitions;
}
