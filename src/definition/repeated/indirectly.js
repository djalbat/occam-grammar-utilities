"use strict";

import { Definition } from "occam-parsers";

import { tailPartsfromDefinition, isDefinitionConsuming } from "../../utilities/definition";

export default class IndirectlyRepeatedDefinition extends Definition {
  static fromDefinition(definition, context) {
    const tailParts = tailPartsfromDefinition(definition, context),
          parts = tailParts,  ///
          ruleMap = context.getRuleMap(),
          precedence = definition.getPrecedence(),
          indirectlyRepeatedDefinition = new IndirectlyRepeatedDefinition(parts, precedence);

    isDefinitionConsuming(indirectlyRepeatedDefinition, ruleMap);

    return indirectlyRepeatedDefinition;
  }
}
