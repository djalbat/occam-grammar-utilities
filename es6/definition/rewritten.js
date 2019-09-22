'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      partsUtilities = require('../utilities/parts'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { cloneParts } = partsUtilities,
      { repeatedRuleNameFromRuleName, reducedRuleNameFromRuleName } = ruleNameUtilities,
      { ruleNamePartFromRuleName, zeroOrMoreRuleNamePartPartFromRuleName } = partUtilities;

class RewrittenDefinition extends Definition {
  static fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition) {
    let parts = immediatelyLeftRecursiveDefinition.getParts();

    parts = cloneParts(parts);  ///

    parts.shift();  ///

    const ruleName = immediatelyLeftRecursiveDefinition.getRuleName(),
          lookAhead = immediatelyLeftRecursiveDefinition.isLookAhead(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName, lookAhead),
          zeroOrMoreRepeatedRuleNamePart = zeroOrMoreRuleNamePartPartFromRuleName(repeatedRuleName),
          rewrittenDefinition = new RewrittenDefinition(parts);

    parts.unshift(reducedRuleNamePart);

    parts.push(zeroOrMoreRepeatedRuleNamePart);

    return rewrittenDefinition;
  }
}

module.exports = RewrittenDefinition;
