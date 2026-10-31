"use strict";

import { Definition } from "occam-parsers";

import { isDefinitionConsuming, partsfromDefinitionAndCycle } from "../../definition/repeated";

export default class IndirectlyRepeatedDefinition extends Definition {
  static fromDefinitionAndCycle(definition, cycle, ruleMap) {
    const parts = partsfromDefinitionAndCycle(definition, cycle),
          precedence = definition.getPrecedence(),
          indirectlyRepeatedDefinition = new IndirectlyRepeatedDefinition(parts, precedence);

    isDefinitionConsuming(indirectlyRepeatedDefinition, ruleMap);

    return indirectlyRepeatedDefinition;
  }
}
