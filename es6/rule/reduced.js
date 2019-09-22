'use strict';

const parsers = require('occam-parsers');

const ReducedNode = require('../node/reduced');

const { Rule } = parsers;

class ReducedRule extends Rule {
  static fromReducedRuleNameAndDefinitions(reducedRuleName, definitions) {
    const name = reducedRuleName,  ///
          NonTerminalNode = ReducedNode, ///
          reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

    return reducedRule;
  }
}

module.exports = ReducedRule;
