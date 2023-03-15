"use strict";

export function ruleNameFromReducedRuleName(reducedRuleName) {
  const ruleName = reducedRuleName.replace(/(__|_)$/g, "");

  return ruleName;
}

export function ruleNameFromRepeatedRuleName(repeatedRuleName) {
  const ruleName = repeatedRuleName.replace(/~[^~]+~|~$/, "");

  return ruleName;
}

export function directlyReducedRuleNameFromRuleName(ruleName) {
  const directlyReducedRuleName = `${ruleName}_`;

  return directlyReducedRuleName;
}

export function directlyRepeatedRuleNameFromRuleName(ruleName) {
  const directlyRepeatedRuleName = `${ruleName}~`;

  return directlyRepeatedRuleName;
}

export function indirectlyReducedRuleNameFromRuleName(ruleName) {
  const indirectlyReducedRuleName = `${ruleName}__`;

  return indirectlyReducedRuleName;
}

export function ruleNameFromImplicitlyReducedRuleName(implicitlyReducedRuleName) {
  const ruleName = implicitlyReducedRuleName.replace(/_.+/, "");

  return ruleName;
}

export function implicitlyReducedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const implicitlyReducedRuleName = `${leftRecursiveRuleName}_${ruleName}_`;

  return implicitlyReducedRuleName;
}

export function indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const indirectlyRepeatedRuleName = `${ruleName}~${leftRecursiveRuleName}~`;

  return indirectlyRepeatedRuleName;
}
