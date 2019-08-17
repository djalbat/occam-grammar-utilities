'use strict';

const parsers = require('occam-parsers');

const RightRecursiveDefinition = require('../definition/rightRecursive');

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

  static fromRuleAndImmediatelyLeftRecursiveDefinition(rule, immediatelyLeftRecursiveDefinition, count) {
    const ruleName = rule.getName(),
          rightRecursiveRuleName = `${ruleName}${count + 1}~`,
          rightRecursiveDefinition = RightRecursiveDefinition.fromRightRecursiveRuleNameAndImmediatelyLeftRecursiveDefinition(rightRecursiveRuleName, immediatelyLeftRecursiveDefinition),
          noWhitespace = rightRecursiveDefinition.hasNoWhitespace(),
          lookAhead = rightRecursiveDefinition.isLookAhead(),
          name = rightRecursiveRuleName,  ///
          definitions = [
            rightRecursiveDefinition
          ],
          nonTerminalNode = rule.getNonTerminalNode(),
          rightRecursiveRule = new RightRecursiveRule(name, definitions, nonTerminalNode, noWhitespace, lookAhead);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
