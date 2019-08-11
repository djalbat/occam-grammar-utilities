'use strict';

const partUtilities = require('../utilities/part');

const { partRuleNamesFromParts } = partUtilities;

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
  const ruleNames = rules.map(function(rule) {
    const ruleName = rule.getName();

    return ruleName;
  });

  return ruleNames;
}

function partRuleNamesFromRules(rules) {
  const partRuleNames = [];

  rules.forEach(function(rule) {
    const definitions = rule.getDefinitions();

    definitions.forEach(function(definition) {
      const parts = definition.getParts();

      partRuleNamesFromParts(parts, partRuleNames);
    });
  });

  return partRuleNames;
}

module.exports = {
  rulesAsString,
  ruleNamesFromRules,
  partRuleNamesFromRules
};
