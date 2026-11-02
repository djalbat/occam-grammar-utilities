"use strict";

import { Definition } from "occam-parsers";

import { partsfromDefinition, isDefinitionDirectlyReducible } from "../utilities/definition";

export default class ReducedDefinition extends Definition {
  static fromDefinition(definition, context) {
    const parts = partsfromDefinition(definition, context),
          precedence = definition.getPrecedence(),
          reducedDefinition = new ReducedDefinition(parts, precedence);

    return reducedDefinition;
  }
}

export function reducedDefinitionsFromDefinitions(definitions, context) {
  const reducedDefinitions = definitions.reduce((reducedDefinitions, definition) => {
          const definitionDirectlyReducible = isDefinitionDirectlyReducible(definition, context);

          if (definitionDirectlyReducible) {
            const reducedDefinition = ReducedDefinition.fromDefinition(definition, context);

            reducedDefinitions.push(reducedDefinition);
          }

          return reducedDefinitions;
        }, []);

  return reducedDefinitions;
}
