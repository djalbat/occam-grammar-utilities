'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { nonRecursiveRuleNameFromRuleName, rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonRecursiveAndRightRecursiveRuleNamesDefinition extends Definition {
  static fromRuleName(ruleName) {
    const nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          ruleNames = [
            nonRecursiveRuleName,
            rightRecursiveRuleName
          ],
          ruleNameParts = ruleNames.map((ruleName) => {
            const ruleNamePart = ruleNamePartFromRuleName(ruleName);

            return ruleNamePart;
          }),
          parts = ruleNameParts,  ///
          nonRecursiveAndRightRecursiveRuleNamesDefinition = new Definition(parts);

    return nonRecursiveAndRightRecursiveRuleNamesDefinition;
  }
}

module.exports = NonRecursiveAndRightRecursiveRuleNamesDefinition;
