'use strict';

const UnitRule = require('./rule/unit'),
      NonUnitsRule = require('./rule/nonUnits'),
      ruleUtilities = require('./utilities/rule'),
      rulesUtilities = require('./utilities/rules');

const { findRuleByName } = ruleUtilities,
      { rulesAsString } = rulesUtilities;

function eliminateCycles(rules) {
  const unitRules = unitRulesFromRules(rules),
        nonUnitsRules = nonUnitsRulesFromRules(rules),
        newNonUnitsRules = newNonUnitsRulesFromUnitRulesAndNonUnitsRules(unitRules, nonUnitsRules);

  rules = rulesFromNonUnitsRulesAndNewNonUnitsRules(nonUnitsRules, newNonUnitsRules);

  return rules;
}

module.exports = eliminateCycles;

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

function nonUnitsRulesFromRules(rules) {
  const nonUnitsRules = rules.map(function(rule) {
    const nonUnitsRule = NonUnitsRule.fromRule(rule);

    return nonUnitsRule;
  });

  return nonUnitsRules;
}

function newNonUnitsRulesFromUnitRulesAndNonUnitsRules(unitRules, nonUnitsRules) {
  const newNonUnitsRules = [],
        oldUnitRules = [];

  let unitRule;

  while (unitRule = unitRules.shift()) {
    const unitRuleCyclic = unitRule.isCyclic(),
          oldUnitsRulesIncludesUnitRule = checkOldUnitsRulesIncludesUnitRule(oldUnitRules, unitRule);

    if (unitRuleCyclic || oldUnitsRulesIncludesUnitRule) {
      continue;
    }

    const oldUnitRule = unitRule, ///
          oldUnitRuleName = oldUnitRule.getName(),
          oldUnitRuleUnitDefinitionRuleName = oldUnitRule.getUnitDefinitionRuleName();

    oldUnitRules.push(oldUnitRule);

    nonUnitsRules.forEach(function(nonUnitsRule) {
      const nonUnitsRuleName = nonUnitsRule.getName();

      if (nonUnitsRuleName === oldUnitRuleUnitDefinitionRuleName) {
        const name = oldUnitRuleName, ///
              definitions = nonUnitsRule.getDefinitions(),
              newNonUnitsRule = NonUnitsRule.fromNameAndDefinitions(name, definitions);

        newNonUnitsRules.push(newNonUnitsRule);
      }
    });

    const newUnitRules = [];

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

    console.log(rulesAsString(oldUnitRules));

    console.log('------------');

    console.log(rulesAsString(unitRules));

    console.log(rulesAsString(newNonUnitsRules));

    console.log('\n\n')
  }

  return newNonUnitsRules;
}

function rulesFromNonUnitsRulesAndNewNonUnitsRules(nonUnitsRules, newNonUnitsRules) {
  const rules = [];

  newNonUnitsRules.forEach(function(newNonUnitsRule) {
    const name = newNonUnitsRule.getName(),
          definitions = newNonUnitsRule.getDefinitions(),
          nonUnitsRule = findRuleByName(name, nonUnitsRules);

    nonUnitsRule.addDefinitions(definitions);
  });

  nonUnitsRules.forEach(function(nonUnitsRule) {
    const nonUnitsRuleNonTrivial = nonUnitsRule.isNonTrivial();

    if (nonUnitsRuleNonTrivial) {
      const rule = nonUnitsRule;  ///

      rules.push(rule);
    }
  });

  return rules;
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
