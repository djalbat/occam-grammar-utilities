"use strict";

import { Definition } from "occam-parsers";

import { isDefinitionConsuming, partsfromDefinitionAndRuleNames } from "../../definition/repeated";

export default class IndirectlyRepeatedDefinition extends Definition {
  static fromDefinitionAndRuleNames(definition, ruleNames, ruleMap) {
    const parts = partsfromDefinitionAndRuleNames(definition, ruleNames),
          precedence = definition.getPrecedence(),
          indirectlyRepeatedDefinition = new IndirectlyRepeatedDefinition(parts, precedence);

    isDefinitionConsuming(indirectlyRepeatedDefinition, ruleMap);

    return indirectlyRepeatedDefinition;
  }

}
