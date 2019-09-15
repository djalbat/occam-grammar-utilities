'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { rightRecursiveRuleNameFromRuleName, nonRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class RecursiveDefinition extends Definition {
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
          recursiveDefinition = new Definition(parts);

    return recursiveDefinition;
  }

  static fromRecursiveRuleNameAndRightRecursiveRuleName(recursiveRuleName, rightRecursiveRuleName) {
    const ruleName = recursiveRuleName, ///
          nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          ruleNames = [
            nonRecursiveRuleName,
            rightRecursiveRuleName
          ],
          ruleNameParts = ruleNames.map((ruleName) => {
            const ruleNamePart = ruleNamePartFromRuleName(ruleName);

            return ruleNamePart;
          }),
          parts = ruleNameParts,  ///
          recursiveDefinition = new Definition(parts);

    return recursiveDefinition;
  }

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
