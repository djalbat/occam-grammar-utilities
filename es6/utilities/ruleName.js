'use strict';

let count = 0;

function nonRecursiveRuleNameFromRuleName(ruleName) {
  const nonRecursiveRuleName = `${ruleName}_`;

  return nonRecursiveRuleName;
}

function rightRecursiveRuleNameFromRuleName(ruleName) {
  const rightRecursiveRuleName = `${ruleName}${++count}~`;

  return rightRecursiveRuleName;
}

module.exports = {
  nonRecursiveRuleNameFromRuleName,
  rightRecursiveRuleNameFromRuleName
};
