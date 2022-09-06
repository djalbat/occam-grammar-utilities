"use strict";

import { Parts, partTypes } from "occam-parsers";

import { first } from "../utilities/array";
import { directlyReducedRuleNameFromRuleName } from "../utilities/ruleName";

const { RuleNamePart, OptionalPartPart, OneOrMorePartsPart, ZeroOrMorePartsPart } = Parts,
      { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        SequenceOfPartsPartType,
        ZeroOrMorePartsPartType } = partTypes;

export function matchParts(partA, partB) {
  const partAString = partA.asString(),
        partBString = partB.asString(),
        matches = (partAString === partBString);

  return matches;
}

export function isPartUnary(part) {
  let partUnary = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case RuleNamePartType:
        partUnary = true;

        break;

      case OptionalPartPartType: {
        const optionalPartPart = nonTerminalPart, ///
              part = optionalPartPart.getPart();

        partUnary = isPartUnary(part);

        break;
      }

      case OneOrMorePartsPartType: {
        const oneOrMorePartsPart = nonTerminalPart,  ///
              part = oneOrMorePartsPart.getPart();

        partUnary = isPartUnary(part);

        break;
      }

      case ZeroOrMorePartsPartType: {
        const zeroOrMorePartsPart = nonTerminalPart, ///
              part = zeroOrMorePartsPart.getPart();  ///

        partUnary = isPartUnary(part);

        break;
      }

      case ChoiceOfPartsPartType:
      case SequenceOfPartsPartType:
        partUnary = false;

        break;
    }
  }

  return partUnary;
}

export function isPartComplex(part) {
  let partComplex = true;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case RuleNamePartType:
        partComplex = false;

        break;

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

      case ChoiceOfPartsPartType:
      case SequenceOfPartsPartType:
        partComplex = true;

        break;
    }
  }

  return partComplex;
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

      case ChoiceOfPartsPartType: {
        const choiceOfPartsPart = nonTerminalPart, ///
              parts = choiceOfPartsPart.getParts();

        parts.forEach((part) => recursiveRuleNamesFromPart(part, recursiveRuleNames));

        break;
      }

      case SequenceOfPartsPartType: {
        const sequenceOfPartsPart = nonTerminalPart,  ///
              parts = sequenceOfPartsPart.getParts();

        parts.forEach((part) => recursiveRuleNamesFromPart(part, recursiveRuleNames));

        break;
      }
    }
  }
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

      case ChoiceOfPartsPartType: {
        const choiceOfPartsPart = nonTerminalPart, ///
              parts = choiceOfPartsPart.getParts();

        parts.forEach((part) => leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames));

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
    }
  }
}

