'use strict';

const parsers = require('occam-parsers');

const EpsilonDefinition = require('../definition/epsilon'),
      RightRecursiveDefinition = require('../definition/rightRecursive');

const { Rule } = parsers;

class RightRecursiveRule extends Rule {
  static fromLeftRecursiveDefinitionRightRecursiveRuleNameAndnonTerminalNode(leftRecursiveDefinition, rightRecursiveRuleName, nonTerminalNode) {
    const name = rightRecursiveRuleName,  ///
          rightRecursiveDefinition = RightRecursiveDefinition.fromLeftRecursiveDefinitionAndRightRecursiveRuleName(leftRecursiveDefinition, rightRecursiveRuleName),
          epsilonDefinition = EpsilonDefinition.fromNothing(),
          definitions = [
            rightRecursiveDefinition,
            epsilonDefinition
          ],
          rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
