'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { rightRecursiveRuleNameFromRuleName } = ruleNameUtilities,
      { optionalRuleNamePartPartFromRuleName } = partUtilities;

class RightRecursiveDefinition extends Definition {
  static fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
    let ruleName = immediatelyLeftRecursiveDefinition.getRuleName();

    const parts = immediatelyLeftRecursiveDefinition.getParts(),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName);

    ruleName = rightRecursiveRuleName;  ///

    const optionalRightRecursiveRuleNamePart = optionalRuleNamePartPartFromRuleName(ruleName);

    parts.push(optionalRightRecursiveRuleNamePart);

    parts.shift();  ///

    const rightRecursiveDefinition = new RightRecursiveDefinition(parts);

    return rightRecursiveDefinition;
  }
}

module.exports = RightRecursiveDefinition;
