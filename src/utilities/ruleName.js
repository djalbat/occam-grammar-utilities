"use strict";

export function reducedRuleNameFromRuleName(ruleName) {
  const reducedRuleName = `${ruleName}_`;

  return reducedRuleName;
}

export function ruleNameFromReducedRuleName(reducedRuleName) {
  const ruleName = reducedRuleName.replace(/_$/, "");

  return ruleName;
}

export function checkReducedRuleNameMatchesRuleName(reducedRuleName, ruleName) {
  const ruleNameA = ruleName; ///

  ruleName = ruleNameFromReducedRuleName(reducedRuleName);

  const ruleNameB = ruleName; ///

  const reducedRuleNameMatchesRuleName = (ruleNameA === ruleNameB);  ///

  return reducedRuleNameMatchesRuleName;
}
