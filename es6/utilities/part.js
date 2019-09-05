'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array');

const { first } = arrayUtilities;

const { Parts, partTypes } = parsers,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
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

function isPartLeftRecursive(part) {
  const leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part),
        partLeftRecursive = (leftRecursiveRuleName !== null);

  return partLeftRecursive;
}

function leftRecursiveRuleNameFromPart(part) {
  let leftRecursiveRuleName = null;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const type = part.getType();

    switch (type) {
      case RuleNamePartType :
        const ruleNamePart = part,  ///
              ruleName = ruleNamePart.getRuleName();

        leftRecursiveRuleName = ruleName; ///
        break;

      case OptionalPartPartType :
      case OneOrMorePartsPartType :
      case ZeroOrMorePartsPartType :
        part = part.getPart();  ///

        leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);
        break;

      case GroupOfPartsPartType :
      case ChoiceOfPartsPartType :
        const parts = part.getParts(),
              firstPart = first(parts);

        part = firstPart; ///

        leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);
        break;
    }
  }

  return leftRecursiveRuleName;
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
  isPartLeftRecursive,
  ruleNamePartFromRuleName,
  leftRecursiveRuleNameFromPart,
  optionalRuleNamePartPartFromRuleName
};
