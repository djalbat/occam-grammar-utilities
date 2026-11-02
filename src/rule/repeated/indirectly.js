"use strict";

import { Rule } from "occam-parsers";

import IndirectlyRepeatedNode from "../../node/repeated/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { filterDefinitions } from "../../utilities/cycle";
import { isCycleIndirectlyRepeatable } from "../../utilities/cycle";
import { indirectlyRepeatedDefinitionsFromDefinitinos } from "../../definition/repeated/indirectly";
import { indirectlyRepeatedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyRepeatedNode; ///

    return NonTerminalNode;
  }

  static fromIndirectlyRepeatedIndirectCycle(indirectlyRepeatedIndirectCycle, context) {
    let definitions;

    const indirectRule = context.getIndirectRule();

    definitions = indirectRule.getDefinitions();

    context.permuteCycle();

    definitions = filterDefinitions(definitions, context); ///

    context.permuteCycle();

    const indirectRuleName = context.getIndirectRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName),
          indirectlyRepeatedDefinitions = indirectlyRepeatedDefinitionsFromDefinitinos(definitions, context),
          name = indirectlyRepeatedRuleName, ///
          opacity = indirectRule.getOpacity();

    definitions = indirectlyRepeatedDefinitions;  ///

    const indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions);

    return indirectlyRepeatedRule;
  }
}

export function indirectlyRepeatedRulesFromCycleAndCycles(context, indirectlyRepeatedRules = []) {
  const cycle = context.getCycle(),
        cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const cycleIndirectlyRepeatable = isCycleIndirectlyRepeatable(context);

      if (cycleIndirectlyRepeatable) {
        const indirectlyRepeatedIndirectCycle = cycle,  ///
              indirectlyRepeatedRule = IndirectlyRepeatedRule.fromIndirectlyRepeatedIndirectCycle(indirectlyRepeatedIndirectCycle, context);

        indirectlyRepeatedRules.push(indirectlyRepeatedRule);
      }

      break;
    }
  }

  return indirectlyRepeatedRules;
}
