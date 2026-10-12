"use strict";

import { arrayUtilities } from "necessary";

import { Definition } from "occam-parsers";

const { tail } = arrayUtilities;

export default class RepeatedDefinition extends Definition {
  static fromDefinition(definition) {
    let parts = definition.getParts();

    const tailParts = tail(parts);

    parts = tailParts;  ///

    const precedence = definition.getPrecedence(),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    return repeatedDefinition;
  }
}
