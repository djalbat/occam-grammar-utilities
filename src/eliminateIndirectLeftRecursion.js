"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RepeatedRule from "./rule/repeated";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { cloneParts } from "./utilities/parts";
import { isInstanceOf } from "./utilities/class";
import { ruleNamePartFromRuleName } from "./utilities/part";
import { mergeLeftRecursiveDefinitions } from "./utilities/definitions";

const { first, last, tail } = arrayUtilities;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveRules = retrieveIndirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap);

  indirectlyLeftRecursiveRules.forEach((indirectlyLeftRecursiveRule) => {
    const reducedRule = ReducedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule),
          reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;

    const implicitlyLeftRecursiveRuleNames = retrieveImplicitlyLeftRecursiveRuleNames(indirectlyLeftRecursiveRule);

    implicitlyLeftRecursiveRuleNames.forEach((implicitlyLeftRecursiveRuleName, index) => {
      let leftRecursiveDefinition,
            directlyLeftRecursiveDefinition;

      const indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, implicitlyLeftRecursiveRuleName),
            indirectlyLeftRecursiveDefinition = mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions),
            repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveDefinitionAndIndex(indirectlyLeftRecursiveDefinition, index),
            repeatedRuleName = repeatedRule.getName();

      ruleMap[repeatedRuleName] = repeatedRule;

      const indirectlyLeftRecursiveRuleDefinitions = indirectlyLeftRecursiveRule.getDefinitions(),
            lastIndirectlyLeftRecursiveRuleDefinition = last(indirectlyLeftRecursiveRuleDefinitions);

      leftRecursiveDefinition = lastIndirectlyLeftRecursiveRuleDefinition;  ///

      directlyLeftRecursiveDefinition = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, repeatedRuleName);

      const implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
            definitions = [
              directlyLeftRecursiveDefinition,
              leftRecursiveDefinition
            ];

      directlyLeftRecursiveDefinition = rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, definitions, ruleMap);

      leftRecursiveDefinition = directlyLeftRecursiveDefinition;  ///

      leftRecursiveDefinitions.push(leftRecursiveDefinition);
    });
  });
}

function retrieveIndirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveRules = [];

  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, IndirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
            ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
            rule = ruleMap[ruleName],
            indirectlyLeftRecursiveRulesIncludesRule = indirectlyLeftRecursiveRules.includes(rule);

      if (!indirectlyLeftRecursiveRulesIncludesRule) {
        const indirectlyLeftRecursiveRule = rule; ///

        indirectlyLeftRecursiveRules.push(indirectlyLeftRecursiveRule);
      }
    }
  });

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
    const definitionIndirectlyLeftRecursiveDefinition = isInstanceOf(definition, IndirectlyLeftRecursiveDefinition);

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
  let  parts = indirectlyLeftRecursiveDefinition.getParts();

  const firstPart = first(parts),
        repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName)

  parts = [
    firstPart,
    repeatedRuleNamePart
  ];

  const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleNameAndParts(ruleName, parts);

  return directlyLeftRecursiveDefinition;
}

function rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, definitions, ruleMap) {
  const rewrittenDefinitions = definitions.map((definition, index) => {
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
        replacementDefinitions = rewrittenDefinitions,  ///
        firstRewrittenDefinition = first(rewrittenDefinitions),
        directlyLeftRecursiveDefinition = firstRewrittenDefinition; ///

  rule.replaceDefinition(replacedDefinition, ...replacementDefinitions);

  return directlyLeftRecursiveDefinition;
}

function retrieveIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, implicitlyLeftRecursiveRuleName) {
  const definitions = indirectlyLeftRecursiveRule.getDefinitions(),
        indirectlyLeftRecursiveDefinitions = definitions.filter((definition) => {
          const definitionIndirectlyLeftRecursiveDefinition = isInstanceOf(definition, IndirectlyLeftRecursiveDefinition);

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
