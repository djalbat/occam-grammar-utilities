'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array'),
      RightRecursiveDefinition = require('../definition/rightRecursive');

const { Rule } = parsers,
      { first } = arrayUtilities;

class RightRecursiveRule extends Rule {
  constructor(name, definitions, nonTerminalNode, leftRecursiveRule, noWhitespace, lookAhead) {
    super(name, definitions, nonTerminalNode);

    this.leftRecursiveRule = leftRecursiveRule;

    this.noWhitespace = noWhitespace;

    this.lookAhead = lookAhead;
  }

  getLeftRecursiveRuleName() {
    const leftRecursiveRuleName = this.leftRecursiveRule.getName();

    return leftRecursiveRuleName;
  }

  getLeftRecursiveRule() {
    return this.leftRecursiveRule;
  }

  isLookAhead() {
    return this.lookAhead;
  }

  hasNoWhitespace() {
    return this.noWhitespace;
  }

  static fromLeftRecursiveRuleAndNonTerminalNode(leftRecursiveRule, nonTerminalNode, count) {
    const leftRecursiveRuleName = leftRecursiveRule.getName(),
          rightRecursiveRuleName = `${leftRecursiveRuleName}${count + 1}~`,
          leftRecursiveDefinition = definitionFromRule(leftRecursiveRule),
          rightRecursiveDefinition = RightRecursiveDefinition.fromRightRecursiveRuleNameAndLeftRecursiveDefinition(rightRecursiveRuleName, leftRecursiveDefinition),
          noWhitespace = rightRecursiveDefinition.hasNoWhitespace(),
          lookAhead = rightRecursiveDefinition.isLookAhead(),
          name = rightRecursiveRuleName,  ///
          definitions = [
            rightRecursiveDefinition
          ],
          rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode, leftRecursiveRule, noWhitespace, lookAhead);

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