"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { definitionPartsFromDefinition } from "../utilities/definition";
import { firstPartFromParts, singlePartFromParts } from "../utilities/parts";

const { first } = arrayUtilities,
      { ChoiceOfPartsPart } = Parts;

export function mergeLeftRecursiveDefinitions(leftRecursiveDefinitions, LeftRecursiveDefinition) {
  let leftRecursiveDefinition;

  const firstLeftRecursiveDefinition = first(leftRecursiveDefinitions),
        leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;

  if (leftRecursiveDefinitionsLength === 1) {
    leftRecursiveDefinition = firstLeftRecursiveDefinition; ///
  } else {
    let firstPart;

    const singleParts = leftRecursiveDefinitions.map((leftRecursiveDefinition, index) => {
      const definitionParts = definitionPartsFromDefinition(leftRecursiveDefinition),
            parts = definitionParts;  ///

      firstPart = firstPartFromParts(parts)

      const singlePart = singlePartFromParts(parts);

      return singlePart;
    });

    let parts = singleParts;  ///

    const ruleName = firstLeftRecursiveDefinition.getRuleName(),
          choiceOfPartsPart = new ChoiceOfPartsPart(parts);

    parts = [
      firstPart,
      choiceOfPartsPart
    ];

    leftRecursiveDefinition = LeftRecursiveDefinition.fromRuleNameAndParts(ruleName, parts);
  }

  return leftRecursiveDefinition;
}
