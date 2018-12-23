'use strict';

const UnitRule = require('./rule/unit'),
      NonUnitsRule = require('./rule/nonUnits');

function eliminateCycles(rules) {
  const nonUnitsRules = nonUnitsRulesFromRules(rules),
        unitRules = unitRulesFromRules(rules),
        nonUnitRules = nonUnitRulesFromNonUnitsRulesAndUnitRules(nonUnitsRules, unitRules);

  rules = nonUnitRules;  ///

  return rules;
}

module.exports = eliminateCycles;

function nonUnitsRulesFromRules(rules) {
  const nonUnitsRules = [];

  rules.forEach(function(rule) {
    const nonUnitsRule = NonUnitsRule.fromRule(rule);

    if (nonUnitsRule !== null) {
      nonUnitsRules.push(nonUnitsRule);
    }
  });

  return nonUnitsRules;
}

function unitRulesFromRules(rules) {
  const unitRules = [];

  rules.forEach(function(rule) {
    const name = rule.getName(),
          definitions = rule.getDefinitions();

    definitions.forEach(function(definition) {
      const unitRule = UnitRule.fromNameAndDefinition(name, definition);

      if (unitRule !== null) {
        unitRules.push(unitRule);
      }
    });
  });

  return unitRules;
}

function nonUnitRulesFromNonUnitsRulesAndUnitRules(nonUnitsRules, unitRules) {
  const nonUnitRules = [],
        oldUnitRules = [];

  let unitRulesLength = unitRules.length;

  while (unitRulesLength > 0) {
    const unitRule = unitRules.shift(),
          unitRuleNonCyclic = unitRule.isNonCyclic();

    if (unitRuleNonCyclic) {
      const oldUnitsRulesIncludesUnitRule = checkOldUnitsRulesIncludesUnitRule(oldUnitRules, unitRule);

      const oldUnitRule = unitRule; ///

      oldUnitRules.push(oldUnitRule);

      if (!oldUnitsRulesIncludesUnitRule) {
        const newUnitRules = [],
              oldUnitRuleName = oldUnitRule.getName(),
              oldUnitRuleUnitDefinitionRuleName = oldUnitRule.getUnitDefinitionRuleName();

        unitRules.forEach(function(unitRule) {
          const unitRuleName = unitRule.getName();

          if (unitRuleName === oldUnitRuleUnitDefinitionRuleName) {
            const unitRuleUnitDefinition = unitRule.getUnitDefinition(),
                  name = oldUnitRuleName, ///
                  unitDefinition = unitRuleUnitDefinition,  ///
                  newUnitRule = UnitRule.fromNameAndUnitDefinition(name, unitDefinition),
                  oldUnitRulesIncludesNewUnitRule = checkOldUnitsRulesIncludesUnitRule(oldUnitRules, newUnitRule);

            if (!oldUnitRulesIncludesNewUnitRule) {
              newUnitRules.push(newUnitRule);
            }
          }
        });

        unitRules = [].concat(newUnitRules).concat(unitRules);
      }
    }

    unitRulesLength = unitRules.length;
  }

  return nonUnitRules;
}

function checkOldUnitsRulesIncludesUnitRule(oldUnitsRules, unitRule) {
  const oldUnitsRulesIncludesUnitRule = oldUnitsRules.reduce(function(oldUnitsRulesIncludesUnitRule, oldUnitRule) {
    if (!oldUnitsRulesIncludesUnitRule) {
      const oldUnitRuleMatchesUnitRule = oldUnitRule.matches(unitRule);

      oldUnitsRulesIncludesUnitRule = oldUnitRuleMatchesUnitRule; ///
    }

    return oldUnitsRulesIncludesUnitRule;
  }, false);

  return oldUnitsRulesIncludesUnitRule;
}
