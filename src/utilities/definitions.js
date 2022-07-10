"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import DirectlyLeftRecursiveDefinition from "../definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "../definition/recursive/left/indirectly";

import { matchParts } from "../utilities/part";
import { cloneParts, singlePartFromParts } from "../utilities/parts";

const { first, tail } = arrayUtilities,
      { ChoiceOfPartsPart } = Parts;

export function mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
  const firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions),
        ruleName = firstDirectlyLeftRecursiveDefinition.getRuleName();

  let parts = [];

  const firstPart = firstPartFromDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions),
        singleParts = singlePartsFromDirectlyLeftRecursiveDefinitionsAnbRuleName(directlyLeftRecursiveDefinitions, ruleName),
        singlePartsLength = singleParts.length;

  parts.push(firstPart);

  if (false) {
    ///
  } else if (singlePartsLength === 1) {
    const firstSinglePart = first(singleParts);

    parts.push(firstSinglePart);
  } else {
    const choiceOfSinglePartsPart = new ChoiceOfPartsPart(singleParts);

    parts.push(choiceOfSinglePartsPart);
  }

  parts = cloneParts(parts);  ///

  const directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromPartsAndRuleName(parts, ruleName);

  return directlyLeftRecursiveDefinition;
}

export function mergeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions) {
  const firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions),
        leftRecursiveDefinitions = firstIndirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions(),
        ruleName = firstIndirectlyLeftRecursiveDefinition.getRuleName();

  let parts = [];

  const firstPart = firstPartFromIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions),
        singleParts = singlePartsFromIndirectlyLeftRecursiveDefinitionsAndRuleName(indirectlyLeftRecursiveDefinitions, ruleName),
        singlePartsLength = singleParts.length;

  parts.push(firstPart);

  if (false) {
    ///
  } else if (singlePartsLength === 0) {
    ///
  } else if (singlePartsLength === 1) {
    const firstSinglePart = first(singleParts);

    parts.push(firstSinglePart);
  } else {
    const choiceOfSinglePartsPart = new ChoiceOfPartsPart(singleParts);

    parts.push(choiceOfSinglePartsPart);
  }

  parts = cloneParts(parts);  ///

  const indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromPartsRuleNameAndLeftRecursiveDefinitions(parts, ruleName, leftRecursiveDefinitions);

  return indirectlyLeftRecursiveDefinition;
}

function firstPartFromDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
  const firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions),
        directlyLeftRecursiveDefinition = firstDirectlyLeftRecursiveDefinition, ///
        parts = directlyLeftRecursiveDefinition.getParts(),
        firstPart = first(parts);

  return firstPart;
}

function firstPartFromIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions) {
  const firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions),
        indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, ///
        parts = indirectlyLeftRecursiveDefinition.getParts(),
        firstPart = first(parts);

  return firstPart;
}

function singlePartsFromDirectlyLeftRecursiveDefinitionsAnbRuleName(directlyLeftRecursiveDefinitions, ruleName) {
  let previousFirstPart = null;

  const singleParts = directlyLeftRecursiveDefinitions.map((directlyLeftRecursiveDefinition) => {
    let parts = directlyLeftRecursiveDefinition.getParts();

    const partsLength = parts.length;

    if (partsLength === 1) {
      const definition = directlyLeftRecursiveDefinition, ///
            definitionString = definition.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
    }

    const firstPart = first(parts);

    if (previousFirstPart !== null) {
      const matches = matchParts(firstPart, previousFirstPart);

      if (!matches) {
        const definition = directlyLeftRecursiveDefinition, ///
              definitionString = definition.asString();

        throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule does not match one of its sibling directly left recursive definitions and therefore cannot be rewritten.`);
      }
    }

    previousFirstPart = firstPart;  ///

    const partsTail = tail(parts);

    parts = partsTail;  ///

    const singlePart = singlePartFromParts(parts);

    return singlePart;
  });

  return singleParts;
}

function singlePartsFromIndirectlyLeftRecursiveDefinitionsAndRuleName(indirectlyLeftRecursiveDefinitions, ruleName) {
  let previousFirstPart = null;

  const singleParts = indirectlyLeftRecursiveDefinitions.reduce((singleParts, indirectlyLeftRecursiveDefinition) => {
    let parts = indirectlyLeftRecursiveDefinition.getParts();

    const firstPart = first(parts);

    if (previousFirstPart !== null) {
      const matches = matchParts(firstPart, previousFirstPart);

      if (!matches) {
        const definition = indirectlyLeftRecursiveDefinition, ///
              definitionString = definition.asString();

        throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule does not match one of its sibling directly left recursive definitions and therefore cannot be rewritten.`);
      }
    }

    previousFirstPart = firstPart;  ///

    const partsTail = tail(parts),
          partsTailLength = partsTail.length;

    if (partsTailLength > 0) {
      parts = partsTail;  ///

      const singlePart = singlePartFromParts(parts);

      singleParts.push(singlePart);
    }

    return singleParts;
  }, []);

  return singleParts;
}
