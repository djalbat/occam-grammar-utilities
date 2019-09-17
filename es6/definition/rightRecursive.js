'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { optionalRuleNamePartPartFromRuleName } = partUtilities,
      { rightRecursiveRuleNameFromRecursiveRuleName } = ruleNameUtilities;

class RightRecursiveDefinition extends Definition {
  static fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
    const parts = immediatelyLeftRecursiveDefinition.getParts(),
          recursiveRleName = immediatelyLeftRecursiveDefinition.getRuleName(),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRecursiveRuleName(recursiveRleName),
          ruleName = rightRecursiveRuleName,  ///
          optionalRightRecursiveRuleNamePart = optionalRuleNamePartPartFromRuleName(ruleName);

    parts.push(optionalRightRecursiveRuleNamePart);

    parts.shift();  ///

    const rightRecursiveDefinition = new RightRecursiveDefinition(parts);

    return rightRecursiveDefinition;
  }
}

module.exports = RightRecursiveDefinition;
