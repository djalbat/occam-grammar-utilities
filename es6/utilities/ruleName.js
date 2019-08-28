'use strict';

let count;

function resetRightRecursiveRuleNameCount() {
  count = 0;
}

function nonRecursiveRuleNameFromRuleName(ruleName) {
  const nonRecursiveRuleName = `${ruleName}_`;

  return nonRecursiveRuleName;
}

function rightRecursiveRuleNameFromRuleName(ruleName) {
  const rightRecursiveRuleName = (count === 0) ?
                                  `${ruleName}~` :
                                    `${ruleName}${count}~`;

  count++;

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

resetRightRecursiveRuleNameCount();

module.exports = {
  resetRightRecursiveRuleNameCount,
  nonRecursiveRuleNameFromRuleName,
  rightRecursiveRuleNameFromRuleName,
  ruleNameFromNonRecursiveRuleName,
  checkNonRecursiveRuleNameMatchesRuleName
};
