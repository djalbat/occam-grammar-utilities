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
          nonRecursiveDefinition = new RuleNameDefinition(parts);

    return nonRecursiveDefinition;
  }
}

module.exports = RuleNameDefinition;
