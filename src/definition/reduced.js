"use strict";

import { Definition } from "occam-parsers";

import { partsfromDefinition, isDefinitionReducible } from "../utilities/definition";

export default class ReducedDefinition extends Definition {
  static fromDefinition(definition, context) {
    let reducedDefinition = null;

    const ruleName = context.getRuleName(),
          definitionReducible = isDefinitionReducible(definition, ruleName, context);

    if (definitionReducible) {
      const parts = partsfromDefinition(definition, context),
            precedence = definition.getPrecedence();

      reducedDefinition = new ReducedDefinition(parts, precedence);
    }

    return reducedDefinition;
  }
}
