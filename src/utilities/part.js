"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";
import { Parts, partTypes } from "occam-parsers";

import { directlyReducedRuleNameFromRuleName } from "../utilities/ruleName";

const { RuleNamePart, OptionalPartPart, OneOrMorePartsPart, ZeroOrMorePartsPart } = Parts,
      { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        SequenceOfPartsPartType,
        ZeroOrMorePartsPartType } = partTypes;

const { first } = arrayUtilities,
      { epsilon } = specialSymbols;

export function isPartEmpty(part) {
  const partString = part.asString(),
        partStringEpsilon = (partString === epsilon),
        partEmpty = partStringEpsilon;  ///

  return partEmpty;
}

export function isPartComplex(part) {
  let partComplex = true;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case RuleNamePartType: {
        partComplex = false;

        break;
      }

      case OptionalPartPartType: {
        const optionalPartPart = nonTerminalPart, ///
              part = optionalPartPart.getPart();

        partComplex = isPartComplex(part);

        break;
      }

      case OneOrMorePartsPartType: {
        const oneOrMorePartsPart = nonTerminalPart,  ///
              part = oneOrMorePartsPart.getPart();

        partComplex = isPartComplex(part);

        break;
      }

      case ZeroOrMorePartsPartType: {
        const zeroOrMorePartsPart = nonTerminalPart, ///
              part = zeroOrMorePartsPart.getPart();  ///

        partComplex = isPartComplex(part);

        break;
      }

      case SequenceOfPartsPartType:
      case ChoiceOfPartsPartType: {
        partComplex = true;

        break;
      }
    }
  }

  return partComplex;
}

export function isPartLookAhead(part) {
  let partLookAhead = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          nonTerminalPartRuleNamePart = nonTerminalPart.isRuleNamePart();

    if (nonTerminalPartRuleNamePart) {
      const ruleNamePart = nonTerminalPart, ///
            lookAhead = ruleNamePart.isLookAhead();

      partLookAhead = lookAhead;  ///
    }
  }

  return partLookAhead;
}

export function isPartQualified(part) {
  let partQualified = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case OptionalPartPartType:
      case OneOrMorePartsPartType:
      case ZeroOrMorePartsPartType: {
        partQualified = true;

        break;
      }
    }
  }

  return partQualified;
}

export function ruleNamePartFromRuleName(ruleName) {
  const ruleNamePart = new RuleNamePart(ruleName);

  return ruleNamePart;
}

export function recursiveRuleNamesFromPart(part, recursiveRuleNames) {
  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case RuleNamePartType: {
        const ruleNamePart = nonTerminalPart,  ///
              ruleName = ruleNamePart.getRuleName(),
              recursiveRuleNamesIncludesRuleName = recursiveRuleNames.includes(ruleName);

        if (!recursiveRuleNamesIncludesRuleName) {
          const recursiveRuleName = ruleName; ///

          recursiveRuleNames.push(recursiveRuleName);
        }

        break;
      }

      case OptionalPartPartType: {
        const optionalPartPart = nonTerminalPart, ///
              part = optionalPartPart.getPart();

        recursiveRuleNamesFromPart(part, recursiveRuleNames);

        break;
      }

      case OneOrMorePartsPartType: {
        const oneOrMorePartsPart = nonTerminalPart,  ///
              part = oneOrMorePartsPart.getPart();

        recursiveRuleNamesFromPart(part, recursiveRuleNames);

        break;
      }

      case ZeroOrMorePartsPartType: {
        const zeroOrMorePartsPart = nonTerminalPart, ///
              part = zeroOrMorePartsPart.getPart();  ///

        recursiveRuleNamesFromPart(part, recursiveRuleNames);

        break;
      }

      case SequenceOfPartsPartType: {
        const sequenceOfPartsPart = nonTerminalPart,  ///
              parts = sequenceOfPartsPart.getParts();

        parts.forEach((part) => recursiveRuleNamesFromPart(part, recursiveRuleNames));

        break;
      }

      case ChoiceOfPartsPartType: {
        const choiceOfPartsPart = nonTerminalPart, ///
              parts = choiceOfPartsPart.getParts();

        parts.forEach((part) => recursiveRuleNamesFromPart(part, recursiveRuleNames));

        break;
      }
    }
  }
}

export function zeroOrMorePartsPartFromPart(part) {
  const zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

  return zeroOrMorePartsPart;
}

export function directlyReducedPartFromPart(part) {
  let directlyReducedPart;

  const nonTerminalPart = part, ///
        type = nonTerminalPart.getType();

  switch (type) {
    case RuleNamePartType: {
      const ruleNamePart = nonTerminalPart,  ///
            ruleName = ruleNamePart.getRuleName(),
            lookAhead = ruleNamePart.isLookAhead(),
            directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
            directlyReducedRuleNamePart = new RuleNamePart(directlyReducedRuleName, lookAhead);

      directlyReducedPart = directlyReducedRuleNamePart;  ///

      break;
    }

    case OptionalPartPartType: {
      const optionalPartPart = nonTerminalPart, ///
            part = optionalPartPart.getPart();

      directlyReducedPart = directlyReducedPartFromPart(part);

      const directlyReducedOptionalPartPart = new OptionalPartPart(directlyReducedPart);

      directlyReducedPart = directlyReducedOptionalPartPart;  ///

      break;
    }

    case OneOrMorePartsPartType: {
      const oneOrMorePartsPart = nonTerminalPart, ///
            part = oneOrMorePartsPart.getPart();

      directlyReducedPart = directlyReducedPartFromPart(part);

      const directlyReducedOneOrMorePartsPart = new OneOrMorePartsPart(directlyReducedPart);

      directlyReducedPart = directlyReducedOneOrMorePartsPart;  ///

      break;
    }

    case ZeroOrMorePartsPartType: {
      const zeroOrMorePartsPart = nonTerminalPart, ///
            part = zeroOrMorePartsPart.getPart();

      directlyReducedPart = directlyReducedPartFromPart(part);

      const directlyReducedZeroOrMorePartsPart = new ZeroOrMorePartsPart(directlyReducedPart);

      directlyReducedPart = directlyReducedZeroOrMorePartsPart;  ///

      break;
    }
  }

  return directlyReducedPart;
}

export function leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames) {
  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case RuleNamePartType: {
        const ruleNamePart = nonTerminalPart,  ///
              ruleName = ruleNamePart.getRuleName(),
              leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

        if (!leftRecursiveRuleNamesIncludesRuleName) {
          const leftRecursiveRuleName = ruleName; ///

          leftRecursiveRuleNames.push(leftRecursiveRuleName);
        }

        break;
      }

      case OptionalPartPartType: {
        const optionalPartPart = nonTerminalPart, ///
              part = optionalPartPart.getPart();

        leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

        break;
      }

      case OneOrMorePartsPartType: {
        const oneOrMorePartsPart = nonTerminalPart,  ///
              part = oneOrMorePartsPart.getPart();

        leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

        break;
      }

      case ZeroOrMorePartsPartType: {
        const zeroOrMorePartsPart = nonTerminalPart, ///
              part = zeroOrMorePartsPart.getPart();

        leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

        break;
      }

      case SequenceOfPartsPartType: {
        const sequenceOfPartsPart = nonTerminalPart,  ///
              parts = sequenceOfPartsPart.getParts(),
              firstPart = first(parts),
              part = firstPart; ///

        leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

        break;
      }

      case ChoiceOfPartsPartType: {
        const choiceOfPartsPart = nonTerminalPart, ///
              parts = choiceOfPartsPart.getParts();

        parts.forEach((part) => leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames));

        break;
      }
    }
  }
}
