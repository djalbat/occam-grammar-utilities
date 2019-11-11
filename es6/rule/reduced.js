'use strict';

const parsers = require('occam-parsers');

const ReducedNode = require('../node/reduced');

const { Rule } = parsers;

class ReducedRule extends Rule {
  isEmpty() {
    const definitionsLength = this.definitions.length,
          empty = (definitionsLength === 0);

    return empty;
  }

  static fromReducedRuleNameAndRule(reducedRuleName, rule) {
    const definitions = rule.getDefinitions(),
          name = reducedRuleName,  ///
          NonTerminalNode = ReducedNode,///
          reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

    return reducedRule;
  }
}

module.exports = ReducedRule;
