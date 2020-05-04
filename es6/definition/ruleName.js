"use strict";

const parsers = require("occam-parsers");

const partUtilities = require("../utilities/part");

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities;

class RuleNameDefinition extends Definition {
  static fromRuleName(ruleName) {
    const ruleNamePart = ruleNamePartFromRuleName(ruleName),
          parts = [
            ruleNamePart
          ],
          ruleNameDefinition = new RuleNameDefinition(parts);

    return ruleNameDefinition;
  }
}

module.exports = RuleNameDefinition;
