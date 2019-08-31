'use strict';

const parsers = require('occam-parsers');

const { Parts, partTypes } = parsers,
      { RuleNamePartType } = partTypes,
      { OptionalPartPart, RuleNamePart } = Parts;

function ruleNameFromPart(part) {
  let ruleName = null;

  const partRuleNamePart = isPartRuleNamePart(part);

  if (partRuleNamePart) {
    const ruleNamePart = part;  ///

    ruleName = ruleNamePart.getRuleName();
  }

  return ruleName;
}

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
  ruleNameFromPart,
  isPartRuleNamePart,
  ruleNamePartFromRuleName,
  optionalRuleNamePartPartFromRuleName
};
