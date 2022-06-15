"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { isPartComplex, reducedPartFromRuleName } from "../utilities/part";
import { recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../utilities/parts";

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

export function reducedDefinitionFromRuleName(ruleName) {
  const reducedPart = reducedPartFromRuleName(ruleName),
        parts = [
            reducedPart
        ],
        definition = new Definition(parts),
        reducedDefinition = definition; ///

  return reducedDefinition;
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
