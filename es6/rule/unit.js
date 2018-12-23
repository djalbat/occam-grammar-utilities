'use strict';

const necessary = require('necessary'),
      parsers = require('occam-parsers');

const UnitDefinition = require('../definition/unit');

const { Rule } = parsers,
    { arrayUtilities } = necessary,
    { first } = arrayUtilities;

class UnitRule extends Rule {
  getUnitRuleName() {
    const definitions = this.getDefinitions(),
          firstDefinition = first(definitions),
          unitDefinition = firstDefinition, ///
          unitRuleName = unitDefinition.getRuleName();

    return unitRuleName;
  }

  isNotCyclic() {
    const name = this.getName(),
          unitRuleName = this.getUnitRuleName(),
          notCyclic = (name !== unitRuleName);

    return notCyclic;
  }

  isIncludedInRuleNames(ruleNames) {
    const name = this.getName(),
          unitRuleName = this.getUnitRuleName(),
          ruleNamesContainsName = ruleNames.includes(name),
          ruleNamesContainsUnitRuleName = ruleNames.includes(unitRuleName),
          includedInRuleNames = (ruleNamesContainsName && ruleNamesContainsUnitRuleName);

    return includedInRuleNames;
  }

  static fromNameAndUnitDefinition(name, unitDefinition) {
    const definitions = [
            unitDefinition
          ],
          Node = null,  ///
          unitRule = new UnitRule(name, definitions, Node);

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
