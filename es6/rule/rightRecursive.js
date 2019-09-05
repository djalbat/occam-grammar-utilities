'use strict';

const parsers = require('occam-parsers');

const RightRecursveNode = require('../node/rightRecursive'),
      RightRecursiveDefinition = require('../definition/rightRecursive');

const { Rule } = parsers;

class RightRecursiveRule extends Rule {
  addRightRecursiveDefinition(rightRecursiveDefinition) {
    const definition = rightRecursiveDefinition;  ///

    super.addDefinition(definition);
  }

  static fromRightRecursiveRuleName(rightRecursiveRuleName) {
    const name = rightRecursiveRuleName,  ///
          definitions = [],
          NonTerminalNode = RightRecursveNode, ///
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);

    return rightRecursiveRule;
  }

  static fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName) {
    const rightRecursiveDefinition = RightRecursiveDefinition.fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName),
          name = rightRecursiveRuleName,  ///
          definitions = [
            rightRecursiveDefinition
          ],
          NonTerminalNode = RightRecursveNode, ///
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
