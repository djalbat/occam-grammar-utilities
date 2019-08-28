'use strict';

const parsers = require('occam-parsers');

const RightRecursveNode = require('../node/rightRecursive'),
      RightRecursiveDefinition = require('../definition/rightRecursive');

const { Rule } = parsers;

class RightRecursiveRule extends Rule {
  constructor(name, definitions, nonTerminalNode, noWhitespace, lookAhead) {
    super(name, definitions, nonTerminalNode);

    this.noWhitespace = noWhitespace;

    this.lookAhead = lookAhead;
  }

  isLookAhead() {
    return this.lookAhead;
  }

  hasNoWhitespace() {
    return this.noWhitespace;
  }

  static fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName) {
    const rightRecursiveDefinition = RightRecursiveDefinition.fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName),
          name = rightRecursiveRuleName,  ///
          definitions = [
            rightRecursiveDefinition
          ],
          NonTerminalNode = RightRecursveNode, ///
          noWhitespace = rightRecursiveDefinition.hasNoWhitespace(),
          lookAhead = rightRecursiveDefinition.isLookAhead(),
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode, noWhitespace, lookAhead);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
