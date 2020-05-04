"use strict";

const parsers = require("occam-parsers");

const { Parts } = parsers,
      { RuleNamePart, ZeroOrMorePartsPart } = Parts;

function ruleNamePartFromRuleName(ruleName, lookAhead = false) {
  const ruleNamePart = new RuleNamePart(ruleName, lookAhead);

  return ruleNamePart;
}

function zeroOrMoreRuleNamePartPartFromRuleName(ruleName) {
  const ruleNamePart = ruleNamePartFromRuleName(ruleName),
        zeroOrMoreRuleNamePartPart = new ZeroOrMorePartsPart(ruleNamePart);

  return zeroOrMoreRuleNamePartPart;
}

module.exports = {
  ruleNamePartFromRuleName,
  zeroOrMoreRuleNamePartPartFromRuleName
};
