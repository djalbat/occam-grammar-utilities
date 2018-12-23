'use strict';

const parsers = require('occam-parsers');

const UnitRule = require('./rule/unit'),
      FixedRule = require('./rule/fixed'),
      NonUnitsRule = require('./rule/nonUnits'),
      NonCyclicRule = require('./rule/nonCyclic'),
      ruleUtilities = require('./utilities/rule');

const { Rule } = parsers,
      { findRuleByName } = ruleUtilities;

function eliminateCycles(rules) {
  const nonUnitsRules = nonUnitsRulesFromRules(rules),
        unitRules = unitRulesFromRules(rules);

  rules = unitRules;  ///

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

function nonCyclicRulesFromStronglyConnectedComponents(stronglyConnectedComponents, rules) {
  const nonCyclicRules = stronglyConnectedComponents.reduce(function(nonCyclicRules, stronglyConnectedComponent) {
          const stronglyConnectedComponentNonCyclic = stronglyConnectedComponent.isNonCyclic();

          if (stronglyConnectedComponentNonCyclic) {
            nonCyclicRuleFromStronglyConnectedComponent(stronglyConnectedComponent, rules, nonCyclicRules);
          } else {
            nonCyclicRulesFromStronglyConnectedComponent(stronglyConnectedComponent, rules, nonCyclicRules);
          }

          return nonCyclicRules;
        }, []);

  return nonCyclicRules;
}

function nonCyclicRuleFromStronglyConnectedComponent(stronglyConnectedComponent, rules, nonCyclicRules) {
  const firstVertexName = stronglyConnectedComponent.getFirstVertexName(),
        name = firstVertexName,  ///
        rule = findRuleByName(name, rules);

  if (rule !== null) {
    const nonCyclicRule = NonCyclicRule.fromRule(rule);

    nonCyclicRules.push(nonCyclicRule);
  }
}

function nonCyclicRulesFromStronglyConnectedComponent(stronglyConnectedComponent, rules, nonCyclicRules) {
  const unitRules = unitRulesFromStronglyConnectedComponent(stronglyConnectedComponent, rules),
        fixedRules = fixedRulesFromStronglyConnectedComponent(stronglyConnectedComponent, rules),
        addedRules = addedRulesFromUnitRulesAndFixedRules(unitRules, fixedRules);

  nonCyclicRulesFromFixedRulesAndAddedRules(fixedRules, addedRules, nonCyclicRules);
}

function addedRulesFromUnitRulesAndFixedRules(unitRules, fixedRules) {
  const addedRules = [],
        removedUnitRules = [];

  let unitRulesLength = unitRules.length;

  while (unitRulesLength > 0) {
    let unitRule = unitRules.shift(),
        unitRuleName = unitRule.getName();

    const removedUnitRule = unitRule; ///

    removedUnitRules.push(removedUnitRule);

    const unitRuleUnitRuleName = unitRule.getUnitRuleName(),
          fixedRuleName = unitRuleUnitRuleName,  ///
          fixedRule = findRuleByName(fixedRuleName, fixedRules),
          addedRuleName = unitRuleName;  ///

    let addedRule = findRuleByName(addedRuleName, addedRules);

    if (addedRule === null) {
      addedRule = Rule.fromRule(fixedRule);

      addedRule.setName(addedRuleName);

      addedRules.push(addedRule);
    } else {
      const fixedRuleDefinitions = fixedRule.getDefinitions();

      addedRule.addDefinitions(fixedRuleDefinitions);
    }

    const intermediateUnitRuleName = unitRuleUnitRuleName, ///
          intermediateUnitRule = findRuleByName(intermediateUnitRuleName, unitRules);

    if (intermediateUnitRule !== null) {
      const intermediateUnitRuleUnitRuleName = intermediateUnitRule.getUnitRuleName(),
            firstRuleName = unitRuleName,  ///
            secondRuleName = intermediateUnitRuleUnitRuleName,  ///
            unitRuleNonCyclic = (firstRuleName !== secondRuleName);

      if (unitRuleNonCyclic) {
        unitRule = findUnitRuleByNames(firstRuleName, secondRuleName, removedUnitRules);

        if (unitRule === null) {
          unitRule = UnitRule.fromRuleNames(firstRuleName, secondRuleName);

          unitRules.unshift(unitRule);
        }
      }
    }

    unitRulesLength = unitRules.length;
  }

  return addedRules;
}

function nonCyclicRulesFromFixedRulesAndAddedRules(fixedRules, addedRules, nonCyclicRules) {
  fixedRules.forEach(function(fixedRule) {
    const nonCyclicRule = fixedRule, ///
          nonCyclicRuleName = nonCyclicRule.getName(),
          addedRule = findRuleByName(nonCyclicRuleName, addedRules);

    if (addedRule !== null) {
      const addedRuleDefinitions = addedRule.getDefinitions();

      nonCyclicRule.addDefinitions(addedRuleDefinitions);
    }

    const nonCyclicRuleDefinitions = nonCyclicRule.getDefinitions(),
          nonCyclicRuleDefinitionsExist = (nonCyclicRuleDefinitions > 0);

    if (nonCyclicRuleDefinitionsExist) {
      nonCyclicRules.push(nonCyclicRule);
    }
  });
}

function unitRulesFromStronglyConnectedComponent(stronglyConnectedComponent, rules) {
  const stronglyConnectedComponentVertexNames = stronglyConnectedComponent.getVertexNames(),
        unitsRules = unitsRulesFromStronglyConnectedComponent(stronglyConnectedComponent, rules),
        ruleNames = stronglyConnectedComponentVertexNames,  ///
        unitRules = unitRulesFromUnitsRulesAndRuleNames(unitsRules, ruleNames);

  return unitRules;
}

function unitsRulesFromStronglyConnectedComponent(stronglyConnectedComponent, rules) {
  const unitsRules = stronglyConnectedComponent.reduceVertexNames(function(unitsRules, vertexName) {
    const name = vertexName,  ///
          rule = findRuleByName(name, rules),
          unitsRule = UnitsRule.fromRule(rule);

    if (unitsRule !== null) {
      unitsRules.push(unitsRule);
    }

    return unitsRules;
  }, []);

  return unitsRules;
}

function unitRulesFromUnitsRulesAndRuleNames(unitsRules, ruleNames) {
  const unitRules = unitsRules.reduce(function(unitRules, unitsRule) {
    const unitsRuleName = unitsRule.getName();

    unitsRule.forEachUnitDefinition(function(unitDefinition) {
      const name = unitsRuleName, ///
            unitRule = UnitRule.fromNameAndUnitDefinition(name, unitDefinition),
            unitRuleNotCyclic = unitRule.isNotCyclic(),
            unitRuleIncludedInRuleNames = unitRule.isIncludedInRuleNames(ruleNames);
      
      if (unitRuleNotCyclic && unitRuleIncludedInRuleNames) {
        unitRules.push(unitRule);
      }
    });

    return unitRules;
  }, []);

  return unitRules;
}

function fixedRulesFromStronglyConnectedComponent(stronglyConnectedComponent, rules) {
  const stronglyConnectedComponentVertexNames = stronglyConnectedComponent.getVertexNames(),
        ruleNames = stronglyConnectedComponentVertexNames, ///
        fixedRules = stronglyConnectedComponent.mapVertexNames(function(vertexName) {
    const name = vertexName,  ///
          rule = findRuleByName(name, rules),
          fixedRule = FixedRule.fromRuleAndRuleNames(rule, ruleNames);

    return fixedRule;
  });

  return fixedRules;
}

function findUnitRuleByNames(firstRuleName, secondRuleName, unitRules) {
  const unitRule = unitRules.find(function(unitRule) {
    const unitRuleName = unitRule.getName(),
          unitRuleUnitRuleName = unitRule.getUnitRuleName(),
          found = ((unitRuleName === firstRuleName) && (unitRuleUnitRuleName === secondRuleName));

    return found;
  }) || null; ///

  return unitRule;
}
