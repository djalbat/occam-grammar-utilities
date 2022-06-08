"use strict";

import { arrayUtilities } from "necessary";
import { Parts, partTypes } from "occam-parsers";

import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

const { first } = arrayUtilities,
      { RuleNamePart, OptionalPartPart, ZeroOrMorePartsPart } = Parts,
      { RuleNamePartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        SequenceOfPartsPartType,
        ZeroOrMorePartsPartType } = partTypes;

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

export function reducedPartFromRuleName(ruleName) {
  const ruleNamePart = new RuleNamePart(ruleName),
        part = ruleNamePart,  ///
        reducedPart = reducedPartFromPart(part);

  return reducedPart;
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

function reducedPartFromPart(part) {
  let reducedPart;

  const nonTerminalPart = part, ///
        type = nonTerminalPart.getType();

  switch (type) {
    case RuleNamePartType: {
      const ruleNamePart = nonTerminalPart,  ///
            ruleName = ruleNamePart.getRuleName(),
            lookAhead = ruleNamePart.isLookAhead(),
            reducedRuleName = reducedRuleNameFromRuleName(ruleName),
            reducedRuleNamePart = new RuleNamePart(reducedRuleName, lookAhead);

      reducedPart = reducedRuleNamePart;  ///

      break;
    }

    case OptionalPartPartType: {
      const optionalPartPart = nonTerminalPart, ///
            part = optionalPartPart.getPart();

      reducedPart = reducedPartFromPart(part);

      const reducedOptionalPartPart = new OptionalPartPart(reducedPart);

      reducedPart = reducedOptionalPartPart;  ///

      break;
    }

    case OneOrMorePartsPartType: {
      const oneOrMorePartsPart = nonTerminalPart, ///
            part = oneOrMorePartsPart.getPart();

      reducedPart = reducedPartFromPart(part);

      const reducedOneOrMorePartsPart = new OneOrMorePartsPart(reducedPart);

      reducedPart = reducedOneOrMorePartsPart;  ///

      break;
    }

    case ZeroOrMorePartsPartType: {
      const zeroOrMorePartsPart = nonTerminalPart, ///
            part = zeroOrMorePartsPart.getPart();

      reducedPart = reducedPartFromPart(part);

      const reducedZeroOrMorePartsPart = new ZeroOrMorePartsPart(reducedPart);

      reducedPart = reducedZeroOrMorePartsPart;  ///

      break;
    }
  }

  return reducedPart;
}
