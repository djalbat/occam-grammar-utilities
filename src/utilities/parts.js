"use strict";

import { partTypes } from "occam-parsers";

import { arrayUtilities } from "necessary";

import { isPartSimplePart } from "../utilities/part";

const { first } = arrayUtilities,
      { IsolatedPartPartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        CommittedPartPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType,
        SequenceOfPartsPartType } = partTypes;

export function retrieveSimpleParts(part, callback) {
  const terminate = retrieveParts(part, (part, nullified) => {
    let terminate = false;

    const partSimplePart = isPartSimplePart(part);

    if (partSimplePart) {
      const simplePart = part;  ///

      terminate = callback(simplePart, nullified);
    }

    return terminate;
  });

  return terminate;
}

export function retrieveParts(part, nullified, callback) {
  if (callback === undefined) {
    callback = nullified; ///

    nullified = false;
  }

  let terminate;

  terminate = callback(part, nullified);

  if (!terminate) {
    const partNonTerminalPart = part.isNonTerminalPart();

    if (partNonTerminalPart) {
      const nonTerminalPart = part,
            type = nonTerminalPart.getType();

      switch (type) {
        case OptionalPartPartType: {
          const optionalPart = nonTerminalPart, ///
                part = optionalPart.getPart();

          nullified = true;

          terminate = retrieveParts(part, nullified, callback);

          break;
        }

        case ZeroOrMorePartsPartType: {
          const zeroOfMorePartsPart = nonTerminalPart, ///
                part = zeroOfMorePartsPart.getPart();

          nullified = true;

          terminate = retrieveParts(part, nullified, callback);

          break;
        }

        case OneOrMorePartsPartType: {
          const oneOrMorePartsPart = nonTerminalPart,  ///
                part = oneOrMorePartsPart.getPart();

          terminate = retrieveParts(part, nullified, callback);

          break;
        }

        case IsolatedPartPartType: {
          const isolatedPartPart = nonTerminalPart,  ///
                part = isolatedPartPart.getPart();

          terminate = retrieveParts(part, nullified, callback);

          break;
        }

        case CommittedPartPartType: {
          const committedPartPart = nonTerminalPart,  ///
                part = committedPartPart.getPart();

          terminate = retrieveParts(part, nullified, callback);

          break;
        }

        case SequenceOfPartsPartType: {
          const sequenceOfPartsPart = nonTerminalPart, ///
                parts = sequenceOfPartsPart.getParts();

          parts.some((part) => {
            terminate = retrieveParts(part, nullified, callback);

            if (terminate) {
              return true;
            }
          });

          break;
        }

        case ChoiceOfPartsPartType: {
          const choiceOfPartsPart = nonTerminalPart, ///
                parts = choiceOfPartsPart.getParts();

          terminate = true;

          parts.forEach((part) => {
            terminate = retrieveParts(part, nullified, callback) && terminate;
          });

          break;
        }
      }
    }
  }

  return terminate;
}

export function arePartsEqual(parts) {
  const firstPart = first(parts),
        firstPartString = firstPart.asString(),
        partsEqual = parts.every((part) => {
          const partString = part.asString(),
                partStringFirstPartString = (partString === firstPartString);

          if (partStringFirstPartString) {
            return true;
          }
        });

  return partsEqual;
}
