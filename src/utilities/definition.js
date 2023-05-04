"use strict";

import { arrayUtilities } from "necessary";

import { isPartComplex } from "../utilities/part";
import { arePartsLeftRecursive, recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../utilities/parts";

const { first } = arrayUtilities;

export function isDefinitionComplex(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartComplex = isPartComplex(firstPart),
        definitionComplex = firstPartComplex; ///

  return definitionComplex;
}

export function isDefinitionLeftRecursive(definition) {
  const parts = definition.getParts(),
        partsLeftRecursive = arePartsLeftRecursive(parts),
        definitionLeftRecursive = partsLeftRecursive; ///

  return definitionLeftRecursive;
}

export function recursiveRuleNamesFromDefinition(definition, recursiveRuleNames = []) {
  const parts = definition.getParts();

  recursiveRuleNamesFromParts(parts, recursiveRuleNames);

  return recursiveRuleNames;
}

export function leftRecursiveRuleNamesFromDefinition(definition, leftRecursiveRuleNames = []) {
  const parts = definition.getParts();

  leftRecursiveRuleNamesFromParts(parts, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}
