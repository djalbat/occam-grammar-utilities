'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities;

class NonRecursiveRuleNameDefinition extends Definition {
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
