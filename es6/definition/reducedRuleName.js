'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities;

class ReducedRuleNameDefinition extends Definition {
  static fromReducedRuleName(reducedRuleName) {
    const reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
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
