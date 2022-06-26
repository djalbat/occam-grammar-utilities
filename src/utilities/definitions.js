"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { definitionPartsFromDefinition } from "../utilities/definition";
import { firstPartFromParts, singlePartFromParts } from "../utilities/parts";

const { first } = arrayUtilities,
      { ChoiceOfPartsPart } = Parts;

export function mergeLeftRecursiveDefinitions(leftRecursiveDefinitions, LeftRecursiveDefinition, callback = () => {}) {
  let leftRecursiveDefinition;

  const firstLeftRecursiveDefinition = first(leftRecursiveDefinitions),
        leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;

  if (leftRecursiveDefinitionsLength === 1) {
    leftRecursiveDefinition = firstLeftRecursiveDefinition; ///

    callback(leftRecursiveDefinition);
  } else {
    let firstPart;

    const singleParts = leftRecursiveDefinitions.map((leftRecursiveDefinition) => {
      callback(leftRecursiveDefinition);

      const definition = leftRecursiveDefinition, ///
            definitionParts = definitionPartsFromDefinition(definition),
            parts = definitionParts;

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

    leftRecursiveDefinition = LeftRecursiveDefinition.fromPartsAndRuleName(parts, ruleName);
  }

  return leftRecursiveDefinition;
}

export function retrieveLeftRecursiveDefinitions(leftRecursiveRule, LeftRecursiveDefinition, callback = () => true) {
  const definitions = leftRecursiveRule.getDefinitions(),
        leftRecursiveDefinitions = definitions.filter((definition) => {
          const definitionLeftRecursiveDefinition = (definition instanceof LeftRecursiveDefinition);

          if (definitionLeftRecursiveDefinition) {
            const leftRecursiveDefinition = definition, ///
                  passed = callback(leftRecursiveDefinition);

            if (passed) {
              return true;
            }
          }
        });

  return leftRecursiveDefinitions;
}
