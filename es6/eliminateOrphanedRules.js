'use strict';

const rulesUtilities = require('./utilities/rules');

const { ruleNamesFromRules } = rulesUtilities;

function eliminateOrphanedRules(rules) {
  const ruleNames = ruleNamesFromRules(rules);

  rules = filterRules(rules, ruleNames); ///

  return rules;
}

module.exports = eliminateOrphanedRules;

function filterRules(rules, ruleNames) {
  rules = rules.filter(function(rule, index) {
    const ruleName = rule.getName(),
          ruleFirstRule = (index === 0),
          ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

    if (ruleFirstRule || ruleNamesIncludesRuleName) {
      return true;
    }
  });

  return rules;
}