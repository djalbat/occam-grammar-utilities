'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array'),
      RightRecursiveDefinition = require('../definition/rightRecursive');

const { Rule } = parsers,
      { first } = arrayUtilities;

class RightRecursiveRule extends Rule {
  hasNoWhitespace() {
    const firstDefinition = first(this.definitions),
          rightRecursiveDefinition = firstDefinition, ///
          noWhitespace = rightRecursiveDefinition.hasNoWhitespace();

    return noWhitespace;
  }

  static fromRuleNameDefinitionAndNonTerminalNodeAndCount(ruleName, definition, nonTerminalNode, count) {
    const rightRecursiveDefinition = RightRecursiveDefinition.fromDefinition(definition),
          name = `${ruleName}${count + 1}~`,
          definitions = [
            rightRecursiveDefinition
          ],
          rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
