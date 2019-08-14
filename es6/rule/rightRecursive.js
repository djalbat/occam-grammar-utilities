'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array'),
      RightRecursiveDefinition = require('../definition/rightRecursive');

const { Rule } = parsers,
      { first } = arrayUtilities;

class RightRecursiveRule extends Rule {
  isLookAhead() {
    const firstDefinition = first(this.definitions),
          rightRecursiveDefinition = firstDefinition, ///
          lookAhead = rightRecursiveDefinition.isLookAhead();

    return lookAhead;
  }

  hasNoWhitespace() {
    const firstDefinition = first(this.definitions),
          rightRecursiveDefinition = firstDefinition, ///
          noWhitespace = rightRecursiveDefinition.hasNoWhitespace();

    return noWhitespace;
  }

  static fromRuleNameDefinitionAndNonTerminalNodeAndCount(ruleName, definition, nonTerminalNode, count) {
    const rightRecursiveRuleName = `${ruleName}${count + 1}~`,
          rightRecursiveDefinition = RightRecursiveDefinition.fromRightRecursiveRuleNameAndDefinition(rightRecursiveRuleName, definition),
          name = rightRecursiveRuleName,  ///
          definitions = [
            rightRecursiveDefinition
          ],
          rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
