"use strict";

export function ruleNameFromReducedRuleName(reducedRuleName) {
  const ruleName = reducedRuleName.replace(/(__|_)$/g, "");

  return ruleName;
}

export function ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName) {
  const ruleName = indirectlyRepeatedRuleName.replace(/^[^~]+~|~$/g, "");

  return ruleName;
}

export function reducedRuleNameFromRuleName(ruleName) {
  const reducedRuleName = `${ruleName}_`;

  return reducedRuleName;
}

export function directlyRepeatedRuleNameFromRuleName(ruleName) {
  const directlyRepeatedRuleName = `${ruleName}~`;

  return directlyRepeatedRuleName;
}

export function indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const indirectlyRepeatedRuleName = `${ruleName}~${leftRecursiveRuleName}`;

  return indirectlyRepeatedRuleName;
}
