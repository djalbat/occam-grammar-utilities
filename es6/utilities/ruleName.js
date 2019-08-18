'use strict';

function nonRecursiveRuleNameFromRuleName(ruleName) {
  const nonRecursiveRuleName = `${ruleName}_`;

  return nonRecursiveRuleName;
}

function rightRecursiveRuleNameFromRuleName(ruleName, count) {
  const rightRecursiveRuleName = `${ruleName}${count + 1}~`;

  return rightRecursiveRuleName;
}

module.exports = {
  nonRecursiveRuleNameFromRuleName,
  rightRecursiveRuleNameFromRuleName
};
