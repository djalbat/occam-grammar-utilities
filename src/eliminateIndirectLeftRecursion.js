"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "./rule/reduced";
import RepeatedRule from "./rule/repeated";
import LeftRecursiveDefinition from "./definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "./definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/recursive/left/indirectly";

import { mergeLeftRecursiveDefinitions } from "./utilities/definitions";

const { last, first, filter } = arrayUtilities;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let maximalIndirectlyLeftRecursiveDefinition = retrieveMaximalIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (maximalIndirectlyLeftRecursiveDefinition !== null) {
    let indirectlyLeftRecursiveDefinition = maximalIndirectlyLeftRecursiveDefinition, ///
        ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName];

    const definitions = rule.getDefinitions(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          indirectlyLeftRecursiveRule = rule, ///
          reducedLeftRecursiveDefinition = reduceIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap),
          indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName);

    indirectlyLeftRecursiveDefinition = mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions);  ///

    const last = indirectlyLeftRecursiveDefinition.isLast(),
          lastLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLastLeftRecursiveDefinition(),
          leftRecursiveDefinition = lastLeftRecursiveDefinition;  ///

    ruleName = leftRecursiveDefinition.getRuleName();
    rule = ruleMap[ruleName];

    const repeatedRuleName = repeatIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, ruleMap),
          replacedDefinition = leftRecursiveDefinition, ///
          replacementDefinitions = last ?
                                     rewriteDirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName) :
                                       rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, reducedLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName),
          firstReplacementDefinition = first(replacementDefinitions),
          addedLeftRecursiveDefinition = firstReplacementDefinition,  ///
          removedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///

    rule.replaceDefinition(replacedDefinition, ...replacementDefinitions);

    amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, addedLeftRecursiveDefinition);

    maximalIndirectlyLeftRecursiveDefinition = retrieveMaximalIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);
  }
}

function amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, addedLeftRecursiveDefinition) {
  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition = removedLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

    if (!removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition) {
      return true;
    }
  });

  leftRecursiveDefinitions.push(addedLeftRecursiveDefinition);
}

function reduceIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule, ruleMap) {
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

function repeatIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, ruleMap) {
  let repeatedRuleName = null;

  const repeatedRule = RepeatedRule.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition)

  if (repeatedRule !== null) {
    repeatedRuleName = repeatedRule.getName();

    ruleMap[repeatedRuleName] = repeatedRule;
  }

  return repeatedRuleName;
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

function retrieveIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName = null) {
  const indirectlyLeftRecursiveDefinitions = definitions.filter((definition) => {
    if (definition instanceof IndirectlyLeftRecursiveDefinition) {
      if (leftRecursiveRuleName === null) {
        return true;
      }

      const indirectlyLeftRecursiveDefinition = definition,  ///
            leftRecursiveRuleNames = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleNames(),
            firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
            ruleName = firstLeftRecursiveRuleName; ///

      if (ruleName === leftRecursiveRuleName) {
        return true;
      }
    }
  });

  return indirectlyLeftRecursiveDefinitions;
}

function retrieveMaximalIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions) {
  let maximalIndirectlyLeftRecursiveDefinition = null;

  const definitions = leftRecursiveDefinitions, ///
        indirectlyLeftRecursiveDefinitions = retrieveIndirectlyLeftRecursiveDefinitions(definitions);

  indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
    if (maximalIndirectlyLeftRecursiveDefinition === null) {
      maximalIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
    } else {
      const indirectlyLeftRecursiveDefinitionGreaterThanMaximalIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.isGreaterThan(maximalIndirectlyLeftRecursiveDefinition);

      if (indirectlyLeftRecursiveDefinitionGreaterThanMaximalIndirectlyLeftRecursiveDefinition) {
        maximalIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
      }
    }
  });

  return maximalIndirectlyLeftRecursiveDefinition;
}
