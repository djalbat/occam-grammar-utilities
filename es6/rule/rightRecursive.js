'use strict';

const parsers = require('occam-parsers');

const ruleNameUtilities = require('../utilities/ruleName'),
      RightRecursiveNode = require('../node/rightRecursive'),
      RightRecursiveDefinition = require('../definition/rightRecursive');

const { Rule } = parsers,
      { rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class RightRecursiveRule extends Rule {
  // static fromRightRecursiveRuleName(rightRecursiveRuleName) {
  //   const name = rightRecursiveRuleName,  ///
  //         definitions = [],
  //         NonTerminalNode = RightRecursiveNode, ///
  //         rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);
  //
  //   return rightRecursiveRule;
  // }

  static fromRuleNameAndRightRecursiveDefinitions(ruleName, rightRecursiveDefinitions) {
    const rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          name = rightRecursiveRuleName,  ///
          definitions = rightRecursiveDefinitions, ///
          NonTerminalNode = RightRecursiveNode, ///
          rightRecursiveRule = new RightRecursiveRule(name, definitions, NonTerminalNode);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;
