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

  static fromLeftRecursiveRuleAndNonTerminalNode(leftRecursiveRule, nonTerminalNode, count) {
    const leftRecursiveRuleName = leftRecursiveRule.getName(),
          rightRecursiveRuleName = `${leftRecursiveRuleName}${count + 1}~`,
          leftRecursiveDefinition = definitionFromRule(leftRecursiveRule),
          rightRecursiveDefinition = RightRecursiveDefinition.fromRightRecursiveRuleNameAndLeftRecursiveDefinition(rightRecursiveRuleName, leftRecursiveDefinition),
          name = rightRecursiveRuleName,  ///
          definitions = [
            rightRecursiveDefinition
          ],
          rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;

function definitionFromRule(rule) {
  const definitions = rule.getDefinitions(),
        firstDefinition = first(definitions),
        definition = firstDefinition; ///

  return definition;
}