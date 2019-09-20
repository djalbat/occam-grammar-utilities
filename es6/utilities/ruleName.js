'use strict';

function nonRecursiveRuleNameFromRuleName(ruleName) {
  const nonRecursiveRuleName = `${ruleName}_`;

  return nonRecursiveRuleName;
}

function nonRecursiveRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName) {
  const nonRecursiveRuleName = `${leftRecursiveRuleName}_`;

  return nonRecursiveRuleName;
}

function rightRecursiveRuleNameFromRuleName(ruleName) {
  const rightRecursiveRuleName = `${ruleName}~`;

  return rightRecursiveRuleName;
}

function rightRecursiveRuleNameFromRecursiveRuleName(recursiveRuleName) {
  const rightRecursiveRuleName = `${recursiveRuleName}~`;

  return rightRecursiveRuleName;
}

function ruleNameFromNonRecursiveRuleName(nonRecursiveRuleName) {
  const ruleName = nonRecursiveRuleName.replace(/_$/, '');

  return ruleName;
}

function checkNonRecursiveRuleNameMatchesRuleName(nonRecursiveRuleName, ruleName) {
  const ruleNameA = ruleName; ///

  ruleName = ruleNameFromNonRecursiveRuleName(nonRecursiveRuleName);

  const ruleNameB = ruleName; ///

  const nonRecursiveRuleNameMatchesRuleName = (ruleNameA === ruleNameB);  ///

  return nonRecursiveRuleNameMatchesRuleName;
}

module.exports = {
  nonRecursiveRuleNameFromRuleName,
  nonRecursiveRuleNameFromLeftRecursiveRuleName,
  rightRecursiveRuleNameFromRuleName,
  rightRecursiveRuleNameFromRecursiveRuleName,
  ruleNameFromNonRecursiveRuleName,
  checkNonRecursiveRuleNameMatchesRuleName
};
