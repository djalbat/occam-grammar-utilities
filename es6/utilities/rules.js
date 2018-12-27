'use strict';

const partUtilities = require('../utilities/part');

const { ruleNamesFromParts } = partUtilities;

function rulesAsString(rules, multiLine) {
  const maximumRuleNameLength = rules.reduce(function(maximumRuleNameLength, rule) {
          const ruleName = rule.getName(),
                ruleNameLength = ruleName.length;

          maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

          return maximumRuleNameLength;
        }, 0),
        rulesString = rules.reduce(function(rulesString, rule) {
          const ruleString = rule.asString(maximumRuleNameLength, multiLine);

          rulesString += ruleString;

          return rulesString;
        }, '');

  return rulesString;
}

function ruleNamesFromRules(rules) {
  const ruleNames = [];

  rules.forEach(function(rule) {
    const definitions = rule.getDefinitions();

    definitions.forEach(function(definition) {
      const parts = definition.getParts();

      ruleNamesFromParts(parts, ruleNames);
    });
  });

  return ruleNames;
}

module.exports = {
  rulesAsString,
  ruleNamesFromRules
};
