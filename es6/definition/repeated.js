'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      partsUtilities = require('../utilities/parts'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { cloneParts } = partsUtilities,
      { optionalRuleNamePartPartFromRuleName } = partUtilities,
      { repeatedRuleNameFromRecursiveRuleName } = ruleNameUtilities;

class RepeatedDefinition extends Definition {
  static fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
    let parts = immediatelyLeftRecursiveDefinition.getParts();

    parts = cloneParts(parts);  ///

    const recursiveRleName = immediatelyLeftRecursiveDefinition.getRuleName(),
          repeatedRuleName = repeatedRuleNameFromRecursiveRuleName(recursiveRleName),
          ruleName = repeatedRuleName,  ///
          optionalRepeatedRuleNamePart = optionalRuleNamePartPartFromRuleName(ruleName);

    parts.push(optionalRepeatedRuleNamePart);

    parts.shift();  ///

    const repeatedDefinition = new RepeatedDefinition(parts);

    return repeatedDefinition;
  }
}

module.exports = RepeatedDefinition;
