'use strict';

function nonRecursiveRuleNameFromRuleName(ruleName) {
  const nonRecursiveRuleName = `${ruleName}_`;

  return nonRecursiveRuleName;
}

function rightRecursiveRuleNameFromRuleName(ruleName) {
  const rightRecursiveRuleName = `${ruleName}~`;

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
  rightRecursiveRuleNameFromRuleName,
  ruleNameFromNonRecursiveRuleName,
  checkNonRecursiveRuleNameMatchesRuleName
};
