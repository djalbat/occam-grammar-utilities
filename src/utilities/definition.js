"use strict";

import { arrayUtilities } from "necessary";

import { isPartComplex, isPartLookAhead, isPartQualified } from "../utilities/part";
import { arePartsLeftRecursive, recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../utilities/parts";

const { first } = arrayUtilities;

export function isDefinitionComplex(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartComplex = isPartComplex(firstPart),
        definitionComplex = firstPartComplex; ///

  return definitionComplex;
}

export function isDefinitionLookAhead(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartLookAhead = isPartLookAhead(firstPart),
        definitionLookAhead = firstPartLookAhead; ///

  return definitionLookAhead;
}

export function isDefinitionQualified(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartQualified = isPartQualified(firstPart),
        definitionQualified = firstPartQualified; ///

  return definitionQualified;
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
