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
          leftRecursiveRuleName = immediatelyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          reducedLeftRecursiveRuleName = reducedRuleNameFromRuleName(leftRecursiveRuleName),
          zeroOrMoreRepeatedRuleNamePart = zeroOrMoreRuleNamePartPartFromRuleName(repeatedRuleName),
          reducedLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead),
          rewrittenDefinition = new RewrittenDefinition(parts);

    parts.unshift(reducedLeftRecursiveRuleNamePart);

    parts.push(zeroOrMoreRepeatedRuleNamePart);

    return rewrittenDefinition;
  }
}

module.exports = RewrittenDefinition;
