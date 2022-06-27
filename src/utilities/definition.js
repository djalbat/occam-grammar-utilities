"use strict";

import { arrayUtilities } from "necessary";

import { cloneParts } from "../utilities/parts";
import { isPartComplex } from "../utilities/part";
import { recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../utilities/parts";

const { first, tail } = arrayUtilities;

export function cloneDefinitionParts(definition) {
  let clonedParts = definition.getParts();

  clonedParts = cloneParts(clonedParts);  //

  return clonedParts;
}

export function mergeDefinitionParts(definitionA, definitionB) {
  const clonedPartsA = cloneDefinitionParts(definitionA),
        clonedPartsB = cloneDefinitionParts(definitionB),
        clonedPartsBTail = tail(clonedPartsB),
        parts = [
          ...clonedPartsA,
          ...clonedPartsBTail
        ];

  return parts;
}

export function isDefinitionComplex(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartComplex = isPartComplex(firstPart),
        definitionComplex = firstPartComplex; ///

  return definitionComplex;
}

export function isDefinitionRecursive(definition) {
  const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
        recursiveRuleNamesLength = recursiveRuleNames.length,
        definitionRecursive = (recursiveRuleNamesLength > 0);

  return definitionRecursive;
}

export function isDefinitionLeftRecursive(definition) {
  const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
        leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
        definitionLeftRecursive = (leftRecursiveRuleNamesLength > 0);

  return definitionLeftRecursive;
}

export function recursiveRuleNamesFromDefinition(definition) {
  const parts = definition.getParts(),
        recursiveRuleNames = recursiveRuleNamesFromParts(parts);

  return recursiveRuleNames;
}

export function leftRecursiveRuleNamesFromDefinition(definition) {
  const parts = definition.getParts(),
        leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts);

  return leftRecursiveRuleNames;
}
