'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array');

const { first } = arrayUtilities;

const { partTypes } = parsers,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes;

function isPartRecursive(part) {
  const ruleNames = rulesNamesFromPart(part),
        ruleNamesLength = ruleNames.length,
        partRecursive = (ruleNamesLength > 0);

  return partRecursive;
}

function ruleNamesFromPart(part, ruleNames = []) {
  let partRecursive = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const type = part.getType();

    switch (type) {
      case RuleNamePartType :
        const ruleNamePart = part,  ///
              ruleName = ruleNamePart.getRuleName(),
              ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

        if (!ruleNamesIncludesRuleName) {
          ruleNames.push(ruleName);
        }
        break;

      case OptionalPartPartType :
      case OneOrMorePartsPartType :
      case ZeroOrMorePartsPartType :
        part = part.getPart();  ///

        ruleNamesFromPart(part, ruleNames);
        break;

      case GroupOfPartsPartType :
      case ChoiceOfPartsPartType : {
          const parts = part.getParts();

          partRecursive = parts.some((part) => {
            ruleNamesFromPart(part, ruleNames);
          });
        }
        break;
    }
  }

  return partRecursive;
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

      case GroupOfPartsPartType : {
          const parts = part.getParts(),
                firstPart = first(parts),
                part = firstPart; ///

          leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);
        }
        break;

      case ChoiceOfPartsPartType : {
          const parts = part.getParts();

          parts.some((part) => {
            leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);

            if (leftRecursiveRuleName !== null) {
              return true;
            }
          });
        }
        break;
    }
  }

  return leftRecursiveRuleName;
}

module.exports = {
  isPartRecursive,
  ruleNamesFromPart,
  isPartLeftRecursive,
  leftRecursiveRuleNameFromPart
};

// function ruleNamePartFromRuleName(ruleName, noWhitespace = false, lookAhead = false) {
//   const ruleNamePart = new RuleNamePart(ruleName, noWhitespace, lookAhead);
//
//   return ruleNamePart;
// }
//
// function optionalRuleNamePartPartFromRuleName(ruleName) {
//   const ruleNamePart = ruleNamePartFromRuleName(ruleName),
//       optionalRuleNamePartPart = new OptionalPartPart(ruleNamePart);
//
//   return optionalRuleNamePartPart;
// }
