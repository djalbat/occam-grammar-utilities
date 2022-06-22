"use strict";

import { arrayUtilities } from "necessary";
import { Parts, Definition } from "occam-parsers";

import ReducedRule from "./rule/reduced";
import RepeatedRule from "./rule/repeated";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { isInstanceOf } from "./utilities/class";
import { reducedPartFromRuleName } from "./utilities/part";
import { cloneParts, repeatedPartFromParts, singlePartFromParts } from "./utilities/parts";

const { ChoiceOfPartsPart } = Parts,
      { find, tail, push, first, filter } = arrayUtilities;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions);

  indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
    let directlyLeftRecursiveRule;

    const indirectlyLeftRecursiveDefinitionRuleName = indirectlyLeftRecursiveDefinition.getRuleName(),
          indirectlyLeftRecursiveRuleName = indirectlyLeftRecursiveDefinitionRuleName,  ///
          indirectlyLeftRecursiveRule = ruleMap[indirectlyLeftRecursiveRuleName];

    rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap);

    const implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
          implicitlyLeftRecursiveDefinitionRuleName = implicitlyLeftRecursiveDefinition.getRuleName(),
          implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveDefinitionRuleName,  ///
          implicitlyLeftRecursiveRule = ruleMap[implicitlyLeftRecursiveRuleName];

    rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, indirectlyLeftRecursiveRule, leftRecursiveDefinitions, ruleMap);

    rewriteImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule, indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

    directlyLeftRecursiveRule = implicitlyLeftRecursiveRule;  ///

    rewriteDirectlyLeftRecursiveRule(directlyLeftRecursiveRule, leftRecursiveDefinitions);
  });
}

function rewriteDirectlyLeftRecursiveRule(directlyLeftRecursiveRule, leftRecursiveDefinitions) {
  const rule = directlyLeftRecursiveRule, ///
        directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        definition = definitionFromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition),
        replacedDefinition = directlyLeftRecursiveDefinition, ///
        replacementDefinition = definition; ///

  directlyLeftRecursiveRule.replaceDefinition(replacedDefinition, replacementDefinition);

  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition === directlyLeftRecursiveDefinition);

    if (!leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
      return true;
    }
  })
}

function rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap) {
  const reducedRule = ReducedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule),
        repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule),
        reducedRuleName = reducedRule.getName(),
        repeatedRuleName = repeatedRule.getName();

  ruleMap[reducedRuleName] = reducedRule;

  ruleMap[repeatedRuleName] = repeatedRule;
}

function rewriteImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule, indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const reducedRule = ReducedRule.fromImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule),
        reducedRuleName = reducedRule.getName();

  ruleMap[reducedRuleName] = reducedRule;

  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = (leftRecursiveDefinition === indirectlyLeftRecursiveDefinition);

    if (!leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      return true;
    }
  })

  indirectlyLeftRecursiveRule.removeDefinition(indirectlyLeftRecursiveDefinition);
}

function mergeDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
  let directlyLeftRecursiveDefinition;

  const definitions = rule.getDefinitions(),
        directlyLeftRecursiveDefinitions = find(definitions, (definition) => {
          const definitionDirectlyLeftRecursiveDefinition = isInstanceOf(definition, DirectlyLeftRecursiveDefinition);

          if (definitionDirectlyLeftRecursiveDefinition) {
            return true;
          }
        }),
        firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions),
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

    filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
      const directlyLeftRecursiveDDefinitionsIncludesLeftRecursiveDefinition = directlyLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

      if (!directlyLeftRecursiveDDefinitionsIncludesLeftRecursiveDefinition) {
        return true;
      }
    });

    const definitions = tail(directlyLeftRecursiveDefinitions),
          replacedDefinition = firstDirectlyLeftRecursiveDefinition, ///
          replacementDefinition = directlyLeftRecursiveDefinition;  ///

    rule.removeDefinitions(definitions);

    rule.replaceDefinition(replacedDefinition, replacementDefinition);
  }

  return directlyLeftRecursiveDefinition;
}

function rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, indirectlyLeftRecursiveRule, leftRecursiveDefinitions, ruleMap) {
  const definitions = indirectlyLeftRecursiveRule.getDefinitions(),
        rewrittenDefinitions = definitions.map((definition, index) => {
          const Definition = (index === 0) ?
                               DirectlyLeftRecursiveDefinition :
                                 LeftRecursiveDefinition;

          let definitionParts = definition.getParts(),
              implicitlyLeftRecursiveDefinitionParts = implicitlyLeftRecursiveDefinition.getParts();

          definitionParts = cloneParts(definitionParts);  ///

          implicitlyLeftRecursiveDefinitionParts = tail(cloneParts(implicitlyLeftRecursiveDefinitionParts));  ///

          const parts = [
            ...definitionParts,
            ...implicitlyLeftRecursiveDefinitionParts
          ];

          const ruleName = implicitlyLeftRecursiveDefinition.getRuleName(),
                recursiveRuleNames = null,  ///
                leftRecursiveRuleNames = null;  ///

          definition = new Definition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///

          const rewrittenDefinition = definition; ///

          return rewrittenDefinition;
        }),
        ruleName = implicitlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName],
        replacedDefinition = implicitlyLeftRecursiveDefinition,  ///
        replacementDefinitions = rewrittenDefinitions;  ///

  rule.replaceDefinition(replacedDefinition, ...replacementDefinitions);

  push(leftRecursiveDefinitions, rewrittenDefinitions);
}

function retrieveIndirectlyLeftRecursiveDefinitions(leftRecursiveDefinitions) {
  const indirectlyLeftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, IndirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      return true;
    }
  });

  return indirectlyLeftRecursiveDefinitions;
}

function definitionFromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
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