"use strict";

import { Definition } from "occam-parsers";

import { tailPartsfromDefinition, isDefinitionConsuming } from "../utilities/definition";

export default class RepeatedDefinition extends Definition {
  static fromDefinition(definition, context) {
    const tailParts = tailPartsfromDefinition(definition, context),
          parts = tailParts,  ///
          ruleMap = context.getRuleMap(),
          precedence = definition.getPrecedence(),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    isDefinitionConsuming(repeatedDefinition, ruleMap);

    return repeatedDefinition;
  }

  static fromDefinitionAndPrecedence(definition, precedence, context) {
    const tailParts = tailPartsfromDefinition(definition, context),
          parts = tailParts,  ///
          ruleMap = context.getRuleMap(),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    isDefinitionConsuming(repeatedDefinition, ruleMap);

    return repeatedDefinition;
  }
}
