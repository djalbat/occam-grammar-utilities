'use strict';

const parsers = require('occam-parsers');

const NonUnitDefinition = require('../definition/nonUnit');

const { Rule } = parsers;

class NonUnitsRule extends Rule {
  isNonTrivial() {
    const definitions = this.getDefinitions(),
          definitionsLength = definitions.length,
          nonTrivial = (definitionsLength > 0);

    return nonTrivial;
  }

  static fromRule(rule) {
    const name = rule.getName(),
          definitions = definitionsFromRule(rule),
          nonTerminalNode = rule.getNonTerminalNode(),
          nonUnitsRule = new NonUnitsRule(name, definitions, nonTerminalNode);

    return nonUnitsRule;
  }

  static fromNameAndDefinitions(name, definitions) {
    const nonTerminalNode = null, ///
          nonUnitsRule = new NonUnitsRule(name, definitions, nonTerminalNode);

    return nonUnitsRule;
  }
}

module.exports = NonUnitsRule;

function definitionsFromRule(rule) {
  let definitions = rule.getDefinitions();

  const nonUnitDefinitions = definitions.reduce(function(nonUnitDefinitions, definition) {
    const nonUnitDefinition = NonUnitDefinition.fromDefinition(definition);

    if (nonUnitDefinition !== null) {
      nonUnitDefinitions = nonUnitDefinitions.concat(nonUnitDefinition);
    }

    return nonUnitDefinitions;
  }, []);

  definitions = nonUnitDefinitions; ///

  return definitions;
}
