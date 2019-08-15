'use strict';

function findRuleByName(name, rules) {
  const rule = rules.find(function(rule) {
    const ruleName = rule.getName();

    if (ruleName === name) {
      return true;
    }
  }) || null; ///

  return rule;
}

function deleteRuleByName(name, rules) {
  const rule = findRuleByName(name, rules),
        index = rules.indexOf(rule),
        start = index,  ///
        deleteCount = 1;

  rules.splice(start, deleteCount);
}

module.exports = {
  findRuleByName,
  deleteRuleByName
};
