"use strict";

import { arrayUtilities } from "necessary";

import { recursiveRuleNamesFromPart, leftRecursiveRuleNamesFromPart } from "../utilities/part";

const { first } = arrayUtilities;

export function arePartsEqual(parts) {
  const firstPart = first(parts),
        firstPartString = firstPart.asString(),
        partsEqual = parts.every((part) => {
          const partString = part.asString(),
                partStringFirstPartString = (partString === firstPartString);

          if (partStringFirstPartString) {
            return true;
          }
        });

  return partsEqual;
}

export function arePartsLeftRecursive(parts) {
  const leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
        leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
        partsLeftRecursive = (leftRecursiveRuleNamesLength > 0);

  return partsLeftRecursive;
}

export function recursiveRuleNamesFromParts(parts, recursiveRuleNames = []) {
  parts.forEach((part) => {
    recursiveRuleNamesFromPart(part, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

export function leftRecursiveRuleNamesFromParts(parts, leftRecursiveRuleNames = []) {
  const firstPart = first(parts),
        part = firstPart; ///

  leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}
