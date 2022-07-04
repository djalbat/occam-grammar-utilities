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
    rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, leftRecursiveDefinitions, ruleMap);
  });
}

function reduceRule(indirectlyLeftRecursiveRule, ruleMap) {
  let reducedLeftRecursiveDefinition = null;

  const reducedRule = ReducedRule.fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule);

  if (reducedRule !== null) {
    const definitions = indirectlyLeftRecursiveRule.getDefinitions(),
          lastDefinition = last(definitions),
          reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;

    reducedLeftRecursiveDefinition = lastDefinition; ///
  }

  return reducedLeftRecursiveDefinition;
}

function repeatRule(indirectlyLeftRecursiveDefinition, index, ruleMap) {
  let repeatedRuleName = null;

  const repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveDefinitionAndIndex(indirectlyLeftRecursiveDefinition, index)

  if (repeatedRule !== null) {
    repeatedRuleName = repeatedRule.getName();

    ruleMap[repeatedRuleName] = repeatedRule;
  }

  return repeatedRuleName;
}

function retrieveLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition) {
  const leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions(),
        lastLeftRecursiveDefinition = last(leftRecursiveDefinitions),
        leftRecursiveDefinition = lastLeftRecursiveDefinition;  ///

  return leftRecursiveDefinition;
}

function rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, leftRecursiveDefinitions, ruleMap) {
  const reducedLeftRecursiveDefinition = reduceRule(indirectlyLeftRecursiveRule, ruleMap),
        leftRecursiveRuleNames = retrieveLeftRecursiveRuleNames(indirectlyLeftRecursiveRule, IndirectlyLeftRecursiveDefinition, (indirectlyLeftRecursiveDefinition) => {
          const leftRecursiveRuleNames = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleNames(),
                firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
                leftRecursiveRuleName = firstLeftRecursiveRuleName; ///

          return leftRecursiveRuleName;
        });

  leftRecursiveRuleNames.forEach((leftRecursiveRuleName, index) => {
    const indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveRule, leftRecursiveRuleName),
          indirectlyLeftRecursiveDefinition = mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions);

    const repeatedRuleName = repeatRule(indirectlyLeftRecursiveDefinition, index, ruleMap);

    const last = indirectlyLeftRecursiveDefinition.isLast(),
          leftRecursiveDefinition = retrieveLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition),
          ruleName = leftRecursiveDefinition.getRuleName(),
          rule = ruleMap[ruleName],
          replacedDefinition = leftRecursiveDefinition, ///
          replacementDefinitions = last ?
                                      rewriteDirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName) :
                                        rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName);

    rule.replaceDefinition(replacedDefinition, ...replacementDefinitions);

    if (last) {
      const firstReplacementDefinition = first(replacementDefinitions),
            leftRecursiveDefinition = firstReplacementDefinition;  ///

      leftRecursiveDefinitions.push(leftRecursiveDefinition);
    } else {
      const indirectlyLeftRecursiveRule = rule; ///

      rewriteIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, leftRecursiveDefinitions, ruleMap);
    }
  });
}

function retrieveIndirectlyLeftRecursiveRules(leftRecursiveDefinitions, ruleMap) {
  const indirectlyLeftRecursiveRules = retrieveLeftRecursiveRules(leftRecursiveDefinitions, IndirectlyLeftRecursiveDefinition, ruleMap);

  return indirectlyLeftRecursiveRules;
}

function rewriteDirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName) {
  const replacementDefinitions = [];

  let directlyLeftRecursiveDefinition;

  directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName);  ///

  replacementDefinitions.push(directlyLeftRecursiveDefinition);

  if (reducedLeftRecursiveDefinition !== null) {
    leftRecursiveDefinition = LeftRecursiveDefinition.fromReducedLeftRecursiveDefinitionAndLeftRecursiveDefinition(reducedLeftRecursiveDefinition, leftRecursiveDefinition);  ///

    replacementDefinitions.push(leftRecursiveDefinition);
  }

  return replacementDefinitions;
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

function rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName) {
  const replacementDefinitions = [];

  indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName);  ///

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
