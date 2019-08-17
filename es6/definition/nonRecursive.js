'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities;

class NonRecursiveDefinition extends Definition {
  static fromNonRecursiveRule(nonRecursiveRule) {
    const nonRecursiveRuleName = nonRecursiveRule.getName(),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          parts = [
            nonRecursiveRuleNamePart
          ],
          nonRecursiveDefinition = new NonRecursiveDefinition(parts);

    return nonRecursiveDefinition;
  }

  static fromNonRecursiveRuleAndRightRecursiveRule(nonRecursiveRule, rightRecursiveRule) {
    const nonRecursiveRuleName = nonRecursiveRule.getName(),
          rightRecursiveRuleName = rightRecursiveRule.getName(),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
          parts = [
            nonRecursiveRuleNamePart,
            rightRecursiveRuleNamePart
          ],
          nonRecursiveDefinition = new NonRecursiveDefinition(parts);

    return nonRecursiveDefinition;
  }
}

module.exports = NonRecursiveDefinition;
