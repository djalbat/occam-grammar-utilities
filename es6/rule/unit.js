'use strict';

const necessary = require('necessary'),
      parsers = require('occam-parsers');

const UnitDefinition = require('../definition/unit');

const { Rule } = parsers,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities;

class UnitRule extends Rule {
  getUnitDefinitionRuleName() {
    const unitDefinition = this.getUnitDefinition(),
          unitDefinitionRuleName = unitDefinition.getRuleName();

    return unitDefinitionRuleName;
  }

  getUnitDefinition() {
    const definitions = this.getDefinitions(),
          firstDefinition = first(definitions),
          unitDefinition = firstDefinition; ///

    return unitDefinition;
  }

  isCyclic() {
    const name = this.getName(),
          unitDefinitionRuleName = this.getUnitDefinitionRuleName(),
          cyclic = (name === unitDefinitionRuleName);

    return cyclic;
  }

  matches(unitRule) {
    let matches = false;

    const name = this.getName(),
          unitRuleName = unitRule.getName();

    if (name === unitRuleName) {
      const unitDefinitionRuleName = this.getUnitDefinitionRuleName(),
            unitRuleUnitDefinitionRuleName = unitRule.getUnitDefinitionRuleName();

      matches = (unitDefinitionRuleName === unitRuleUnitDefinitionRuleName);
    }

    return matches;
  }

  static fromNameAndUnitDefinition(name, unitDefinition) {
    const definitions = [
            unitDefinition
          ],
          NonTerminalNode = null,  ///
          unitRule = new UnitRule(name, definitions, NonTerminalNode);

    return unitRule;
  }

  static fromNameAndDefinition(name, definition) {
    let unitRule = null;

    const unitDefinition = UnitDefinition.fromDefinition(definition);

    if (unitDefinition !== null) {
      unitRule = UnitRule.fromNameAndUnitDefinition(name, unitDefinition);
    }

    return unitRule;
  }

  static fromNameAndRuleName(name, ruleName) {
    const unitDefinition = UnitDefinition.fromRuleName(ruleName),
          unitRule = UnitRule.fromNameAndUnitDefinition(name, unitDefinition);

    return unitRule;
  }

  static fromRuleNames(firstRuleName, secondRuleName) {
    const name = firstRuleName,  ///
          ruleName = secondRuleName,  ///
          unitRule = UnitRule.fromNameAndRuleName(name, ruleName);

    return unitRule;
  }
}

module.exports = UnitRule;
