"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RecursiveDefinition from "./definition/recursive";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";

import { retrieveLeftRecursiveRules } from "./utilities/rules";
import { mergeLeftRecursiveDefinitions, retrieveLeftRecursiveDefinitions } from "./utilities/definitions";

const { first, tail } = arrayUtilities;

export default function eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const directlyLeftRecursiveRules = retrieveDirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap);

  directlyLeftRecursiveRules.forEach((directlyLeftRecursiveRule) => {
    const reducedRule = ReducedRule.fromDirectlyLeftRecursiveRule(directlyLeftRecursiveRule),
          reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;

    const directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveRule),
          directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions),
          replacementDefinition = rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition),
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
  const recursiveDefinition = RecursiveDefinition.fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition),
        replacementDefinition = recursiveDefinition;  ///

  return replacementDefinition;
}

function retrieveDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveRule) {
  const directlyLeftRecursiveDefinitions = retrieveLeftRecursiveDefinitions(directlyLeftRecursiveRule, DirectlyLeftRecursiveDefinition);

  return directlyLeftRecursiveDefinitions;
}