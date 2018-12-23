'use strict';

const parsers = require('occam-parsers');

const NonUnitDefinition = require('../definition/nonUnit');

const { Rule } = parsers;

class NonUnitsRule extends Rule {
  static fromRule(rule) {
    let nonUnitsRule = null;

    const definitions = definitionsFromRule(rule),
          definitionsLength = definitions.length;

    if (definitionsLength > 0) {
      const name = rule.getName(),
            nonTerminalNode = rule.getNonTerminalNode();

      nonUnitsRule = new NonUnitsRule(name, definitions, nonTerminalNode);
    }

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
