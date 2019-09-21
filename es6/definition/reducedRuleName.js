'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { reducedRuleNameFromRuleName } = ruleNameUtilities;

class ReducedRuleNameDefinition extends Definition {
  static fromRuleName(ruleName) {
    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          parts = [
            reducedRuleNamePart
          ],
          reducedRuleNameDefinition = new ReducedRuleNameDefinition(parts);

    return reducedRuleNameDefinition;
  }

  static fromLeftRecursiveRuleName(leftRecursiveRuleName) {
    const ruleName = leftRecursiveRuleName, ///
          reducedRuleNameDefinition = ReducedRuleNameDefinition.fromRuleName(ruleName);

    return reducedRuleNameDefinition;
  }
}

module.exports = ReducedRuleNameDefinition;
