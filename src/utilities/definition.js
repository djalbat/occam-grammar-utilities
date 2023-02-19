"use strict";

import { tail, first } from "../utilities/array";
import { isPartUnary, isPartComplex } from "../utilities/part";
import { arePartsRecursive, arePartsLeftRecursive, arePartsEffectivelyOptional, recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../utilities/parts";

export function isDefinitionUnary(definition, context) {
  let definitionUnary = false;

  const parts = definition.getParts(),
        partsLength = parts.length;

  if (partsLength === 1) {
    const firstPart = first(parts),
          part = firstPart, ///
          partUnary = isPartUnary(part);

    definitionUnary = partUnary;  ///
  } else {
    const partsTail = tail(parts),
          ruleNames = [],
          partsTailEffectivelyOptional = arePartsEffectivelyOptional(partsTail, ruleNames, context);

    definitionUnary = partsTailEffectivelyOptional;
  }

  return definitionUnary;
}

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
