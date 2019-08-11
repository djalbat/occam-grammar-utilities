'use strict';

const parsers = require('occam-parsers');

const { partTypes } = parsers,
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

module.exports = {
  isPartRuleNamePart
};
