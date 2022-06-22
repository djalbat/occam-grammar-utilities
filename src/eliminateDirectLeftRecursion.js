"use strict";

import { arrayUtilities } from "necessary";
import { Parts, Definition } from "occam-parsers";

import ReducedRule from "./rule/reduced";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";

import { isInstanceOf } from "./utilities/class";
import { reducedPartFromRuleName } from "./utilities/part";
import { repeatedPartFromParts, singlePartFromParts } from "./utilities/parts";

const { first } = arrayUtilities,
      { ChoiceOfPartsPart } = Parts;

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
          replacedDefinition = directlyLeftRecursiveDefinitions.shift(), ///
          definitions = directlyLeftRecursiveDefinitions; ///

    directlyLeftRecursiveRule.removeDefinitions(definitions);

    directlyLeftRecursiveRule.replaceDefinition(replacedDefinition, replacementDefinition);
  });
}

function retrieveDirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap) {
  const directlyLeftRecursiveRules = [];

  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
    const ruleName = leftRecursiveDefinition.getRuleName(),
          rule = ruleMap[ruleName],
          directlyLeftRecursiveRulesIncludesRule = directlyLeftRecursiveRules.includes(rule);

    if (!directlyLeftRecursiveRulesIncludesRule) {
      const directlyLeftRecursiveRule = rule; ///

      directlyLeftRecursiveRules.push(directlyLeftRecursiveRule);
    }
  })

  return directlyLeftRecursiveRules;
}

function mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
  let directlyLeftRecursiveDefinition;

  const firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions),
        directlyLeftRecursiveDefinitionsLength = directlyLeftRecursiveDefinitions.length;

  if (directlyLeftRecursiveDefinitionsLength === 1) {
    directlyLeftRecursiveDefinition = firstDirectlyLeftRecursiveDefinition;
  } else {
    let parts;

    parts = firstDirectlyLeftRecursiveDefinition.getParts();  ///

    const firstPart = first(parts),
          part = firstPart; ///

    const singleParts = directlyLeftRecursiveDefinitions.map((directlyLeftRecursiveDefinition) => {
      const parts = directlyLeftRecursiveDefinition.getParts();

      parts.shift();  ///

      const singlePart = singlePartFromParts(parts);

      return singlePart;
    });

    parts = singleParts;  ///

    const choiceOfPartsPart = new ChoiceOfPartsPart(parts);

    parts = [ ///
      part,
      choiceOfPartsPart
    ]

    const ruleName = firstDirectlyLeftRecursiveDefinition.getRuleName();

    directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleNameAndParts(ruleName, parts);
  }

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

  const definition = new Definition(parts),
        rewrittenDefinition = definition; ///

  return rewrittenDefinition;
}

function retrieveDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveRule) {
  const definitions = directlyLeftRecursiveRule.getDefinitions(),
        directlyLeftRecursiveDefinitions = definitions.filter((definition) => {
          const definitionIndirectlyLeftRecursiveDefinition = isInstanceOf(definition, DirectlyLeftRecursiveDefinition);

          if (definitionIndirectlyLeftRecursiveDefinition) {
            return true;
          }
        });

  return directlyLeftRecursiveDefinitions;
}
