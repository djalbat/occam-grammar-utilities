"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { rewriteRuleNameParts } from "../utilities/rewrite";

const { tail } = arrayUtilities;

export default class RepeatedDefinition extends Definition {
  static fromDefinitionAndCycle(definition, cycle, ruleMap) {
    const parts = partsfromDefinitionAndCycle(definition, cycle),
          precedence = definition.getPrecedence(),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    isDefinitionConsuming(repeatedDefinition, ruleMap);

    return repeatedDefinition;
  }

  static fromDefinitionCycleAndPrecedence(definition, cycle, precedence, ruleMap) {
    const parts = partsfromDefinitionAndCycle(definition, cycle),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    isDefinitionConsuming(repeatedDefinition, ruleMap);

    return repeatedDefinition;
  }
}

export function partsfromDefinitionAndCycle(definition, cycle) {
  let parts = definition.getParts();

  const tailParts = tail(parts);

  parts = tailParts;  ///

  parts = rewriteRuleNameParts(parts, cycle); ///

  return parts;
}

export function isDefinitionConsuming(definition, ruleMap) {
  const visitedRules = [],
        checkForCutParts = true;

  definition.isConsuming(ruleMap, visitedRules, checkForCutParts);
}
