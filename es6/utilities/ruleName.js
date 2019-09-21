'use strict';

function reducedRuleNameFromRuleName(ruleName) {
  const reducedRuleName = `${ruleName}_`;

  return reducedRuleName;
}

function reducedRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName) {
  const reducedRuleName = `${leftRecursiveRuleName}_`;

  return reducedRuleName;
}

function rightRecursiveRuleNameFromRuleName(ruleName) {
  const rightRecursiveRuleName = `${ruleName}~`;

  return rightRecursiveRuleName;
}

function rightRecursiveRuleNameFromRecursiveRuleName(recursiveRuleName) {
  const rightRecursiveRuleName = `${recursiveRuleName}~`;

  return rightRecursiveRuleName;
}

function ruleNameFromReducedRuleName(reducedRuleName) {
  const ruleName = reducedRuleName.replace(/_$/, '');

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
  reducedRuleNameFromLeftRecursiveRuleName,
  rightRecursiveRuleNameFromRuleName,
  rightRecursiveRuleNameFromRecursiveRuleName,
  ruleNameFromReducedRuleName,
  checkReducedRuleNameMatchesRuleName
};
