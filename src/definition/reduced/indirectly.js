"use strict";

import { Definition } from "occam-parsers";

import { rewriteRuleNameParts } from "../../utilities/rewrite";
import { isDefinitionReducible } from "../../utilities/definition";
import { indirectRuleNameFromCycle } from "../../utilities/cycle";

export default class IndirectlyReducedDefinition extends Definition {
  static fromDefinitionCycleAndCycles(definition, cycle, cycles, ruleMap) {
    let indirectlyReducedDefinition = null;

    const definitionIndirectlyReducible = isDefinitionIndirectlyReducible(definition, cycle, cycles, ruleMap);

    if (definitionIndirectlyReducible) {
      let parts;

      parts = definition.getParts();

      parts = rewriteRuleNameParts(parts, cycle); ///

      const precedence = definition.getPrecedence();

      indirectlyReducedDefinition = new IndirectlyReducedDefinition(parts, precedence);
    }

    return indirectlyReducedDefinition;
  }
}

function isDefinitionIndirectlyReducible(definition, cycle, cycles, ruleMap) {
  const indirectRuleName = indirectRuleNameFromCycle(cycle),
        ruleName = indirectRuleName,  ///
        definitionReducible = isDefinitionReducible(definition, ruleName, cycles, ruleMap),
        definitionIndirectlyReducible = definitionReducible;  ///

  return definitionIndirectlyReducible;
}