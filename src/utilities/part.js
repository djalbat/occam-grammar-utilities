"use strict";

import { Parts, partTypes } from "occam-parsers";

const { RuleNamePartType } = partTypes,
      { RuleNamePart, OneOrMorePartsPart, ZeroOrMorePartsPart } = Parts;

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

export function ruleNamePartFromRuleName(ruleName) {
  const ruleNamePart = RuleNamePart.fromRuleName(ruleName);

  return ruleNamePart;
}

export function oneOrMorePartsPartFromPart(part) {
  const oneOrMorePartsPart = OneOrMorePartsPart.fromPart(part);

  return oneOrMorePartsPart;
}

export function zeroOrMorePartsPartFromPart(part) {
  const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromPart(part);

  return zeroOrMorePartsPart;
}
