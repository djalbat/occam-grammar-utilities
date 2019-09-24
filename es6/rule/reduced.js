'use strict';

const parsers = require('occam-parsers');

const ReducedNode = require('../node/reduced');

const { Rule } = parsers;

class ReducedRule extends Rule {
  static fromReducedRuleNameAndRule(reducedRuleName, rule) {
    let reducedRule = null;

    const definitions = rule.getDefinitions(),
          definitionsLength = definitions.length;

    if (definitionsLength > 0) {
      const name = reducedRuleName,  ///
            NonTerminalNode = ReducedNode;///

      reducedRule = new ReducedRule(name, definitions, NonTerminalNode);
    }

    return reducedRule;
  }
}

module.exports = ReducedRule;
