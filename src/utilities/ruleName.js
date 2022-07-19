"use strict";

export function ruleNameFromReducedRuleName(reducedRuleName) {
  const ruleName = reducedRuleName.replace(/(__|_)$/g, "");

  return ruleName;
}

export function ruleNameFromRepeatedRuleName(repeatedRuleName) {
  const ruleName = repeatedRuleName.replace(/~$/, "");

  return ruleName;
}

export function repeatedRuleNameFromRuleName(ruleName) {
  const repeatedRuleName = `${ruleName}~`;

  return repeatedRuleName;
}

export function directlyReducedRuleNameFromRuleName(ruleName) {
  const directlyReducedRuleName = `${ruleName}_`;

  return directlyReducedRuleName;
}

export function indirectlyReducedRuleNameFromRuleName(ruleName) {
  const indirectlyReducedRuleName = `${ruleName}__`;

  return indirectlyReducedRuleName;
}
