"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RecursiveDefinition from "./definition/recursive";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";

import { retrieveLeftRecursiveRules } from "./utilities/rules";
import { mergeLeftRecursiveDefinitions } from "./utilities/definitions";

const { first, tail } = arrayUtilities;

export default function eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const directlyLeftRecursiveRules = retrieveDirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap);

  directlyLeftRecursiveRules.forEach((directlyLeftRecursiveRule) => {
    const rule = directlyLeftRecursiveRule, ///
          reducedRule = ReducedRule.fromDirectlyLeftRecursiveRule(directlyLeftRecursiveRule),
          reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;

    let definitions = rule.getDefinitions();

    const directlyLeftRecursiveDefinitions = retrieveDirectlyLeftRecursiveDefinitions(definitions),
          directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions),
          replacementDefinition = rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition),
          firstDirectlyLeftRecursiveDefinitions = first(directlyLeftRecursiveDefinitions),
          directlyLeftRecursiveDefinitionsTail = tail(directlyLeftRecursiveDefinitions),
          replacedDefinition = firstDirectlyLeftRecursiveDefinitions; ///

    definitions = directlyLeftRecursiveDefinitionsTail; ///

    rule.removeDefinitions(definitions);

    rule.replaceDefinition(replacedDefinition, replacementDefinition);
  });
}

function retrieveDirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap) {
  const directlyLeftRecursiveRules = retrieveLeftRecursiveRules(leftRecursiveDefinitions, DirectlyLeftRecursiveDefinition, ruleMap);

  return directlyLeftRecursiveRules;
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

function retrieveDirectlyLeftRecursiveDefinitions(definitions) {
  const directlyLeftRecursiveDefinitions = definitions.filter((definition) => {
          const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

          if (definitionDirectlyLeftRecursiveDefinition) {
            return true;
          }
        });

  return directlyLeftRecursiveDefinitions;
}
