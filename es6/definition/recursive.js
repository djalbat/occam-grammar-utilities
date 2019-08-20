'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { nonRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class RecursiveDefinition extends Definition {
  static fromRuleNamePartAndRightRecursiveRuleName(ruleNamePart, rightRecursiveRuleName) {
    const ruleName = ruleNamePart.getRuleName(),
          lookAhead = ruleNamePart.isLookAhead(),
          noWhitespace = ruleNamePart.hasNoWhitespace(),
          nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName, noWhitespace, lookAhead),
          rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
          parts = [
            nonRecursiveRuleNamePart,
            rightRecursiveRuleNamePart
          ],
          recursiveDefinition = new Definition(parts);

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
