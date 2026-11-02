"use strict";

import { Definition } from "occam-parsers";

import { partsfromDefinition, isDefinitionIndirectlyReducible } from "../../utilities/definition";

export default class IndirectlyReducedDefinition extends Definition {
  static fromDefinition(definition, context) {
    const parts = partsfromDefinition(definition, context),
          precedence = definition.getPrecedence(),
          indirectlyReducedDefinition = new IndirectlyReducedDefinition(parts, precedence);

    return indirectlyReducedDefinition;
  }
}

export function indirectlyReducedDefinitionsFromDefinitions(definitions, context) {
  const indirectlyReducedDefinitions = definitions.reduce((indirectlyReducedDefinitions, definition) => {
    const definitionIndirectlyReducible = isDefinitionIndirectlyReducible(definition, context);

    if (definitionIndirectlyReducible) {
      const indirectlyReducedDefinition = IndirectlyReducedDefinition.fromDefinition(definition, context);

      indirectlyReducedDefinitions.push(indirectlyReducedDefinition);
    }

    return indirectlyReducedDefinitions;
  }, []);

  return indirectlyReducedDefinitions;
}