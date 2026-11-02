"use strict";

import { Definition } from "occam-parsers";

import { tailPartsfromDefinition, isDefinitionConsuming } from "../../utilities/definition";

export default class IndirectlyRepeatedDefinition extends Definition {
  static fromDefinition(definition, context) {
    const tailParts = tailPartsfromDefinition(definition, context),
          parts = tailParts,  ///
          precedence = definition.getPrecedence(),
          indirectlyRepeatedDefinition = new IndirectlyRepeatedDefinition(parts, precedence);

    isDefinitionConsuming(indirectlyRepeatedDefinition, context);

    return indirectlyRepeatedDefinition;
  }
}

export function indirectlyRepeatedDefinitionsFromDefinitinos(definitions, context) {
  const indirectlyRepeatedDefinitions = definitions.map((definition) => {
    const indirectlyRepeatedDefinition = IndirectlyRepeatedDefinition.fromDefinition(definition, context);

    return indirectlyRepeatedDefinition;
  });

  return indirectlyRepeatedDefinitions;
}

