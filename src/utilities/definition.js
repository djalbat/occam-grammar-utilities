"use strict";

import { partTypes } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { recursiveRuleNamesFromPart, leftRecursiveRuleNamesFromPart } from "../utilities/recursivePart";

const { first } = arrayUtilities,
      { RuleNamePartType } = partTypes;

export function isDefinitionUnary(definition) {
  const parts = definition.getParts(),
        partsLength = parts.length,
        definitionUnary = (partsLength === 1);

  return definitionUnary;
}

export function isDefinitionComplex(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartType = firstPart.getType(),
        firstPartTypeRuleNamePartType = (firstPartType === RuleNamePartType),
        firstPartRuleNamePart = firstPartTypeRuleNamePartType,
        definitionComplex = !firstPartRuleNamePart;

  return definitionComplex;
}

export function isDefinitionLookAhead(definition) {
  let lookAhead = false;

  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartType = firstPart.getType(),
        firstPartTypeRuleNamePartType = (firstPartType === RuleNamePartType),
        firstPartRuleNamePart = firstPartTypeRuleNamePartType;  ///

  if (firstPartRuleNamePart) {
    const ruleNamePart = firstPart; ///

    lookAhead = ruleNamePart.isLookAhead();
  }

  return lookAhead;
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
