"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";
import { recursiveRuleNamesFromPart, leftRecursiveRuleNamesFromPart } from "./part";

const { first } = arrayUtilities,
      { SequenceOfPartsPart, ZeroOrMorePartsPart } = Parts;

export function cloneParts(parts) {
  parts = parts.map((part) => part.clone());  ///

  return parts;
}

export function arePartsRecursive(parts) {
  const recursiveRuleNames = recursiveRuleNamesFromParts(parts),
        recursiveRuleNamesLength = recursiveRuleNames.length,
        partsRecursive = (recursiveRuleNamesLength > 0);

  return partsRecursive;
}

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

export function arePartsLeftRecursive(parts) {
  const leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
        leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
        partsLeftRecursive = (leftRecursiveRuleNamesLength > 0);

  return partsLeftRecursive;
}

export function repeatedPartFromParts(parts) {
  const singlePart = singlePartFromParts(parts),
        part = singlePart,
        zeroOrMorePartsPart = new ZeroOrMorePartsPart(part),
        repeatedPart = zeroOrMorePartsPart;  ///

  return repeatedPart;
}

export function recursiveRuleNamesFromParts(parts) {
  const recursiveRuleNames = [];

  parts.forEach((part) => recursiveRuleNamesFromPart(part, recursiveRuleNames));

  return recursiveRuleNames;
}

export function leftRecursiveRuleNamesFromParts(parts) {
  const leftRecursiveRuleNames = [],
        firstPart = first(parts),
        part = firstPart; ///

  leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}
