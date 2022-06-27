"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { matchParts } from "../utilities/part";
import { cloneDefinitionParts } from "../utilities/definition";
import { firstPartFromParts, singlePartFromParts } from "../utilities/parts";

const { first } = arrayUtilities,
      { ChoiceOfPartsPart } = Parts;

export function mergeLeftRecursiveDefinitions(leftRecursiveDefinitions, fromPartsAndRuleName, callback = () => {}) {
  let leftRecursiveDefinition;

  const firstLeftRecursiveDefinition = first(leftRecursiveDefinitions),
        leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;

  if (leftRecursiveDefinitionsLength === 1) {
    leftRecursiveDefinition = firstLeftRecursiveDefinition; ///

    callback(leftRecursiveDefinition);
  } else {

    const ruleName = firstLeftRecursiveDefinition.getRuleName();

    let firstPart,
        previousFirstPart = null;

    const singleParts = leftRecursiveDefinitions.map((leftRecursiveDefinition) => {
      callback(leftRecursiveDefinition);

      const definition = leftRecursiveDefinition, ///
            clonedParts = cloneDefinitionParts(definition),
            parts = clonedParts;  ///

      firstPart = firstPartFromParts(parts);

      if (previousFirstPart !== null) {
        const matches = matchParts(firstPart, previousFirstPart);

        if (!matches) {
          const definition = leftRecursiveDefinition, ///
                definitionString = definition.asString();

          throw new Error(`The '${definitionString}' left recursive definition of the '${ruleName}' rule does not match one of its sibling left recursive definitions and  therefore cannot be rewritten.`);
        }
      }

      previousFirstPart = firstPart;  ///

      const singlePart = singlePartFromParts(parts);

      return singlePart;
    });

    let parts = singleParts;  ///

    const choiceOfPartsPart = new ChoiceOfPartsPart(parts);

    parts = [
      firstPart,
      choiceOfPartsPart
    ];

    leftRecursiveDefinition = fromPartsAndRuleName(parts, ruleName);
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
