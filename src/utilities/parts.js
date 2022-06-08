"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities,
      { ZeroOrMorePartsPart } = Parts;

export function repeatedPartFromParts(parts) {
  let repeatedPart;

  const partsLength = parts.length;

  if (partsLength === 1) {
    const firstPart = first(parts),
          part = firstPart, ///
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

    repeatedPart = zeroOrMorePartsPart;  ///
  } else {
    const sequenceOfPartsPart = new SequenceOfPartsPart(parts),
          zeroOrMoreSequenceOfPartsPart = new ZeroOrMorePartsPart(sequenceOfPartsPart);

    repeatedPart = zeroOrMoreSequenceOfPartsPart;  ///
  }

  return repeatedPart;
}
