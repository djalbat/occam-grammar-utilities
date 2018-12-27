'use strict';

const rulesUtilities = require('./utilities/rules');

const { ruleNamesFromRules, partRuleNamesFromRules } = rulesUtilities;

function eliminateOrphanedRules(rules) {
  let ruleNames = ruleNamesFromRules(rules),
      partRuleNames = partRuleNamesFromRules(rules),
      orphanedRuleNames = orphanedRuleNamesFromRuleNamesAndPartRuleNames(ruleNames, partRuleNames),
      orphanedRuleNamesLength = orphanedRuleNames.length;

  while (orphanedRuleNamesLength > 0) {
    rules = filterRules(rules, orphanedRuleNames); ///

    ruleNames = ruleNamesFromRules(rules);
    partRuleNames = partRuleNamesFromRules(rules);
    orphanedRuleNames = orphanedRuleNamesFromRuleNamesAndPartRuleNames(ruleNames, partRuleNames);
    orphanedRuleNamesLength = orphanedRuleNames.length;
  }

  return rules;
}

module.exports = eliminateOrphanedRules;

function orphanedRuleNamesFromRuleNamesAndPartRuleNames(ruleNames, partRuleNames) {
  const orphanedRuleNames = [];

  ruleNames.forEach(function(ruleName, index) {
    if (index > 0) {
      const partRuleNamesIncludesRuleName = partRuleNames.includes(ruleName),
            ruleNameOrphanedRuleName = !partRuleNamesIncludesRuleName;

      if (ruleNameOrphanedRuleName) {
        const orphanedRuleName = ruleName;

        orphanedRuleNames.push(orphanedRuleName);
      }
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
