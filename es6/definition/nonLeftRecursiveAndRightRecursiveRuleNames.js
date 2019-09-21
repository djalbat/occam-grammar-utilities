'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { nonLeftRecursiveRuleNameFromLeftRecursiveRuleName, rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonLeftRecursiveAndRightRecursiveRuleNamesDefinition extends Definition {
  static fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead) {
    const nonLeftRecursiveRuleName = nonLeftRecursiveRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          nonLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(nonLeftRecursiveRuleName, lookAhead),
          rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
          ruleNameParts = [
            nonLeftRecursiveRuleNamePart,
            rightRecursiveRuleNamePart
          ],
          parts = ruleNameParts,  ///
          nonLeftRecursiveAndRightRecursiveRuleNamesDefinition = new Definition(parts);

    return nonLeftRecursiveAndRightRecursiveRuleNamesDefinition;
  }
}

module.exports = NonLeftRecursiveAndRightRecursiveRuleNamesDefinition;
