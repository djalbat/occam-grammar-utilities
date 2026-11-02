"use strict";

import { Definition } from "occam-parsers";

import { partsfromDefinition, isDefinitionIndirectlyReducible } from "../../utilities/definition";

export default class IndirectlyReducedDefinition extends Definition {
  static fromDefinition(definition, context) {
    let indirectlyReducedDefinition = null;

    const definitionIndirectlyReducible = isDefinitionIndirectlyReducible(definition, context);

    if (definitionIndirectlyReducible) {
      const parts = partsfromDefinition(definition, context),
            precedence = definition.getPrecedence();

      indirectlyReducedDefinition = new IndirectlyReducedDefinition(parts, precedence);
    }

    return indirectlyReducedDefinition;
  }
}
