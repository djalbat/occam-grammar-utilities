'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { nonLeftRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonLeftRecursiveRuleNameDefinition extends Definition {
  static fromRuleName(ruleName) {
    const nonLeftRecursiveRuleName = nonLeftRecursiveRuleNameFromRuleName(ruleName),
          nonLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(nonLeftRecursiveRuleName),
          parts = [
            nonLeftRecursiveRuleNamePart
          ],
          nonLeftRecursiveRuleNameDefinition = new NonLeftRecursiveRuleNameDefinition(parts);

    return nonLeftRecursiveRuleNameDefinition;
  }

  static fromLeftRecursiveRuleName(leftRecursiveRuleName) {
    const ruleName = leftRecursiveRuleName, ///
          nonLeftRecursiveRuleNameDefinition = NonLeftRecursiveRuleNameDefinition.fromRuleName(ruleName);

    return nonLeftRecursiveRuleNameDefinition;
  }
}

module.exports = NonLeftRecursiveRuleNameDefinition;
