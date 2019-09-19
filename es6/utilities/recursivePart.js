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
      case RuleNamePartType : {
          const ruleNamePart = part,  ///
                ruleName = ruleNamePart.getRuleName(),
                recursiveRuleNamesIncludesRuleName = recursiveRuleNames.includes(ruleName);

          if (!recursiveRuleNamesIncludesRuleName) {
            const recursiveRuleName = ruleName; ///

            recursiveRuleNames.push(recursiveRuleName);
          }
        }
        break;

      case OptionalPartPartType : {
          const optionalPartPart = part;  ///

          part = optionalPartPart.getPart();

          recursiveRuleNamesFromPart(part, recursiveRuleNames);
        }
        break;

      case OneOrMorePartsPartType : {
          const oneOrMorePartsPart = part;  ///

          part = oneOrMorePartsPart.getPart();

          recursiveRuleNamesFromPart(part, recursiveRuleNames);
        }
        break;

      case ZeroOrMorePartsPartType : {
          const zeroOrMorePartsPart = part; ///

          part = zeroOrMorePartsPart.getPart();  ///

          recursiveRuleNamesFromPart(part, recursiveRuleNames);
        }
        break;

      case GroupOfPartsPartType : {
        const groupOfPartsPart = part,  ///
              parts = groupOfPartsPart.getParts();

          partRecursive = parts.some((part) => {
            recursiveRuleNamesFromPart(part, recursiveRuleNames);
          });
        }
        break;

      case ChoiceOfPartsPartType : {
          const choiceOfPartsPart = part, ///
                parts = choiceOfPartsPart.getParts();

          partRecursive = parts.some((part) => {
            recursiveRuleNamesFromPart(part, recursiveRuleNames);
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
      case RuleNamePartType : {
          const ruleNamePart = part,  ///
                ruleName = ruleNamePart.getRuleName();

          leftRecursiveRuleName = ruleName; ///
        }
        break;

      case OptionalPartPartType : {
          const optionalPartPart = part; ///

          part = optionalPartPart.getPart();

          leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);
        }
        break;

      case OneOrMorePartsPartType : {
          const oneOrMorePartsPart = part;  ///

          part = oneOrMorePartsPart.getPart();

          leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);
        }
        break;

      case ZeroOrMorePartsPartType : {
          const zeroOrMorePartsPart = part; ///

          part = zeroOrMorePartsPart.getPart();

          leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);
        }
        break;

      case GroupOfPartsPartType : {
          const groupOfPartsPart = part,  ///
                parts = groupOfPartsPart.getParts(),
                firstPart = first(parts);

          part = firstPart; ///

          leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);
        }
        break;

      case ChoiceOfPartsPartType : {
          const choiceOfPartsPart = part, ///
                parts = choiceOfPartsPart.getParts();

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
