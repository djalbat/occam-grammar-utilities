'use strict';

const parsers = require('occam-parsers');

const IntermediateNode = require('../node/intermediate'),
      ruleNameUtilities = require('../utilities/ruleName'),
      RightRecursiveDefinition = require('../definition/rightRecursive');

const { Rule } = parsers,
      { rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

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

  static fromDefinitionAndRuleName(definition, ruleName, rules, count) {
    const rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName, count),
          rightRecursiveDefinition = RightRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName, count),
          name = rightRecursiveRuleName,  ///
          definitions = [
            rightRecursiveDefinition
          ],
          NonTerminalNode = IntermediateNode, ///
          noWhitespace = rightRecursiveDefinition.hasNoWhitespace(),
          lookAhead = rightRecursiveDefinition.isLookAhead(),
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode, noWhitespace, lookAhead);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
