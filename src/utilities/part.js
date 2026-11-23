"use strict";

import { Parts, partTypes, PartChoice } from "occam-parsers";

const { RuleNamePartType } = partTypes,
      { EpsilonPart, RuleNamePart, ChoiceOfPartsPart, OptionalPartPart, OneOrMorePartsPart, ZeroOrMorePartsPart } = Parts;

export function isPartSimplePart(part) {
  let partSimplePart = false;

  const partTerminalPart = part.isTerminalPart();

  if (partTerminalPart) {
    partSimplePart = true;
  } else {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    if (type === RuleNamePartType) {
      partSimplePart = true;
    }
  }

  return partSimplePart;
}

export function isPartRuleNamePart(part) {
  let partRuleNamePart = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          nonTerminalPartRuleNamePart = nonTerminalPart.isRuleNamePart();

    if (nonTerminalPartRuleNamePart) {
      partRuleNamePart = true;
    }
  }

  return partRuleNamePart;
}

export function epsilonPartFromNothing() {
  const epsilonPart = EpsilonPart.fromNothing();

  return epsilonPart;
}

export function ruleNamePartFromRuleName(ruleName) {
  const ruleNamePart = RuleNamePart.fromRuleName(ruleName);

  return ruleNamePart;
}

export function optionalPartPartFromPart(part) {
  const optionalPartPart = OptionalPartPart.fromPart(part);

  return optionalPartPart;
}

export function oneOrMorePartsPartFromPart(part) {
  const oneOrMorePartsPart = OneOrMorePartsPart.fromPart(part);

  return oneOrMorePartsPart;
}

export function zeroOrMorePartsPartFromPart(part) {
  const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromPart(part);

  return zeroOrMorePartsPart;
}

export function choiceOfPartsPartFromParts(parts) {
  const partChoices = parts.map((part) => {
          const partChoice = PartChoice.fromPart(part);

          return partChoice;
        }),
        choiceOfPartsPart = ChoiceOfPartsPart.fromPartChoices(partChoices);

  return choiceOfPartsPart;
}
