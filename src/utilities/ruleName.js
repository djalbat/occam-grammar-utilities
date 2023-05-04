"use strict";

export function ruleNameFromReducedRuleName(reducedRuleName) {
  const ruleName = reducedRuleName.replace(/(__|_)$/g, "");

  return ruleName;
}

export function reducedRuleNameFromRuleName(ruleName) {
  const reducedRuleName = `${ruleName}_`;

  return reducedRuleName;
}

export function directlyReducedRuleNameFromRuleName(ruleName) {
  const directlyReducedRuleName = `${ruleName}_`;

  return directlyReducedRuleName;
}

export function directlyRepeatedRuleNameFromRuleName(ruleName) {
  const directlyRepeatedRuleName = `${ruleName}~`;

  return directlyRepeatedRuleName;
}

export function ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName) {
  const ruleName = indirectlyRepeatedRuleName.replace(/^[^~]+~|~$/g, "");

  return ruleName;
}

export function indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const indirectlyRepeatedRuleName = `${ruleName}~${leftRecursiveRuleName}`;

  return indirectlyRepeatedRuleName;
}
