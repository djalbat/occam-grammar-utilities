'use strict';

const parsers = require('occam-parsers');

const ReducedNode = require('../node/reduced');

const { Rule } = parsers;

class ReducedRule extends Rule {
  removeDefinition(definition) {
    const definitions = this.getDefinitions(),
          index = definitions.indexOf(definition);

    if (index !== -1) {
      const start = index,  ///
            deleteCount = 1;

      definitions.splice(start, deleteCount);
    }
  }

  static fromReducedRuleNameAndDefinitions(reducedRuleName, definitions) {
    const name = reducedRuleName,  ///
          NonTerminalNode = ReducedNode, ///
          reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

    return reducedRule;
  }
}

module.exports = ReducedRule;
