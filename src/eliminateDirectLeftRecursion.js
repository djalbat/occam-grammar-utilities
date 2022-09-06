"use strict";

import DirectlyReducedRule from "./rule/reduced/directly";
import DirectlyRepeatedRule from "./rule/repeated/directly";
import ReplacementDefinition from "./replacementDefinition";

import { leftDifference } from "./utilities/array";

export default function eliminateDirectLeftRecursion(context) {
  let directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(context);

  while (directlyLeftRecursiveDefinition !== null) {
    rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, context);

    directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(context);
  }
}

function directlyReduceRule(rule, context) {
  const { ruleMap, directlyLeftRecursiveDefinitions } = context,
        leftRecursiveDefinitions = directlyLeftRecursiveDefinitions,  ///
        directlyReducedRule = DirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        directlyReducedRuleName = directlyReducedRule.getName();

  ruleMap[directlyReducedRuleName] = directlyReducedRule;
}

function directlyRepeatRule(rule, context) {
  const { ruleMap, directlyLeftRecursiveDefinitions } = context,
        leftRecursiveDefinitions = directlyLeftRecursiveDefinitions,  ///
        directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        directlyRepeatedRuleName = directlyRepeatedRule.getName();

  ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, context) {
  const rule = directlyLeftRecursiveDefinition.getRule();

  directlyReduceRule(rule, context);

  directlyRepeatRule(rule, context);

  const directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, context);

  rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition);

  removeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context);
}

function findDirectlyLeftRecursiveDefinition(context) {
  const { directlyLeftRecursiveDefinitions } = context,
        directlyLeftRecursiveDefinition = directlyLeftRecursiveDefinitions.pop() || null;

  return directlyLeftRecursiveDefinition;
}

function findDirectlyLeftRecursiveDefinitions(rule, context) {
  let { directlyLeftRecursiveDefinitions } = context;

  directlyLeftRecursiveDefinitions = directlyLeftRecursiveDefinitions.filter((directlyLeftRecursiveDefinitions) => {  ///
    const directlyLeftRecursiveDefinitionsRule = directlyLeftRecursiveDefinitions.getRule();

    if (directlyLeftRecursiveDefinitionsRule === rule) {
      return true;
    }
  });

  return directlyLeftRecursiveDefinitions;
}

function rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
  const rule = directlyLeftRecursiveDefinition.getRule(),
        replacementDefinition = ReplacementDefinition.fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition);

  rule.replaceAllDefinitions(replacementDefinition);
}

function removeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context) {
  const directlyLeftRecursiveDefinitionsB = directlyLeftRecursiveDefinitions; ///

  ({ directlyLeftRecursiveDefinitions } = context);

  const directlyLeftRecursiveDefinitionsA = directlyLeftRecursiveDefinitions; ///

  leftDifference(directlyLeftRecursiveDefinitionsA, directlyLeftRecursiveDefinitionsB);
}
