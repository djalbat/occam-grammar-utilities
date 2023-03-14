"use strict";

import { Definition } from "occam-parsers";

import { tail, first } from "../utilities/array";
import { isPartUnary, isPartComplex } from "../utilities/part";
import { arePartsRecursive,
         arePartsLeftRecursive,
         arePartsEffectivelyOptional,
         recursiveRuleNamesFromParts,
         arePartsDirectlyLeftRecursive,
         leftRecursiveRuleNamesFromParts } from "../utilities/parts";

export function cloneDefinition(definition) {
  let parts = definitinon.getParts();

  parts = cloenParts(parts);  ///

  definition = new Definition(parts);

  return definition;
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

export function isDefinitionEffectivelyUnary(definition, context) {
  let definitionEffectivelyUnary = false;

  const parts = definition.getParts(),
        partsLength = parts.length;

  if (partsLength === 1) {
    const firstPart = first(parts),
          part = firstPart, ///
          partUnary = isPartUnary(part);

    definitionEffectivelyUnary = partUnary;  ///
  } else {
    const partsTail = tail(parts),
          ruleNames = [],
          partsTailEffectivelyOptional = arePartsEffectivelyOptional(partsTail, ruleNames, context);

    definitionEffectivelyUnary = partsTailEffectivelyOptional;
  }

  return definitionEffectivelyUnary;
}

export function recursiveRuleNamesFromDefinition(definition) {
  const parts = definition.getParts(),
        recursiveRuleNames = recursiveRuleNamesFromParts(parts);

  return recursiveRuleNames;
}

export function isDefinitionDirectlyLeftRecursive(definition, ruleName) {
  const parts = definition.getParts(),
        partsDirectlyLeftRecursive = arePartsDirectlyLeftRecursive(parts, ruleName),
        definitionDirectlyLeftRecursive = partsDirectlyLeftRecursive; ///

  return definitionDirectlyLeftRecursive;
}

export function leftRecursiveRuleNamesFromDefinition(definition) {
  const parts = definition.getParts(),
        leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts);

  return leftRecursiveRuleNames;
}
