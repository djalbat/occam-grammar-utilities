'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array'),
      RightRecursiveDefinition = require('../definition/rightRecursive');

const { Rule } = parsers,
      { first } = arrayUtilities;

let count = 1;  ///

class RightRecursiveRule extends Rule {
  hasNoWhitespace() {
    const firstDefinition = first(this.definitions),
          rightRecursiveDefinition = firstDefinition, ///
          noWhitespace = rightRecursiveDefinition.hasNoWhitespace();

    return noWhitespace;
  }

  static fromRuleNameDefinitionAndNonTerminalNode(ruleName, definition, nonTerminalNode) {
    const rightRecursiveDefinition = RightRecursiveDefinition.fromDefinition(definition),
          name = `${ruleName}${count++}~`,
          definitions = [
            rightRecursiveDefinition
          ],
          rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
