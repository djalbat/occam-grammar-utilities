"use strict";

import { partTypes } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { recursiveRuleNamesFromPart, leftRecursiveRuleNamesFromPart } from "../utilities/recursivePart";

const { first } = arrayUtilities,
      { RuleNamePartType } = partTypes;

function isDefinitionUnary(definition) {
  const parts = definition.getParts(),
        partsLength = parts.length,
        definitionUnary = (partsLength === 1);

  return definitionUnary;
}

function isDefinitionComplex(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartType = firstPart.getType(),
        firstPartTypeRuleNamePartType = (firstPartType === RuleNamePartType),
        firstPartRuleNamePart = firstPartTypeRuleNamePartType,
        definitionComplex = !firstPartRuleNamePart;

  return definitionComplex;
}

function isDefinitionLookAhead(definition) {
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

function recursiveRuleNamesFromDefinition(definition) {
  const recursiveRuleNames = [],
        parts = definition.getParts();

  parts.forEach((part) => {
    recursiveRuleNamesFromPart(part, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

function leftRecursiveRuleNamesFromDefinition(definition) {
  const leftRecursiveRuleNames = [],
        parts = definition.getParts(),
        firstPart = first(parts),
        part = firstPart; ///

  leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}

module.exports = {
  isDefinitionUnary,
  isDefinitionComplex,
  isDefinitionLookAhead,
  recursiveRuleNamesFromDefinition,
  leftRecursiveRuleNamesFromDefinition
};
