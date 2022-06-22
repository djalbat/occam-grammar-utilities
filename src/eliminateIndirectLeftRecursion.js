"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RepeatedRule from "./rule/repeated";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { cloneParts } from "./utilities/parts";
import { isInstanceOf } from "./utilities/class";
import { mergeLeftRecursiveDefinitions } from "./utilities/definitions";

const { tail, filter } = arrayUtilities;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveRules = retrieveIndirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap);

  indirectlyLeftRecursiveRules.forEach((indirectlyLeftRecursiveRule) => {
    const reducedRule = ReducedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule),
          reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;

    const implicitlyLeftRecursiveRuleNames = retrieveImplicitlyLeftRecursiveRuleNames(indirectlyLeftRecursiveRule);

    implicitlyLeftRecursiveRuleNames.forEach((implicitlyLeftRecursiveRuleName, index) => {
      const indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, implicitlyLeftRecursiveRuleName),
            indirectlyLeftRecursiveDefinition = mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions),

      const repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveDefinitionAndIndex(indirectlyLeftRecursiveDefinition, index),
            repeatedRuleName = repeatedRule.getName();

      ruleMap[repeatedRuleName] = repeatedRule;

      const parts = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, repeatedRuleName);

    });
  });

  // indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
  //   const indirectlyLeftRecursiveDefinitionRuleName = indirectlyLeftRecursiveDefinition.getRuleName(),
  //         indirectlyLeftRecursiveRuleName = indirectlyLeftRecursiveDefinitionRuleName,  ///
  //         indirectlyLeftRecursiveRule = ruleMap[indirectlyLeftRecursiveRuleName];
  //
  //   rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap);
  //
  //   const implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
  //         implicitlyLeftRecursiveDefinitionRuleName = implicitlyLeftRecursiveDefinition.getRuleName(),
  //         implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveDefinitionRuleName,  ///
  //         implicitlyLeftRecursiveRule = ruleMap[implicitlyLeftRecursiveRuleName];
  //
  //   rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, indirectlyLeftRecursiveRule, leftRecursiveDefinitions, ruleMap);
  //
  //   rewriteImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule, indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);
  // });
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

function rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, repeatedPart) {
  const start = 1,
        replacementPart = repeatedPart, ///
        parts = indirectlyLeftRecursiveDefinition.replaceParts(start, replacementPart);

  return parts;
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
