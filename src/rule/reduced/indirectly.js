"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../../node/reduced";

import { CYCLE_LENGTH_2 } from "../../constants";
import { isRuleRepeatable } from "../../utilities/rule";
import { reducedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";
import { indirectlyReducedDefinitionsFromDefinitions } from "../../definition/reduced/indirectly";

export default class IndirectlyReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReducedNode;  ///

    return NonTerminalNode;
  }

  static fromIndirectRule(indirectRule, context) {
    const indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = indirectRule.getDefinitions();

    const indirectlyReducedDefinitions = indirectlyReducedDefinitionsFromDefinitions(definitions, context),
          reducedRuleName = reducedRuleNameFromIndirectRuleName(indirectRuleName),
          name = reducedRuleName, ///
          opacity = indirectRule.getOpacity();

    definitions = indirectlyReducedDefinitions; ///

    const indirectlyReducedRule = new IndirectlyReducedRule(name, opacity, definitions);

    return indirectlyReducedRule;
  }
}

export function indirectlyReducedRulesFromCycleAndCycles(context, indirectlyReducedRules = []) {
  const leftRecursiveCycleLength = context.getLeftRecursiveCycleLength();

  switch (leftRecursiveCycleLength) {
    case CYCLE_LENGTH_2: {
      const indirectRule = context.getIndirectRule(),
            indirectRuleRepetaable = isRuleRepeatable(indirectRule, context);

      if (!indirectRuleRepetaable) {
        const indirectlyReducedRule = IndirectlyReducedRule.fromIndirectRule(indirectRule, context);

        indirectlyReducedRules.push(indirectlyReducedRule);
      }

      break;
    }
  }

  return indirectlyReducedRules;
}
