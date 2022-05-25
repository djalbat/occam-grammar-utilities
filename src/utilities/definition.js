"use strict";

import { arrayUtilities } from "necessary";

import { isPartComplex, isPartLookAhead } from "../utilities/part";
import { recursiveRuleNamesFromPart, leftRecursiveRuleNamesFromPart } from "../utilities/recursivePart";

const { first } = arrayUtilities;

export function isDefinitionUnary(definition) {
  const parts = definition.getParts(),
        partsLength = parts.length,
        definitionUnary = (partsLength === 1);

  return definitionUnary;
}

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

export function isDefinitionLeftRecursive(definition) {
  const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
        leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
        definitionLeftRecursive = (leftRecursiveRuleNamesLength > 0);

  return definitionLeftRecursive;
}

export function recursiveRuleNamesFromDefinition(definition) {
  const recursiveRuleNames = [],
        parts = definition.getParts();

  parts.forEach((part) => recursiveRuleNamesFromPart(part, recursiveRuleNames));

  return recursiveRuleNames;
}

export function leftRecursiveRuleNamesFromDefinition(definition) {
  const leftRecursiveRuleNames = [],
        parts = definition.getParts(),
        firstPart = first(parts),
        part = firstPart; ///

  leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}
