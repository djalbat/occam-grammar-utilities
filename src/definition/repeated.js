"use strict";

import { Definition } from "occam-parsers";

import { tailPartsfromDefinition, isDefinitionConsuming } from "../utilities/definition";

export default class RepeatedDefinition extends Definition {
  static fromDefinition(definition, context) {
    const tailParts = tailPartsfromDefinition(definition, context),
          parts = tailParts,  ///
          precedence = definition.getPrecedence(),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    isDefinitionConsuming(repeatedDefinition, context);

    return repeatedDefinition;
  }

  static fromDefinitionAndPrecedence(definition, precedence, context) {
    const tailParts = tailPartsfromDefinition(definition, context),
          parts = tailParts,  ///
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    isDefinitionConsuming(repeatedDefinition, context);

    return repeatedDefinition;
  }
}
