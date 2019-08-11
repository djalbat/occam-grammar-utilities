'use strict';

const rulesUtilities = require('./utilities/rules');

const { ruleNamesFromRules, partRuleNamesFromRules } = rulesUtilities;

function eliminateOrphanedRules(rules, excludingFirstRule = true) {
  let ruleNames = ruleNamesFromRules(rules),
      partRuleNames = partRuleNamesFromRules(rules),
      orphanedRuleNames = orphanedRuleNamesFromRuleNamesAndPartRuleNames(ruleNames, partRuleNames, excludingFirstRule),
      orphanedRuleNamesLength = orphanedRuleNames.length;

  while (orphanedRuleNamesLength > 0) {
    rules = filterRules(rules, orphanedRuleNames); ///

    ruleNames = ruleNamesFromRules(rules);
    partRuleNames = partRuleNamesFromRules(rules);
    orphanedRuleNames = orphanedRuleNamesFromRuleNamesAndPartRuleNames(ruleNames, partRuleNames, excludingFirstRule);
    orphanedRuleNamesLength = orphanedRuleNames.length;
  }

  return rules;
}

module.exports = eliminateOrphanedRules;

function orphanedRuleNamesFromRuleNamesAndPartRuleNames(ruleNames, partRuleNames, excludingFirstRule) {
  const orphanedRuleNames = ruleNames.filter(function(ruleName, index) {
    if (index === 0) {
      if (excludingFirstRule) {
        return false;
      }
    }

    const partRuleNamesIncludesRuleName = partRuleNames.includes(ruleName),
          ruleNameOrphanedRuleName = !partRuleNamesIncludesRuleName;

    if (ruleNameOrphanedRuleName) {
      return true;
    }
  });

  return orphanedRuleNames;
}

function filterRules(rules, orphanedRuleNames) {
  rules = rules.filter(function(rule) {
    const ruleName = rule.getName(),
          orphanedRuleNamesIncludesRuleName = orphanedRuleNames.includes(ruleName);

    if (!orphanedRuleNamesIncludesRuleName) {
      return true;
    }
  });

  return rules;
}
