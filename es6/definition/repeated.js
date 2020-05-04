"use strict";

import { Definition } from "occam-parsers";

import { cloneParts } from "../utilities/parts";

class RepeatedDefinition extends Definition {
  static fromDefinition(definition) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    parts.shift();  ///

    const repeatedDefinition = new RepeatedDefinition(parts);

    return repeatedDefinition;
  }
}

module.exports = RepeatedDefinition;
