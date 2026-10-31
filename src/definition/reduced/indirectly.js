"use strict";

import { Parts, Definition } from "occam-parsers";

import { rewriteRuleNameParts } from "../../utilities/rewrite";
import { isDefinitionReducible } from "../../utilities/definition";
import { isIndirectRuleReducible } from "../../rule/reduced/indirectly";
import { ruleNameFromCycle, indirectRuleNameFromCycle } from "../../utilities/cycle";
import { indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName } from "../../utilities/ruleName";

const { RuleNamePart } = Parts;

export default class IndirectlyReducedDefinition extends Definition {
  static fromCycleAndCycles(cycle, cycles, ruleMap) {
    let indirectlyReducedDefinition = null;

    const indirectRuleReducible = isIndirectRuleReducible(cycle, cycles, ruleMap);

    if (indirectRuleReducible) {
      const ruleName = ruleNameFromCycle(cycle),
            indirectRuleName = indirectRuleNameFromCycle(cycle),
            indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
            indirectlyReducedRuleNamePart = RuleNamePart.fromRuleName(indirectlyReducedRuleName),
            parts = [
              indirectlyReducedRuleNamePart
            ],
            precedence = null;

      indirectlyReducedDefinition = new IndirectlyReducedDefinition(parts, precedence);
    }

    return indirectlyReducedDefinition;
  }

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