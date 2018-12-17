'use strict';

const parsers = require('occam-parsers');

const UnitDefinition = require('../definition/unit'),
    NonUnitDefinition = require('../definition/nonUnit');

const { Rule } = parsers;

class NonCyclicRule extends Rule {
  static fromRule(rule) {
    const nonCyclicDefinitions = nonCyclicDefinitionsFromRule(rule),
          ruleName = rule.getName(),
          ruleNonTerminalNode = rule.getNonTerminalNode(),
          name = ruleName, ///
          definitions = nonCyclicDefinitions, ///
          NonTerminalNode = ruleNonTerminalNode, ///
          nonCyclicRule = new NonCyclicRule(name, definitions, NonTerminalNode);

    return nonCyclicRule;
  }
}

module.exports = NonCyclicRule;

function nonCyclicDefinitionsFromRule(rule) {
  const ruleName = rule.getName(),
        ruleDefinitions = rule.getDefinitions(),
        nonCyclicDefinitions = ruleDefinitions.reduce(function(nonCyclicDefinitions, ruleDefinition) {
          let nonCyclicDefinition = null;
  
          const nonUnitDefinition = NonUnitDefinition.fromDefinition(ruleDefinition);
  
          if (nonUnitDefinition !== null) {
            nonCyclicDefinition = nonUnitDefinition;
          } else {
            const unitDefinition = UnitDefinition.fromDefinition(ruleDefinition),
                  unitDefinitionRuleName = unitDefinition.getRuleName();
  
            if (unitDefinitionRuleName !== ruleName) {
              nonCyclicDefinition = unitDefinition;
            }
          }
  
          if (nonCyclicDefinition !== null) {
            nonCyclicDefinitions.push(nonCyclicDefinition);
          }
  
          return nonCyclicDefinitions;
        }, []);

  return nonCyclicDefinitions;
}
