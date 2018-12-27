'use strict';

const parsers = require('occam-parsers');

const typeUtilities = require('../utilities/type');

const { Parts } = parsers,
      { typesFromParts } = typeUtilities,
      { ChoiceOfPartsPart, GroupOfPartsPart, OneOrMorePartsPart, OptionalPartPart, ZeroOrMorePartsPart, RuleNamePart } = Parts,
      partsTypes = typesFromParts([
        GroupOfPartsPart,
        ChoiceOfPartsPart
      ]),
      partTypes = typesFromParts([
        OptionalPartPart,
        OneOrMorePartsPart,
        ZeroOrMorePartsPart
      ]),
      { type } = RuleNamePart,
      ruleNamePartType = type;  ///

function ruleNamesFromParts(parts, ruleNames) {
  parts.forEach(function(part) {
    ruleNamesFromPart(part, ruleNames);
  });
}

function isPartRuleNamePart(part) {
  let partRuleNamePart = false;

  const partTerminalPart = part.isTerminalPart(),
        partNonTerminalPart = !partTerminalPart;

  if (partNonTerminalPart) {
    const nonTerminalPart = part,  ///
          type = nonTerminalPart.getType(),
          typeRuleNamePartType = (type === ruleNamePartType),
          nonTerminalPartRuleNamePart = typeRuleNamePartType;  ///

    partRuleNamePart = nonTerminalPartRuleNamePart;  ///
  }

  return partRuleNamePart;
}

module.exports = {
  ruleNamesFromParts,
  isPartRuleNamePart
};

function ruleNamesFromPart(part, ruleNames) {
  const partRuleNamePart = isPartRuleNamePart(part);

  if (partRuleNamePart) {
    const ruleNamePart = part,
          ruleName = ruleNamePart.getRuleName();

    ruleNames.push(ruleName);
  } else {
    const partTerminalPart = part.isTerminalPart(),
          partNonTerminalPart = !partTerminalPart;

    if (partNonTerminalPart) {
      const nonTerminalPart = part, ///
            type = nonTerminalPart.getType(),
            typePartType = partTypes.includes(type),
            typePartsType = partsTypes.includes(type);

      if (false) {

      } else if (typePartType) {
        const partPart = nonTerminalPart, ///
              part = partPart.getPart();

        ruleNamesFromPart(part, ruleNames);
      } else if (typePartsType) {
        const partsPart = nonTerminalPart, ///
              parts = partsPart.getParts();

        ruleNamesFromParts(parts, ruleNames);
      }
    }
  }
}
