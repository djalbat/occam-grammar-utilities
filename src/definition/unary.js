"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

import { cloneParts } from "../utilities/parts";

export default class UnaryDefinition extends Definition {
  static fromDefinition(definition) {
    let parts = definition.getParts();

    const firstPart = first(parts);

    parts = [ firstPart ];

    parts = cloneParts(parts);  ///

    const unaryDefinition = new UnaryDefinition(parts);

    return unaryDefinition;
  }
}
