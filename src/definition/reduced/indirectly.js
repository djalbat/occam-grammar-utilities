"use strict";

import { Definition } from "occam-parsers";

import { partsfromDefinition, isDefinitionReducible } from "../../utilities/definition";

export default class IndirectlyReducedDefinition extends Definition {
  static fromDefinition(definition, context) {
    const parts = partsfromDefinition(definition, context),
          precedence = definition.getPrecedence(),
          indirectlyReducedDefinition = new IndirectlyReducedDefinition(parts, precedence);

    return indirectlyReducedDefinition;
  }
}

export function indirectlyReducedDefinitionsFromDefinitions(definitions, context) {
  const indirectRuleName = context.getIndirectRuleName(),
        indirectlyReducedDefinitions = definitions.reduce((indirectlyReducedDefinitions, definition) => {
          const definitionReducible = isDefinitionReducible(definition, indirectRuleName, context);

          if (definitionReducible) {
            const indirectlyReducedDefinition = IndirectlyReducedDefinition.fromDefinition(definition, context);

            indirectlyReducedDefinitions.push(indirectlyReducedDefinition);
          }

          return indirectlyReducedDefinitions;
        }, []);

  return indirectlyReducedDefinitions;
}