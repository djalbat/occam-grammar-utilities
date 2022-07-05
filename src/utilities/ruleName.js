"use strict";

export function reducedRuleNameFromRuleName(ruleName) {
  const reducedRuleName = `${ruleName}_`;

  return reducedRuleName;
}

export function ruleNameFromReducedRuleName(reducedRuleName) {
  const ruleName = reducedRuleName.replace(/_$/, "");

  return ruleName;
}

export function ruleNameFromRepeatedRuleName(repeatedRuleName) {
  const ruleName = repeatedRuleName.replace(/(?:\.\d+)?~$/, "");

  return ruleName;
}

export function repeatedRuleNameFromRuleName(ruleName) {
  const repeatedRuleName = `${ruleName}~`;

  return repeatedRuleName;
}

export function doesReducedRuleNameMatchRuleName(reducedRuleName, ruleName) {
  const ruleNameA = ruleName; ///

  ruleName = ruleNameFromReducedRuleName(reducedRuleName);

  const ruleNameB = ruleName; ///

  const reducedRuleNameMatchesRuleName = (ruleNameA === ruleNameB);  ///

  return reducedRuleNameMatchesRuleName;
}

export function repeatedRuleNameFromRuleNameAndIndex(ruleName,index) {
  const repeatedRuleName = (index === 0) ?
                            `${ruleName}~` :
                              `${ruleName}.${index}~`;

  return repeatedRuleName;
}
