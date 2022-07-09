"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { matchParts } from "../utilities/part";
import { cloneParts, singlePartFromParts } from "../utilities/parts";

const { first, tail } = arrayUtilities,
      { ChoiceOfPartsPart } = Parts;

export function mergeLeftRecursiveDefinitions(leftRecursiveDefinitions, callback) {
  let leftRecursiveDefinition;

  const firstLeftRecursiveDefinition = first(leftRecursiveDefinitions),
        leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;

  if (leftRecursiveDefinitionsLength === 1) {
    leftRecursiveDefinition = firstLeftRecursiveDefinition; ///
  } else {
    const ruleName = firstLeftRecursiveDefinition.getRuleName();

    let firstPart,
        previousFirstPart = null;

    const singleParts = leftRecursiveDefinitions.map((leftRecursiveDefinition) => {
      let parts = leftRecursiveDefinition.getParts();

      const partsLength = parts.length;

      if (partsLength === 1) {
        const definition = leftRecursiveDefinition, ///
              definitionString = definition.asString();

        throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
      }

      firstPart = first(parts);

      if (previousFirstPart !== null) {
        const matches = matchParts(firstPart, previousFirstPart);

        if (!matches) {
          const definition = leftRecursiveDefinition, ///
                definitionString = definition.asString();

          throw new Error(`The '${definitionString}' left recursive definition of the '${ruleName}' rule does not match one of its sibling left recursive definitions and therefore cannot be rewritten.`);
        }
      }

      previousFirstPart = firstPart;  ///

      const partsTail = tail(parts);

      parts = partsTail;  ///

      const singlePart = singlePartFromParts(parts);

      return singlePart;
    });

    let parts = singleParts;  ///

    const choiceOfPartsPart = new ChoiceOfPartsPart(parts);

    parts = [
      firstPart,
      choiceOfPartsPart
    ];

    parts = cloneParts(parts);  ///

    leftRecursiveDefinition = callback(parts, ruleName);
  }

  return leftRecursiveDefinition;
}
