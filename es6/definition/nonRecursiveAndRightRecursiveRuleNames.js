'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { nonRecursiveRuleNameFromLeftRecursiveRuleName, rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonRecursiveAndRightRecursiveRuleNamesDefinition extends Definition {
  static fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead) {
    const nonRecursiveRuleName = nonRecursiveRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName, lookAhead),
          rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
          ruleNameParts = [
            nonRecursiveRuleNamePart,
            rightRecursiveRuleNamePart
          ],
          parts = ruleNameParts,  ///
          nonRecursiveAndRightRecursiveRuleNamesDefinition = new Definition(parts);

    return nonRecursiveAndRightRecursiveRuleNamesDefinition;
  }
}

module.exports = NonRecursiveAndRightRecursiveRuleNamesDefinition;
