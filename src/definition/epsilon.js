"use strict";

import { Parts, Definition } from "occam-parsers";

const { EpsilonPart } = Parts;

export default class EpsilonDefinition extends Definition {
  static fromPrecedence(precedence) {
    const epsilonPart = EpsilonPart.fromNothing(),
          parts = [
            epsilonPart
          ],
          epsilonDefinition = EpsilonDefinition.fromPartsAndPrecedence(parts, precedence);

    return epsilonDefinition;
  }
}
