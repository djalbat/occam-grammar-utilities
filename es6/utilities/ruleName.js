"use strict";

function reducedRuleNameFromRuleName(ruleName) {
  const reducedRuleName = `${ruleName}_`;

  return reducedRuleName;
}

function repeatedRuleNameFromRuleName(ruleName) {
  const repeatedRuleName = `${ruleName}~`;

  return repeatedRuleName;
}

function ruleNameFromReducedRuleName(reducedRuleName) {
  const ruleName = reducedRuleName.replace(/_$/, "");

  return ruleName;
}

function checkReducedRuleNameMatchesRuleName(reducedRuleName, ruleName) {
  const ruleNameA = ruleName; ///

  ruleName = ruleNameFromReducedRuleName(reducedRuleName);

  const ruleNameB = ruleName; ///

  const reducedRuleNameMatchesRuleName = (ruleNameA === ruleNameB);  ///

  return reducedRuleNameMatchesRuleName;
}

module.exports = {
  reducedRuleNameFromRuleName,
  repeatedRuleNameFromRuleName,
  ruleNameFromReducedRuleName,
  checkReducedRuleNameMatchesRuleName
};
