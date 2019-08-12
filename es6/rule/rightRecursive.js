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

  static fromLeftRecursiveDefinitionRightRecursiveRuleNameAndnonTerminalNode(leftRecursiveDefinition, rightRecursiveRuleName, nonTerminalNode) {
    const name = rightRecursiveRuleName,  ///
          rightRecursiveDefinition = RightRecursiveDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition),
          definitions = [
            rightRecursiveDefinition
          ],
          rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
