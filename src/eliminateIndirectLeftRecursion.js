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

const { first, last } = arrayUtilities;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveRules = retrieveIndirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap);

  indirectlyLeftRecursiveRules.forEach((indirectlyLeftRecursiveRule) => {
    rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap);
  });
}

function rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap) {
  const reducedLeftRecursiveDefinition = reduceIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap),
        leftRecursiveRuleNames = retrieveLeftRecursiveRuleNames(indirectlyLeftRecursiveRule, IndirectlyLeftRecursiveDefinition, (indirectlyLeftRecursiveDefinition) => {
          const leftRecursiveRuleNames = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleNames(),
                firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
                leftRecursiveRuleName = firstLeftRecursiveRuleName; ///

          return leftRecursiveRuleName;
        });

  leftRecursiveRuleNames.forEach((leftRecursiveRuleName, index) => {
    const indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, leftRecursiveRuleName);

    let indirectlyLeftRecursiveDefinition = mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions);

    let repeatedRuleName = null;

    const repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveDefinitionAndIndex(indirectlyLeftRecursiveDefinition, index);

    if (repeatedRule !== null) {
      repeatedRuleName = repeatedRule.getName();

      ruleMap[repeatedRuleName] = repeatedRule;
    }

    let leftRecursiveDefinition;

    const leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions(),
          lastLeftRecursiveDefinition = last(leftRecursiveDefinitions);

    leftRecursiveDefinition = lastLeftRecursiveDefinition;  ///

    indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, repeatedRuleName);

    const ruleName = leftRecursiveDefinition.getRuleName(),
          replacedDefinition = leftRecursiveDefinition, ///
          replacementDefinitions = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition, leftRecursiveDefinition),
          rule = ruleMap[ruleName];

    rule.replaceDefinition(replacedDefinition, ...replacementDefinitions);
  });
}

function reduceIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap) {
  let reducedLeftRecursiveDefinition = null;

  const reducedRule = ReducedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule);

  if (reducedRule !== null) {
    const indirectlyLeftRecursiveRuleDefinitions = indirectlyLeftRecursiveRule.getDefinitions(),
          lastIndirectlyLeftRecursiveRuleDefinition = last(indirectlyLeftRecursiveRuleDefinitions);

    reducedLeftRecursiveDefinition = lastIndirectlyLeftRecursiveRuleDefinition; ///

    const reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;
  }

  return reducedLeftRecursiveDefinition;
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

    const leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();

    indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromPartsRuleNameAndLeftRecursiveDefinitions(parts, ruleName, leftRecursiveDefinitions);

    return indirectlyLeftRecursiveDefinition;
  });

  return indirectlyLeftRecursiveDefinition;
}

function rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition, leftRecursiveDefinition) {
  const replacementDefinitions = [];

  indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition);  ///

  replacementDefinitions.push(indirectlyLeftRecursiveDefinition);

  if (reducedLeftRecursiveDefinition !== null) {
    leftRecursiveDefinition = LeftRecursiveDefinition.fromReducedLeftRecursiveDefinitionAndLeftRecursiveDefinition(reducedLeftRecursiveDefinition, leftRecursiveDefinition);  ///

    replacementDefinitions.push(leftRecursiveDefinition);
  }

  return replacementDefinitions;
}

function retrieveIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, leftRecursiveRuleName) {
  const indirectlyLeftRecursiveDefinitions = retrieveLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, IndirectlyLeftRecursiveDefinition, (indirectlyLeftRecursiveDefinition) => {
    const leftRecursiveRuleNames = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          ruleName = firstLeftRecursiveRuleName; ///

    if (ruleName === leftRecursiveRuleName) {
      return true;
    }
  });

  return indirectlyLeftRecursiveDefinitions;
}
