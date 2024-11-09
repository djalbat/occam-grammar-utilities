"use strict";

import { partTypes } from "occam-parsers";
import { arrayUtilities } from "necessary";

const { OptionalPartPartType, OneOrMorePartsPartType, ZeroOrMorePartsPartType } = partTypes;

const { first } = arrayUtilities;

export function isPartQualified(part) {
  let partQualified = false;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case OptionalPartPartType:
      case OneOrMorePartsPartType:
      case ZeroOrMorePartsPartType: {
        partQualified = true;

        break;
      }
    }
  }

  return partQualified;
}


export function isDefinitionQualified(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartQualified = isPartQualified(firstPart),
        definitionQualified = firstPartQualified; ///

  return definitionQualified;
}
