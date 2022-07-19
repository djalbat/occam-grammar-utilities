"use strict";

import { arrayUtilities } from "necessary";

import { isPartComplex } from "../utilities/part";
import { arePartsRecursive, arePartsLeftRecursive, recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../utilities/parts";

const { first } = arrayUtilities;

export function isDefinitionComplex(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartComplex = isPartComplex(firstPart),
        definitionComplex = firstPartComplex; ///

  return definitionComplex;
}

export function isDefinitionRecursive(definition) {
  const parts = definition.getParts(),
        partsRecursive = arePartsRecursive(parts),
        definitionRecursive = partsRecursive; ///

  return definitionRecursive;
}

export function isDefinitionLeftRecursive(definition) {
  const parts = definition.getParts(),
        partsLeftRecursive = arePartsLeftRecursive(parts),
        definitionLeftRecursive = partsLeftRecursive; ///

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
