"use strict";

import { arrayUtilities } from "necessary";

import DirectlyReducedRule from "./rule/reduced/directly";
import DirectlyRepeatedRule from "./rule/repeated/directly";
import ReplacementDefinition from "./replacementDefinition";
import DirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/directly";

const { find, filter } = arrayUtilities;

export default function eliminateDirectLeftRecursion(context) {
  let directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(context);

  while (directlyLeftRecursiveDefinition !== null) {
    rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, context);

    directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(context);
  }
}

function directlyReduceRule(rule, context) {
  const { ruleMap, leftRecursiveDefinitions } = context,
        directlyReducedRule = DirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        directlyReducedRuleName = directlyReducedRule.getName();

  ruleMap[directlyReducedRuleName] = directlyReducedRule;
}

function directlyRepeatRule(rule, context) {
  const { ruleMap, leftRecursiveDefinitions } = context,
        directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        directlyRepeatedRuleName = directlyRepeatedRule.getName();

  ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, context) {
  const rule = directlyLeftRecursiveDefinition.getRule();

  directlyReduceRule(rule, context);

  directlyRepeatRule(rule, context);

  const directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, context),
        removedLeftRecursiveDefinitions = directlyLeftRecursiveDefinitions; ///

  rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition);

  amendLeftRecursiveDefinitions(context, removedLeftRecursiveDefinitions);
}

function amendLeftRecursiveDefinitions(context, removedLeftRecursiveDefinitions) {
  const { leftRecursiveDefinitions } = context;

  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition = removedLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

    if (!removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition) {
      return true;
    }
  });
}

function findDirectlyLeftRecursiveDefinition(context) {
  const { leftRecursiveDefinitions } = context,
        directlyLeftRecursiveDefinition = leftRecursiveDefinitions.find((leftRecursiveDefinition) => {
          const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

          if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
            return true;
          }
        }) || null;

  return directlyLeftRecursiveDefinition;
}

function findDirectlyLeftRecursiveDefinitions(rule, context) {
  const { leftRecursiveDefinitions } = context,
        directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
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
