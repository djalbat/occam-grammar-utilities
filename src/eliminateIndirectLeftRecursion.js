"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RepeatedRule from "./rule/repeated";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { ruleNamePartFromRuleName } from "./utilities/part";
import { retrieveLeftRecursiveRules } from "./utilities/rules";
import { mergeLeftRecursiveDefinitions } from "./utilities/definitions";
import { definitionPartsFromDefinition } from "./utilities/definition";

const { last, first } = arrayUtilities;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveRules = retrieveIndirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap);

  indirectlyLeftRecursiveRules.forEach((indirectlyLeftRecursiveRule) => {
    const reducedRule = ReducedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule),
          reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;

    const implicitlyLeftRecursiveRuleNames = retrieveImplicitlyLeftRecursiveRuleNames(indirectlyLeftRecursiveRule),
          indirectlyLeftRecursiveRuleDefinitions = indirectlyLeftRecursiveRule.getDefinitions(),
          lastIndirectlyLeftRecursiveRuleDefinition = last(indirectlyLeftRecursiveRuleDefinitions);

    implicitlyLeftRecursiveRuleNames.forEach((implicitlyLeftRecursiveRuleName, index) => {
      const indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, implicitlyLeftRecursiveRuleName),
            indirectlyLeftRecursiveDefinition = mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions);

      const repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveDefinitionAndIndex(indirectlyLeftRecursiveDefinition, index),
            repeatedRuleName = repeatedRule.getName();

      ruleMap[repeatedRuleName] = repeatedRule;

      const rewrittenIndirectlyLeftRecursiveDefinition = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, repeatedRuleName),
            implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
            replacedDefinition = implicitlyLeftRecursiveDefinition, ///
            replacementDefinitions = rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, rewrittenIndirectlyLeftRecursiveDefinition, lastIndirectlyLeftRecursiveRuleDefinition),
            implicitlyLeftRecursiveRule = ruleMap[implicitlyLeftRecursiveRuleName];

      implicitlyLeftRecursiveRule.replaceDefinition(replacedDefinition, ...replacementDefinitions);

      const leftRecursiveDefinition = first(replacementDefinitions); ///

      leftRecursiveDefinitions.push(leftRecursiveDefinition);
    });
  });
}

function retrieveIndirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveRules = retrieveLeftRecursiveRules(leftRecursiveDefinitions, IndirectlyLeftRecursiveDefinition, ruleMap);

  return indirectlyLeftRecursiveRules;
}

function mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions) {
  const indirectlyLeftRecursiveDefinition = mergeLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, IndirectlyLeftRecursiveDefinition);

  return indirectlyLeftRecursiveDefinition;
}

function retrieveImplicitlyLeftRecursiveRuleNames(indirectlyLeftRecursiveRule) {
  const implicitlyLeftRecursiveRuleNames = [],
        definitions = indirectlyLeftRecursiveRule.getDefinitions();

  definitions.forEach((definition) => {
    const definitionIndirectlyLeftRecursiveDefinition = (definition instanceof IndirectlyLeftRecursiveDefinition);

    if (definitionIndirectlyLeftRecursiveDefinition) {
      const indirectlyLeftRecursiveDefinition = definition, ///
            implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
            ruleName = implicitlyLeftRecursiveDefinition.getRuleName(),
            implicitlyLeftRecursiveRuleNamesIncludesRuleName = implicitlyLeftRecursiveRuleNames.includes(ruleName);

      if (!implicitlyLeftRecursiveRuleNamesIncludesRuleName) {
        const implicitlyLeftRecursiveRuleName = ruleName;  ///

        implicitlyLeftRecursiveRuleNames.push(implicitlyLeftRecursiveRuleName);
      }
    }
  });

  return implicitlyLeftRecursiveRuleNames;
}

function rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, repeatedRuleName) {
  let  parts = definitionPartsFromDefinition(indirectlyLeftRecursiveDefinition);

  const firstPart = first(parts),
        repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName)

  parts = [
    firstPart,
    repeatedRuleNamePart
  ];

  const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleNameAndParts(ruleName, parts),
        rewrittenIndirectlyLeftRecursiveDefinition = directlyLeftRecursiveDefinition; ///

  return rewrittenIndirectlyLeftRecursiveDefinition;
}

function rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, rewrittenIndirectlyLeftRecursiveDefinition, lastIndirectlyLeftRecursiveRuleDefinition) {
  let definition;

  definition = rewrittenIndirectlyLeftRecursiveDefinition; ///

  const directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromImplicitlyLeftRecursiveDefinitionAndDefinition(implicitlyLeftRecursiveDefinition, definition);

  definition = lastIndirectlyLeftRecursiveRuleDefinition;  ///

  const leftRecursiveDefinition = LeftRecursiveDefinition.fromImplicitlyLeftRecursiveDefinitionAndDefinition(implicitlyLeftRecursiveDefinition, definition);

  const replacementDefinitions = [
          directlyLeftRecursiveDefinition,
          leftRecursiveDefinition
        ];

  return replacementDefinitions;
}

function retrieveIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, implicitlyLeftRecursiveRuleName) {
  const definitions = indirectlyLeftRecursiveRule.getDefinitions(),
        indirectlyLeftRecursiveDefinitions = definitions.filter((definition) => {
          const definitionIndirectlyLeftRecursiveDefinition = (definition instanceof IndirectlyLeftRecursiveDefinition);

          if (definitionIndirectlyLeftRecursiveDefinition) {
            const indirectlyLeftRecursiveDefinition = definition, ///
                  implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
                  ruleName = implicitlyLeftRecursiveDefinition.getRuleName();

            if (ruleName === implicitlyLeftRecursiveRuleName) {
              return true;
            }
          }
        });

  return indirectlyLeftRecursiveDefinitions;
}
