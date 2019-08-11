'use strict';

const parsers = require('occam-parsers');

const { Parts } = parsers,
      { RuleNamePart } = Parts;

class RightRecursiveRuleNamePart extends RuleNamePart {
  static fromRightRecursiveRule(rightRecursiveRule) {
    const rightRecursiveRuleName = rightRecursiveRule.getName(),
          ruleName = rightRecursiveRuleName,  ///
          noWhitespace = false, ///
          lookAhead = false,  ///
          rightRecursiveRuleNamePart = new RightRecursiveRuleNamePart(ruleName, noWhitespace, lookAhead);

    return rightRecursiveRuleNamePart;
  }
}

module.exports = RightRecursiveRuleNamePart;
