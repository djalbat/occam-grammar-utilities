"use strict";

import { Parts, partTypes } from "occam-parsers";

const { RuleNamePart } = Parts,
      { RuleNamePartType } = partTypes;

export function ruleNamePartFromRuleName(ruleName) {
  const ruleNamePart = RuleNamePart.fromRuleName(ruleName);

  return ruleNamePart;
}

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
