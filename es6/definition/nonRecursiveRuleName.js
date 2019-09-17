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
          nonRecursiveRuleNameDefinition = new NonRecursiveRuleNameDefinition(parts);

    return nonRecursiveRuleNameDefinition;
  }
}

module.exports = NonRecursiveRuleNameDefinition;
