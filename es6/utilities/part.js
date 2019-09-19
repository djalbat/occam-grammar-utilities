'use strict';

const parsers = require('occam-parsers');

const { Parts } = parsers,
      { RuleNamePart, OptionalPartPart } = Parts;

function ruleNamePartFromRuleName(ruleName, lookAhead = false) {
  const noWhitespace = false, ///
        ruleNamePart = new RuleNamePart(ruleName, noWhitespace, lookAhead);

  return ruleNamePart;
}

function optionalRuleNamePartPartFromRuleName(ruleName) {
  const ruleNamePart = ruleNamePartFromRuleName(ruleName),
        optionalRuleNamePartPart = new OptionalPartPart(ruleNamePart);

  return optionalRuleNamePartPart;
}

module.exports = {
  ruleNamePartFromRuleName,
  optionalRuleNamePartPartFromRuleName
};
