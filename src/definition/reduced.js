"use strict";

import { Definition } from "occam-parsers";

import { ruleNameFromCycle } from "../utilities/cycle";
import { rewriteRuleNameParts } from "../utilities/rewrite";
import { isDefinitionReducible } from "../utilities/definition";

export default class ReducedDefinition extends Definition {
  static fromDefinitionCycleAndCycles(definition, cycle, cycles, ruleMap) {
    let reducedDefinition = null;

    const ruleName = ruleNameFromCycle(cycle),
          definitionReducible = isDefinitionReducible(definition, ruleName, cycles, ruleMap);

    if (definitionReducible) {
      let parts;

      parts = definition.getParts();

      parts = rewriteRuleNameParts(parts, cycle); ///

      const precedence = definition.getPrecedence();

      reducedDefinition = new ReducedDefinition(parts, precedence);
    }

    return reducedDefinition;
  }
}
