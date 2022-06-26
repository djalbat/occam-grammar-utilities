"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RepeatedRule from "./rule/repeated";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { retrieveLeftRecursiveRules } from "./utilities/rules";
import { retrieveLeftRecursiveRuleNames } from "./utilities/ruleNames";
import { mergeLeftRecursiveDefinitions, retrieveLeftRecursiveDefinitions } from "./utilities/definitions";

const { last, first } = arrayUtilities;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveRules = retrieveIndirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap);

  indirectlyLeftRecursiveRules.forEach((indirectlyLeftRecursiveRule) => {
    let reducedRuleName = null,
        reducedLeftRecursiveDefinition = null;

    const reducedRule = ReducedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule),
          implicitlyLeftRecursiveRuleNames = retrieveImplicitlyLeftRecursiveRuleNames(indirectlyLeftRecursiveRule);

    if (reducedRule !== null) {
      const indirectlyLeftRecursiveRuleDefinitions = indirectlyLeftRecursiveRule.getDefinitions(),
            lastIndirectlyLeftRecursiveRuleDefinition = last(indirectlyLeftRecursiveRuleDefinitions);

      reducedLeftRecursiveDefinition = lastIndirectlyLeftRecursiveRuleDefinition; ///

      reducedRuleName = reducedRule.getName();

      ruleMap[reducedRuleName] = reducedRule;
    }

    implicitlyLeftRecursiveRuleNames.forEach((implicitlyLeftRecursiveRuleName, index) => {
      const indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, implicitlyLeftRecursiveRuleName),
            indirectlyLeftRecursiveDefinition = mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions);

      let repeatedRuleName = null;

      const repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveDefinitionAndIndex(indirectlyLeftRecursiveDefinition, index);

      if (repeatedRule !== null) {
        repeatedRuleName = repeatedRule.getName();

        ruleMap[repeatedRuleName] = repeatedRule;
      }

      const rewrittenIndirectlyLeftRecursiveDefinition = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, repeatedRuleName),
            implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
            replacedDefinition = implicitlyLeftRecursiveDefinition, ///
            replacementDefinitions = rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, rewrittenIndirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition),
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
  const indirectlyLeftRecursiveDefinition = mergeLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, (parts, ruleName) => {
    let indirectlyLeftRecursiveDefinition;

    const firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions);

    indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition; ///

    const implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition();

    indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromPartsRuleNameAndImplicitlyLeftRecursiveDefinition(parts, ruleName, implicitlyLeftRecursiveDefinition);

    return indirectlyLeftRecursiveDefinition;
  });

  return indirectlyLeftRecursiveDefinition;
}

function retrieveImplicitlyLeftRecursiveRuleNames(indirectlyLeftRecursiveRule) {
  const implicitlyLeftRecursiveRuleNames = retrieveLeftRecursiveRuleNames(indirectlyLeftRecursiveRule, IndirectlyLeftRecursiveDefinition, callback);

  function callback(indirectlyLeftRecursiveDefinition) {
    const implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
          ruleName = implicitlyLeftRecursiveDefinition.getRuleName();

    return ruleName;
  }

  return implicitlyLeftRecursiveRuleNames;
}

function rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, repeatedRuleName) {
  const directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, repeatedRuleName),
        rewrittenIndirectlyLeftRecursiveDefinition = directlyLeftRecursiveDefinition; ///

  return rewrittenIndirectlyLeftRecursiveDefinition;
}

function rewriteImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition, rewrittenIndirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition) {
  const replacementDefinitions = [];

  const definition = rewrittenIndirectlyLeftRecursiveDefinition, ///
        directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromImplicitlyLeftRecursiveDefinitionAndDefinition(implicitlyLeftRecursiveDefinition, definition);

  replacementDefinitions.push(directlyLeftRecursiveDefinition);

  if (reducedLeftRecursiveDefinition !== null) {
    const definition = reducedLeftRecursiveDefinition,  ///
          leftRecursiveDefinition = LeftRecursiveDefinition.fromImplicitlyLeftRecursiveDefinitionAndDefinition(implicitlyLeftRecursiveDefinition, definition);

    replacementDefinitions.push(leftRecursiveDefinition);
  }

  return replacementDefinitions;
}

function retrieveIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, implicitlyLeftRecursiveRuleName) {
  const indirectlyLeftRecursiveDefinitions = retrieveLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, IndirectlyLeftRecursiveDefinition, callback);

  function callback(indirectlyLeftRecursiveDefinition) {
    const implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
          ruleName = implicitlyLeftRecursiveDefinition.getRuleName();

    if (ruleName === implicitlyLeftRecursiveRuleName) {
      return true;
    }
  }

  return indirectlyLeftRecursiveDefinitions;
}
