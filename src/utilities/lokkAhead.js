"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function isDefinitionLookAhead(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartLookAhead = isPartLookAhead(firstPart),
        definitionLookAhead = firstPartLookAhead; ///

  return definitionLookAhead;
}

function isPartLookAhead(part) {
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
