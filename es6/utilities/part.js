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
  const recursiveRuleNames = recursiveRuleNamesFromPart(part),
        recursiveRuleNamesLength = recursiveRuleNames.length,
        partRecursive = (recursiveRuleNamesLength > 0);

  return partRecursive;
}

function isPartLeftRecursive(part) {
  const leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part),
        partLeftRecursive = (leftRecursiveRuleName !== null);

  return partLeftRecursive;
}

function recursiveRuleNamesFromPart(part, recursiveRuleNames = []) {
  let partRecursive = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const type = part.getType();

    switch (type) {
      case RuleNamePartType :
        const ruleNamePart = part,  ///
              ruleName = ruleNamePart.getRuleName(),
              recursiveRuleNamesIncludesRuleName = recursiveRuleNames.includes(ruleName);

        if (!recursiveRuleNamesIncludesRuleName) {
          recursiveRuleNames.push(ruleName);
        }
        break;

      case OptionalPartPartType :
      case OneOrMorePartsPartType :
      case ZeroOrMorePartsPartType :
        part = part.getPart();  ///

        recursiveRuleNamesFromPart(part, recursiveRuleNames);
        break;

      case GroupOfPartsPartType :
      case ChoiceOfPartsPartType : {
          const parts = part.getParts();

          partRecursive = parts.some((part) => {
            recursiveRuleNamesFromPart(part, ruleNames);
          });
        }
        break;
    }
  }

  return partRecursive;
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
  isPartLeftRecursive,
  recursiveRuleNamesFromPart,
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
