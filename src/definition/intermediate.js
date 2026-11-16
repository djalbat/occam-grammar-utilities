"use strict";

import { Definition } from "occam-parsers";

import {isDefinitionConsuming, isDefinitionRepeatable, tailPartsfromDefinition} from "../utilities/definition";

export default class IntermediateDefinition extends Definition {
  static fromRepeatableDefinition(repeatableDefinition, context) {
    const definition = repeatableDefinition,  ///
          tailParts = tailPartsfromDefinition(definition, context),
          parts = tailParts,  ///
          precedence = definition.getPrecedence(),
          intermediateDefinition = new IntermediateDefinition(parts, precedence);

    isDefinitionConsuming(intermediateDefinition, context);

    return intermediateDefinition;
  }
}

export function intermediateDefinitionsFromDefinitionsAndRuleName(definitions, ruleName, context) {
  const intermediateDefinitions = definitions.reduce((intermediateDefinitions, definition) => {
    const definitioRepeatable = isDefinitionRepeatable(definition, ruleName, context);

    if (definitioRepeatable) {
      const repeatableDefinition = definition,  ///
            intermediateDefinition = IntermediateDefinition.fromRepeatableDefinition(repeatableDefinition, context);

      intermediateDefinitions.push(intermediateDefinition);
    }

    return intermediateDefinitions;
  }, []);

  return intermediateDefinitions;
}
