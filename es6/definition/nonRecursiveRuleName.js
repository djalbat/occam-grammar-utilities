'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { nonRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonRecursiveRuleNameDefinition extends Definition {
  static fromRuleName(ruleName) {
    const nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          parts = [
            nonRecursiveRuleNamePart
          ],
          nonRecursiveDefinition = new NonRecursiveRuleNameDefinition(parts);

    return nonRecursiveDefinition;
  }

  static fromNonRecursiveRule(nonRecursiveRule) {
    const nonRecursiveRuleName = nonRecursiveRule.getName(),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          parts = [
            nonRecursiveRuleNamePart
          ],
          nonRecursiveDefinition = new NonRecursiveRuleNameDefinition(parts);

    return nonRecursiveDefinition;
  }
}

module.exports = NonRecursiveRuleNameDefinition;
