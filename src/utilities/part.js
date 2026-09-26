"use strict";

import { Parts, partTypes } from "occam-parsers";

const { RuleNamePartType } = partTypes,
      { RuleNamePart, ZeroOrMorePartsPart } = Parts;

export function zeroOrMorePartsPartFromPart(part) {
  const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromPart(part);

  return zeroOrMorePartsPart;
}

export function ruleNamePartFromRuleName(ruleName) {
  const ruleNamePart = RuleNamePart.fromRuleName(ruleName);

  return ruleNamePart;
}

export function isPartNakedRuleNamePart(part) {
  let partNakedRuleNamePart = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    if (type === RuleNamePartType) {
      const ruleNamePart = nonTerminalPart, ///
            continuation = ruleNamePart.isContinuation();

      if (!continuation) {
        partNakedRuleNamePart = true;
      }
    }
  }

  return partNakedRuleNamePart;
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
