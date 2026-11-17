"use strict";

import { Rule } from "occam-parsers";

import IntermediateNode from "../node/intermediate";

import { CYCLE_LENGTH_2 } from "../constants";
import { isRuleRepeatable } from "../utilities/rule";
import { intermediateRuleNameFromRuleName, intermediateRuleNameFromIndirectRuleName } from "../utilities/ruleName";
import { intermediateDefinitionsFromDefinitionsRuleNameAndIndirectRuleName,
         intermediateDefinitionsFromDefinitionsIndirectRuleNameAndRuleName } from "../definition/intermediate";

export default class IntermediateRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IntermediateNode; ///

    return NonTerminalNode;
  }

  static fromRuleAndIndirectRule(rule, indirectRule, context) {
    const ruleName = rule.getName(),
          indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    const intermediateDefinitions = intermediateDefinitionsFromDefinitionsRuleNameAndIndirectRuleName(definitions, ruleName, indirectRuleName, context),
          intermediateRuleName = intermediateRuleNameFromRuleName(ruleName),
          name = intermediateRuleName, ///
          opacity = rule.getOpacity();

    definitions = intermediateDefinitions;  ///

    const intermediateRule = new IntermediateRule(name, opacity, definitions);

    return intermediateRule;
  }

  static fromIndirectRuleAndRule(indirectRule, rule, context) {
    const ruleName = rule.getName(),
          indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = indirectRule.getDefinitions();

    const intermediateDefinitions = intermediateDefinitionsFromDefinitionsIndirectRuleNameAndRuleName(definitions, indirectRuleName, ruleName, context),
          intermediateRuleName = intermediateRuleNameFromIndirectRuleName(indirectRuleName),
          name = intermediateRuleName, ///
          opacity = indirectRule.getOpacity();

    definitions = intermediateDefinitions;  ///

    const intermediateRule = new IntermediateRule(name, opacity, definitions);

    return intermediateRule;
  }
}

export function intermediateRulesFromCycleAndCycles(context, intermediateRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectRule = context.getIndirectRule(),
            ruleRepeatable = isRuleRepeatable(rule, context),
            indirectRuleRepeatable = isRuleRepeatable(indirectRule, context);

      if (ruleRepeatable) {
        const intermediateRule = IntermediateRule.fromRuleAndIndirectRule(rule, indirectRule, context);

        intermediateRules.push(intermediateRule);
      }

      if (indirectRuleRepeatable) {
        const intermediateRule = IntermediateRule.fromIndirectRuleAndRule(indirectRule, rule, context);

        intermediateRules.push(intermediateRule);
      }

      break;
    }
  }

  return intermediateRules;
}
