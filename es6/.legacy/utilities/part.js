'use strict';

const parsers = require('occam-parsers');

const { partTypes } = parsers,
      { RuleNamePartType, OptionalPartPartType, GroupOfPartsPartType, ChoiceOfPartsPartType, OneOrMorePartsPartType, ZeroOrMorePartsPartType } = partTypes,
      partPartTypes = [
        OptionalPartPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType
      ],
      partsPartTypes = [
        GroupOfPartsPartType,
        ChoiceOfPartsPartType
      ];

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
          typeRuleNamePartType = (type === RuleNamePartType),
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
            typePartPartType = partPartTypes.includes(type),
            typePartsPartType = partsPartTypes.includes(type);

      if (false) {
        ///
      } else if (typePartPartType) {
        const partPart = nonTerminalPart, ///
              part = partPart.getPart();

        partRuleNamesFromPart(part, partRuleNames);
      } else if (typePartsPartType) {
        const partsPart = nonTerminalPart, ///
              parts = partsPart.getParts();

        partRuleNamesFromParts(parts, partRuleNames);
      }
    }
  }
}
