"use strict";

import { first } from "../utilities/array";
import { isPartComplex } from "../utilities/part";
import { arePartsRecursive,
         arePartsLeftRecursive,
         recursiveRuleNamesFromParts,
         arePartsDirectlyLeftRecursive,
         leftRecursiveRuleNamesFromParts } from "../utilities/parts";

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

export function recursiveRuleNamesFromDefinition(definition, recursiveRuleNames = []) {
  const parts = definition.getParts();

  recursiveRuleNamesFromParts(parts, recursiveRuleNames);

  return recursiveRuleNames;
}

export function isDefinitionDirectlyLeftRecursive(definition, leftRecursiveRuleName) {
  const parts = definition.getParts(),
        partsDirectlyLeftRecursive = arePartsDirectlyLeftRecursive(parts, leftRecursiveRuleName),
        definitionDirectlyLeftRecursive = partsDirectlyLeftRecursive; ///

  return definitionDirectlyLeftRecursive;
}

export function leftRecursiveRuleNamesFromDefinition(definition, leftRecursiveRuleNames = []) {
  const parts = definition.getParts();

  leftRecursiveRuleNamesFromParts(parts, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}
