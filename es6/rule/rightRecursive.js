'use strict';

const parsers = require('occam-parsers');

const ruleNameUtilities = require('../utilities/ruleName'),
      RightRecursiveNode = require('../node/rightRecursive'),
      RightRecursiveDefinition = require('../definition/rightRecursive');

const { Rule } = parsers,
      { rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class RightRecursiveRule extends Rule {
  static fromRuleNameAndImmediatelyLeftRecursiveRecursiveDefinitions(ruleName, immediatelyLeftRecursiveDefinitions) {
    const rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          rightRecursiveDefinitions = immediatelyLeftRecursiveDefinitions.map((immediatelyLeftRecursiveDefinition) => RightRecursiveDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition)),
          name = rightRecursiveRuleName,  ///
          definitions = rightRecursiveDefinitions, ///
          NonTerminalNode = RightRecursiveNode, ///
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
