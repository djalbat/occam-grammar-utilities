"use strict";

import { Definition } from "occam-parsers";

import { partsfromDefinition, isDefinitionReducible } from "../../utilities/definition";

export default class DirectlyReducedDefinition extends Definition {
  static fromDefinition(definition, context) {
    const parts = partsfromDefinition(definition, context),
          precedence = definition.getPrecedence(),
          directlyReducedDefinition = new DirectlyReducedDefinition(parts, precedence);

    return directlyReducedDefinition;
  }
}

export function directlyReducedDefinitionsFromDefinitions(definitions, context) {
  const ruleName = context.getRuleName(),
        directlyReducedDefinitions = definitions.reduce((directlyReducedDefinitions, definition) => {
          const definitionReducible = isDefinitionReducible(definition, ruleName, context);

          if (definitionReducible) {
            const directlyReducedDefinition = DirectlyReducedDefinition.fromDefinition(definition, context);

            directlyReducedDefinitions.push(directlyReducedDefinition);
          }

          return directlyReducedDefinitions;
        }, []);

  return directlyReducedDefinitions;
}
