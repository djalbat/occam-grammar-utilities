'use strict';

const parsers = require('occam-parsers');

const UnitDefinition = require('../definition/unit');

const { Rule } = parsers;

class UnitsRule extends Rule {
  getUnitDefinitionRuleNames() {
    const unitDefinitions = this.getUnitDefinitions(),
          unitDefinitionRuleNames = unitDefinitions.map(function(unitDefinition) {
            const unitDefinitionRuleName = unitDefinition.getRuleName();

            return unitDefinitionRuleName;
          });

    return unitDefinitionRuleNames;
  }

  getUnitDefinitions() {
    const definitions = this.getDefinitions(),
          unitDefinitions = definitions.reduce(function(unitDefinitions, definition) {
            const unitDefinition = UnitDefinition.fromDefinition(definition);

            if (unitDefinition !== null) {
              unitDefinitions.push(unitDefinition);
            }

            return unitDefinitions;
          }, []);

    return unitDefinitions;
  }

  forEachUnitDefinition(callback) {
    const unitDefinitions = this.getUnitDefinitions();

    unitDefinitions.forEach(callback);
  }

  static fromRule(rule) {
    let unitsRule = null;

    const definitions = rule.getDefinitions(),
          someUnitDefinition = definitions.some(function(definition) {
            const unitDefinition = UnitDefinition.fromDefinition(definition);

            if (unitDefinition !== null) {
              return true;
            }
          });

    if (someUnitDefinition) {
      unitsRule = Rule.fromRule(UnitsRule, rule);
    }

    return unitsRule;
  }
}

module.exports = UnitsRule;
