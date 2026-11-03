"use strict";

import { Rule } from "occam-parsers";

import IndirectlyReducedNode from "../../node/reduced/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { indirectlyReducedDefinitionsFromDefinitions } from "../../definition/reduced/indirectly";
import { indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyReducedNode;  ///

    return NonTerminalNode;
  }

  static fromIndirectlyReducibleIndirectCycle(indirectlyReducibleIndirectCycle, context) {
    const ruleName = context.getRuleName(),
          indirectRule = context.getIndirectRule(),
          indirectRuleName = context.getIndirectRuleName();

    let definitions;

    definitions = indirectRule.getDefinitions();

    const indirectlyReducedDefinitions = indirectlyReducedDefinitionsFromDefinitions(definitions, context),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          name = indirectlyReducedRuleName, ///
          opacity = null;

    definitions = indirectlyReducedDefinitions; ///

    const indirectlyReducedRule = new IndirectlyReducedRule(name, opacity, definitions);

    return indirectlyReducedRule;
  }
}

export function indirectlyReducedRulesFromCycleAndCycles(context, indirectlyReducedRules = []) {
  const cycle = context.getCycle(),
        cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      // const cycleIndirectlyReducible = isCycleIndirectlyReducible(context);
      //
      // if (cycleIndirectlyReducible) {
      //   const indirectlyReducibleIndirectCycle = cycle, ///
      //         indirectlyReducedRule = IndirectlyReducedRule.fromIndirectlyReducibleIndirectCycle(indirectlyReducibleIndirectCycle, context);
      //
      //   indirectlyReducedRules.push(indirectlyReducedRule);
      // }

      break;
    }
  }

  return indirectlyReducedRules;
}
