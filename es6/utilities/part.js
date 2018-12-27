'use strict';

const parsers = require('occam-parsers');

const typeUtilities = require('../utilities/type');

const { Parts } = parsers,
      { typeFromPart, typesFromParts } = typeUtilities,
      { ChoiceOfPartsPart, GroupOfPartsPart, OneOrMorePartsPart, OptionalPartPart, ZeroOrMorePartsPart, RuleNamePart } = Parts,
      partTypes = typesFromParts([ OptionalPartPart, OneOrMorePartsPart, ZeroOrMorePartsPart ]),
      partsTypes = typesFromParts([ GroupOfPartsPart, ChoiceOfPartsPart ]),
      ruleNamePartType = typeFromPart(RuleNamePart);

function partRuleNamesFromParts(parts, partRuleNames) {
  parts.forEach(function(part) {
    partRuleNamesFromPart(part, partRuleNames);
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
  partRuleNamesFromParts,
  isPartRuleNamePart
};

function partRuleNamesFromPart(part, partRuleNames) {
  const partRuleNamePart = isPartRuleNamePart(part);

  if (partRuleNamePart) {
    const ruleNamePart = part,
          ruleNamePartRuleName = ruleNamePart.getRuleName(),
          ruleName = ruleNamePartRuleName;  ///

    partRuleNames.push(ruleName);
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

        partRuleNamesFromPart(part, partRuleNames);
      } else if (typePartsType) {
        const partsPart = nonTerminalPart, ///
              parts = partsPart.getParts();

        partRuleNamesFromParts(parts, partRuleNames);
      }
    }
  }
}
