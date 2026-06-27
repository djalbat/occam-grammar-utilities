"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function isDefinitionContinuation(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartContinuation = isPartContinuation(firstPart),
        definitionContinuation = firstPartContinuation; ///

  return definitionContinuation;
}

function isPartContinuation(part) {
  let partContinuation = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          nonTerminalPartRuleNamePart = nonTerminalPart.isRuleNamePart();

    if (nonTerminalPartRuleNamePart) {
      const ruleNamePart = nonTerminalPart, ///
            continuation = ruleNamePart.isContinuation();

      partContinuation = continuation;  ///
    }
  }

  return partContinuation;
}
