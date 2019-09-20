'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities;

class RuleNameDefinition extends Definition {
  static fromRuleName(ruleName) {
    const ruleNamePart = ruleNamePartFromRuleName(ruleName),
          parts = [
            ruleNamePart
          ],
          nonRecursiveRuleNameDefinition = new RuleNameDefinition(parts);

    return nonRecursiveRuleNameDefinition;
  }
}

module.exports = RuleNameDefinition;
