"use strict";

import { arrayUtilities } from "necessary";
import { Parts, partTypes } from "occam-parsers";

const { first } = arrayUtilities,
      { RuleNamePartType } = partTypes,
      { RuleNamePart, ZeroOrMorePartsPart } = Parts;

export function isDefinitionsFirstPartNakedRuleNamePart(definition) {
  const parts = definition.getParts(),
    firstPart = first(parts),
    firstPartNakedRuleNamePart = isPartNakedRuleNamePart(firstPart),
    definitionsFirstPartNakedRuleNamePart = firstPartNakedRuleNamePart;  ///

  return definitionsFirstPartNakedRuleNamePart;
}

export function zeroOrMorePartsPartFromPart(part) {
  const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromPart(part);

  return zeroOrMorePartsPart;
}

export function ruleNamePartFromRuleName(ruleName) {
  const ruleNamePart = RuleNamePart.fromRuleName(ruleName);

  return ruleNamePart;
}

function isPartNakedRuleNamePart(part) {
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
