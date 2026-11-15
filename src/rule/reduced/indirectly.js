"use strict";

import { Rule } from "occam-parsers";

import IndirectlyReducedNode from "../../node/reduced/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { indirectlyReducedDefinitionsFromDefinitions } from "../../definition/reduced/indirectly";
import { indirectlyReducedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyReducedNode;  ///

    return NonTerminalNode;
  }

  static fromIndirectRule(indirectRule, context) {
    const indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = indirectRule.getDefinitions();

    const indirectlyReducedDefinitions = indirectlyReducedDefinitionsFromDefinitions(definitions, context),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromIndirectRuleName(indirectRuleName),
          name = indirectlyReducedRuleName, ///
          opacity = indirectRule.getOpacity();

    definitions = indirectlyReducedDefinitions; ///

    const indirectlyReducedRule = new IndirectlyReducedRule(name, opacity, definitions);

    return indirectlyReducedRule;
  }
}

export function indirectlyReducedRulesFromCycleAndCycles(context, indirectlyReducedRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const indirectRule = context.getIndirectRule(),
            indirectlyReducedRule = IndirectlyReducedRule.fromIndirectRule(indirectRule, context);

      indirectlyReducedRules.push(indirectlyReducedRule);

      break;
    }
  }

  return indirectlyReducedRules;
}
