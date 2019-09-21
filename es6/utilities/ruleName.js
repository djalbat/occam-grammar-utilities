'use strict';

function nonLeftRecursiveRuleNameFromRuleName(ruleName) {
  const nonLeftRecursiveRuleName = `${ruleName}_`;

  return nonLeftRecursiveRuleName;
}

function nonLeftRecursiveRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName) {
  const nonLeftRecursiveRuleName = `${leftRecursiveRuleName}_`;

  return nonLeftRecursiveRuleName;
}

function rightRecursiveRuleNameFromRuleName(ruleName) {
  const rightRecursiveRuleName = `${ruleName}~`;

  return rightRecursiveRuleName;
}

function rightRecursiveRuleNameFromRecursiveRuleName(recursiveRuleName) {
  const rightRecursiveRuleName = `${recursiveRuleName}~`;

  return rightRecursiveRuleName;
}

function ruleNameFromNonLeftRecursiveRuleName(nonLeftRecursiveRuleName) {
  const ruleName = nonLeftRecursiveRuleName.replace(/_$/, '');

  return ruleName;
}

function checkNonLeftRecursiveRuleNameMatchesRuleName(nonLeftRecursiveRuleName, ruleName) {
  const ruleNameA = ruleName; ///

  ruleName = ruleNameFromNonLeftRecursiveRuleName(nonLeftRecursiveRuleName);

  const ruleNameB = ruleName; ///

  const nonLeftRecursiveRuleNameMatchesRuleName = (ruleNameA === ruleNameB);  ///

  return nonLeftRecursiveRuleNameMatchesRuleName;
}

module.exports = {
  nonLeftRecursiveRuleNameFromRuleName,
  nonLeftRecursiveRuleNameFromLeftRecursiveRuleName,
  rightRecursiveRuleNameFromRuleName,
  rightRecursiveRuleNameFromRecursiveRuleName,
  ruleNameFromNonLeftRecursiveRuleName,
  checkNonLeftRecursiveRuleNameMatchesRuleName
};
