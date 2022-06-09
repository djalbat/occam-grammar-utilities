"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities,
      { ZeroOrMorePartsPart, SequenceOfPartsPart } = Parts;

export function singlePartFromParts(parts) {
  let singlePart;

  const partsLength = parts.length;

  if (partsLength === 1) {
    const firstPart = first(parts);

    singlePart = firstPart; ///
  } else {
    const sequenceOfPartsPart = new SequenceOfPartsPart(parts);

    singlePart = sequenceOfPartsPart; ///
  }

  return singlePart;
}

export function repeatedPartFromParts(parts) {
  const singlePart = singlePartFromParts(parts),
        part = singlePart,
        zeroOrMorePartsPart = new ZeroOrMorePartsPart(part),
        repeatedPart = zeroOrMorePartsPart;  ///

  return repeatedPart;
}
