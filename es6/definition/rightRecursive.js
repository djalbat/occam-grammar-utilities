'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      partsUtilities = require('../utilities/parts'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { cloneParts } = partsUtilities,
      { optionalRuleNamePartPartFromRuleName } = partUtilities,
      { rightRecursiveRuleNameFromRecursiveRuleName } = ruleNameUtilities;

class RightRecursiveDefinition extends Definition {
  static fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
    let parts = immediatelyLeftRecursiveDefinition.getParts();

    parts = cloneParts(parts);  ///

    const recursiveRleName = immediatelyLeftRecursiveDefinition.getRuleName(),
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
