'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part');

const { Parts, Definition } = parsers,
      { RuleNamePart } = Parts,
      { ruleNamePartFromRuleName } = partUtilities;

class RecursiveRuleNameDefinition extends Definition {
  static fromNonRecursiveRuleAndRecursiveRule(nonRecursiveRule, recursiveRule) {
    const lookAhead = recursiveRule.isLookAhead(),
          noWhitespace = recursiveRule.hasNoWhitespace(),
          recursiveRuleName = recursiveRule.getName(),
          nonRecursiveRuleName = nonRecursiveRule.getName(),
          recursiveRuleNamePart = ruleNamePartFromRuleName(recursiveRuleName),
          nonRecursiveRuleNamePart = new RuleNamePart(nonRecursiveRuleName, noWhitespace, lookAhead),
          parts = [
            nonRecursiveRuleNamePart,
            recursiveRuleNamePart
          ],
          recursiveRuleNameDefinition = new Definition(parts);

    return recursiveRuleNameDefinition;
  }
}

module.exports = RecursiveRuleNameDefinition;
