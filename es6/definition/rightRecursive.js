'use strict';

const parsers = require('occam-parsers');

const { Parts, Definition } = parsers,
      { RuleNamePart } = Parts;

class RightRecursiveDefinition extends Definition {
  static fromLeftRecursiveDefinitionAndRightRecursiveRuleName(leftRecursiveDefinition, rightRecursiveRuleName) {
    const parts = leftRecursiveDefinition.getParts(),
          firstPart = parts.shift(),
          ruleNamePart = firstPart, ///
          noWhitespace = ruleNamePart.hasNoWhitespace(),
          lookAhead = ruleNamePart.isLookAhead(),
          rightRecursiveRuleNamePart = new RuleNamePart(rightRecursiveRuleName, noWhitespace, lookAhead);

    parts.push(rightRecursiveRuleNamePart);

    const rightRecursiveDefinition = new RightRecursiveDefinition(parts);

    return rightRecursiveDefinition;
  }
}

module.exports = RightRecursiveDefinition;
