'use strict';

const definitionUtilities = require('../utilities/definition');

const { isDefinitionImmediatelyLeftRecursive } = definitionUtilities;

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

function isRuleImmediatelyLeftRecursive(rule, ruleName) {
  const definitions = rule.getDefinitions(),
        ruleImmediatelyLeftRecursive = definitions.some((definition) => {
          const definitionLeftRecursive = isDefinitionImmediatelyLeftRecursive(definition, ruleName);

          if (definitionLeftRecursive) {
            return true;
          }
        });

  return ruleImmediatelyLeftRecursive;
}

module.exports = {
  findRuleByName,
  deleteRuleByName,
  isRuleImmediatelyLeftRecursive
};
