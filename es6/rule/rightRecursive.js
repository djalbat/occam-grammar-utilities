'use strict';

const parsers = require('occam-parsers');

const RightRecursveNode = require('../node/rightRecursive'),
      RightRecursiveDefinition = require('../definition/rightRecursive');

const { Rule } = parsers;

class RightRecursiveRule extends Rule {
  constructor(name, definitions, NonTerminalNode, recursiveRuleName) {
    super(name, definitions, NonTerminalNode);

    this.recursiveRuleName = recursiveRuleName;
  }

  getRecursiveRuleName() {
    return this.recursiveRuleName;
  }

  static fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName) {
    const rightRecursiveDefinition = RightRecursiveDefinition.fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName),
          name = rightRecursiveRuleName,  ///
          definitions = [
            rightRecursiveDefinition
          ],
          NonTerminalNode = RightRecursveNode, ///
          recursiveRuleName = rightRecursiveDefinition.getRecursiveRuleName(),
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode, recursiveRuleName);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
