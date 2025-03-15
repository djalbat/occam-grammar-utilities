"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function isDefinitionCallAhead(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartCallAhead = isPartCallAhead(firstPart),
        definitionCallAhead = firstPartCallAhead; ///

  return definitionCallAhead;
}

function isPartCallAhead(part) {
  let partCallAhead = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          nonTerminalPartRuleNamePart = nonTerminalPart.isRuleNamePart();

    if (nonTerminalPartRuleNamePart) {
      const ruleNamePart = nonTerminalPart, ///
            callAhead = ruleNamePart.isCallAhead();

      partCallAhead = callAhead;  ///
    }
  }

  return partCallAhead;
}
