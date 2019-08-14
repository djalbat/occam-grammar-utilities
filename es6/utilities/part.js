'use strict';

const parsers = require('occam-parsers');

const { Parts, partTypes } = parsers,
      { RuleNamePart } = Parts,
      { RuleNamePartType } = partTypes;

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

function ruleNamePartFromRuleName(ruleName, noWhitespace = false) {
  const ruleNamePart = new RuleNamePart(ruleName, noWhitespace);

  return ruleNamePart;
}

module.exports = {
  isPartRuleNamePart,
  ruleNamePartFromRuleName
};
