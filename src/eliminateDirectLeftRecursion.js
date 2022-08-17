"use strict";

import { arrayUtilities } from "necessary";

import DirectlyReducedRule from "./rule/reduced/directly";
import DirectlyRepeatedRule from "./rule/repeated/directly";
import ReplacementDefinition from "./replacementDefinition";
import DirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/directly";

const { find, filter } = arrayUtilities;

export default function eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (directlyLeftRecursiveDefinition !== null) {
    rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

    directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);
  }
}

function directlyReduceRule(rule, leftRecursiveDefinitions, ruleMap) {
  const directlyReducedRule = DirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        directlyReducedRuleName = directlyReducedRule.getName();

  ruleMap[directlyReducedRuleName] = directlyReducedRule;
}

function directlyRepeatRule(rule, leftRecursiveDefinitions, ruleMap) {
  const directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        directlyRepeatedRuleName = directlyRepeatedRule.getName();

  ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const rule = directlyLeftRecursiveDefinition.getRule();

  directlyReduceRule(rule, leftRecursiveDefinitions, ruleMap);

  directlyRepeatRule(rule, leftRecursiveDefinitions, ruleMap);

  const directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        removedLeftRecursiveDefinitions = directlyLeftRecursiveDefinitions; ///

  rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition);

  amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions);
}

function amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions) {
  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition = removedLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

    if (!removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition) {
      return true;
    }
  });
}

function findDirectlyLeftRecursiveDefinition(leftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinition = leftRecursiveDefinitions.find((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
      return true;
    }
  }) || null;

  return directlyLeftRecursiveDefinition;
}

function findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();

    if (leftRecursiveDefinitionRule === rule) {
      const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

      if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
        return true;
      }
    }
  });

  return directlyLeftRecursiveDefinitions;
}

function rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
  const rule = directlyLeftRecursiveDefinition.getRule(),
        replacementDefinition = ReplacementDefinition.fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition);

  rule.replaceAllDefinitions(replacementDefinition);
}
