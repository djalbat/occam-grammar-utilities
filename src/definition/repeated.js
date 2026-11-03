"use strict";

import { Definition } from "occam-parsers";

import { isDefinitionConsuming, tailPartsfromDefinition, isDefinitionDirectlyRepeatable } from "../utilities/definition";

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

export function repeatedDefinitionsFromPDefinitionAndPrecedences(definition, precedences, context) {
  const repeatedDefinitions = precedences.map((precedence) => {
    const repeatedDefinition = RepeatedDefinition.fromDefinitionAndPrecedence(definition, precedence, context);

    return repeatedDefinition;
  });

  return repeatedDefinitions;
}

export function repeatedDefinitionsFromDefinitions(definitions, context) {
  const repeatedDefinitions = definitions.reduce((repeatedDefinitions, definition) => {
    const defintionIndirectlyRepeatable = isDefinitionDirectlyRepeatable(definition, context);

    if (defintionIndirectlyRepeatable) {
      const repeatedDefinition = RepeatedDefinition.fromDefinition(definition, context);

      repeatedDefinitions.push(repeatedDefinition);
    }

    return repeatedDefinitions;
  }, []);

  return repeatedDefinitions;
}
