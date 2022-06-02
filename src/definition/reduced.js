"use strict";

import { Definition } from "occam-parsers";

import { cloneParts } from "../utilities/parts";

import { reducedPartFromPart } from "../utilities/part";

export default class ReducedDefinition extends Definition {
  static fromDefinition(definition) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    const part = parts.shift(),
          reducedPart = reducedPartFromPart(part);

    parts = [ ///
        reducedPart,
        ...parts
    ];

    const reducedDefinition = new ReducedDefinition(parts);

    return reducedDefinition;
  }
}
