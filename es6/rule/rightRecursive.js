'use strict';

const parsers = require('occam-parsers');

const RightRecursiveNode = require('../node/rightRecursive');

const { Rule } = parsers;

class RightRecursiveRule extends Rule {
  addRightRecursiveDefinition(rightRecursiveDefinition) {
    const definition = rightRecursiveDefinition;  ///

    this.addDefinition(definition);
  }

  static fromRightRecursiveRuleName(rightRecursiveRuleName) {
    const name = rightRecursiveRuleName,  ///
          definitions = [],
          NonTerminalNode = RightRecursiveNode, ///
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
