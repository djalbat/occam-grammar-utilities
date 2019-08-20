'use strict';

const parsers = require('occam-parsers');

const { Parts, partTypes } = parsers,
      { RuleNamePartType } = partTypes,
      { OptionalPartPart, RuleNamePart } = Parts;

function isPartRuleNamePart(part) {
  let partRuleNamePart = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part,  ///
          type = nonTerminalPart.getType(),
          typeRuleNamePartType = (type === RuleNamePartType),
          nonTerminalPartRuleNamePart = typeRuleNamePartType;  ///

    partRuleNamePart = nonTerminalPartRuleNamePart;  ///
  }

  return partRuleNamePart;
}

function ruleNamePartFromRuleName(ruleName, noWhitespace = false, lookAhead = false) {
  const ruleNamePart = new RuleNamePart(ruleName, noWhitespace, lookAhead);

  return ruleNamePart;
}

function optionalRuleNamePartPartFromRuleName(ruleName) {
  const ruleNamePart = ruleNamePartFromRuleName(ruleName),
        optionalRuleNamePartPart = new OptionalPartPart(ruleNamePart);

  return optionalRuleNamePartPart;
}

module.exports = {
  isPartRuleNamePart,
  ruleNamePartFromRuleName,
  optionalRuleNamePartPartFromRuleName
};
