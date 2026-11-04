"use strict";

import { Definition } from "occam-parsers";

import { partsfromDefinition, isDefinitionReducible } from "../utilities/definition";

export default class ReducedDefinition extends Definition {
  static fromDefinition(definition, context) {
    const parts = partsfromDefinition(definition, context),
          precedence = definition.getPrecedence(),
          reducedDefinition = new ReducedDefinition(parts, precedence);

    return reducedDefinition;
  }
}

export function reducedDefinitionsFromDefinitions(definitions, context) {
  const ruleName = context.getRuleName(),
        reducedDefinitions = definitions.reduce((reducedDefinitions, definition) => {
          const definitionReducible = isDefinitionReducible(definition, ruleName, context);

          if (definitionReducible) {
            const reducedDefinition = ReducedDefinition.fromDefinition(definition, context);

            reducedDefinitions.push(reducedDefinition);
          }

          return reducedDefinitions;
        }, []);

  return reducedDefinitions;
}
