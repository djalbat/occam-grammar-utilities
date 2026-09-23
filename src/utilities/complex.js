"use strict";

import { partTypes } from "occam-parsers";
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities,
      { RuleNamePartType,
        IsolatedPartPartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        SequenceOfPartsPartType,
        ZeroOrMorePartsPartType } = partTypes;

export function isDefinitionComplex(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartComplex = isPartComplex(firstPart),
        definitionComplex = firstPartComplex; ///

  return definitionComplex;
}

function isPartComplex(part) {
  let partComplex = true;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case RuleNamePartType: {
        partComplex = false;

        break;
      }

      case OptionalPartPartType: {
        const optionalPartPart = nonTerminalPart, ///
              part = optionalPartPart.getPart();

        partComplex = isPartComplex(part);

        break;
      }

      case OneOrMorePartsPartType: {
        const oneOrMorePartsPart = nonTerminalPart,  ///
              part = oneOrMorePartsPart.getPart();

        partComplex = isPartComplex(part);

        break;
      }

      case ZeroOrMorePartsPartType: {
        const zeroOrMorePartsPart = nonTerminalPart, ///
              part = zeroOrMorePartsPart.getPart();  ///

        partComplex = isPartComplex(part);

        break;
      }

      case SequenceOfPartsPartType:{
        partComplex = true;

        break;
      }

      case ChoiceOfPartsPartType: {
        partComplex = true;

        break;
      }

      case IsolatedPartPartType: {
        const isolatedPartPart = nonTerminalPart,  ///
              part = isolatedPartPart.getPart();

        partComplex = isPartComplex(part);

        break;
      }
    }
  }

  return partComplex;
}
