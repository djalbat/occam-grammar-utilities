'use strict';

const partUtilities = require('./utilities/part');

const { ruleNamesFromParts } = partUtilities;

function eliminateOrphanedRules(rules) {
  const ruleNames = [];

  rules.forEach(function(rule) {
    const definitions = rule.getDefinitions();

    definitions.forEach(function(definition) {
      const parts = definition.getParts();

      ruleNamesFromParts(parts, ruleNames);
    });
  });

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

module.exports = eliminateOrphanedRules;
