"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { singlePartFromParts } from "../utilities/parts";

const { first } = arrayUtilities,
      { ChoiceOfPartsPart } = Parts;

export function mergeLeftRecursiveDefinitions(leftRecursiveDefinitions, LeftRecursiveDefinition) {
  let leftRecursiveDefinition;

  const firstLeftRecursiveDefinition = first(leftRecursiveDefinitions),
        leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;

  if (leftRecursiveDefinitionsLength === 1) {
    leftRecursiveDefinition = firstLeftRecursiveDefinition;
  } else {
    let parts;

    parts = firstLeftRecursiveDefinition.getParts();  ///

    const firstPart = first(parts),
          part = firstPart; ///

    const singleParts = leftRecursiveDefinitions.map((leftRecursiveDefinition) => {
      const parts = leftRecursiveDefinition.getParts();

      parts.shift();  ///

      const singlePart = singlePartFromParts(parts);

      return singlePart;
    });

    parts = singleParts;  ///

    const choiceOfPartsPart = new ChoiceOfPartsPart(parts);

    parts = [ ///
      part,
      choiceOfPartsPart
    ]

    const ruleName = firstLeftRecursiveDefinition.getRuleName();

    leftRecursiveDefinition = LeftRecursiveDefinition.fromRuleNameAndParts(ruleName, parts);
  }

  return leftRecursiveDefinition;
}
