"use strict";

export function ruleNameFromReducedRuleName(reducedRuleName) {
  const ruleName = reducedRuleName.replace(/(__|_)$/g, "");

  return ruleName;
}

export function ruleNameFromRepeatedRuleName(repeatedRuleName) {
  const ruleName = repeatedRuleName.replace(/~~~|~~|~$/, "");

  return ruleName;
}

export function epsilonRepeatedRuleNameFromRuleName(ruleName) {
  const epsilonRepeatedRuleName = `${ruleName}~~~`;

  return epsilonRepeatedRuleName;
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

export function indirectlyRepeatedRuleNameFromRuleName(ruleName) {
  const indirectlyRepeatedRuleName = `${ruleName}~~`;

  return indirectlyRepeatedRuleName;
}
