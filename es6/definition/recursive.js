'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { nonRecursiveRuleNameFromRuleName, rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class RecursiveDefinition extends Definition {
  static fromRuleName(ruleName, count) {
    const nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName, count),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
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
