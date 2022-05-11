"use strict";

import { Definition } from "occam-parsers";

import { cloneParts } from "../utilities/parts";

export default class RepeatedDefinition extends Definition {
  static fromDefinition(definition) {
    const parts = definition.getParts(),
          repeatedDefinition = repeatedDefinitionFromParts(parts);

    return repeatedDefinition;
  }

  static fromImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition) {
    const parts = implicitlyLeftRecursiveDefinition.getParts(),
          repeatedDefinition = repeatedDefinitionFromParts(parts);

    return repeatedDefinition;
  }
}

function repeatedDefinitionFromParts(parts) {
  parts = cloneParts(parts);  ///

  parts.shift();  ///

  const repeatedDefinition = new RepeatedDefinition(parts);

  return repeatedDefinition;
}