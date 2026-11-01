"use strict";

import { Rule } from "occam-parsers";

import { CYCLE_LENGTH_2 } from "../constants";
import { isCycleIndirectlyRepeated } from "./repeated/indirectly";
import { indirectRuleNameFromCycle } from "../utilities/cycle";

export default class RemovedRule extends Rule {
  static fromIndirectRuleName(indirectRuleName, ruleMap) {
    const name = indirectRuleName, ///
          opacity = null,
          definitions = [],
          removedRule = new RemovedRule(name, opacity, definitions);

    return removedRule;
  }
}

export function removedRulesFromCycleAndCycles(context) {
  const cycle = context.getCycle(),
        cycles = context.getCycles(),
        ruleMap = context.getRuleMap(),
        removedRules = context.getRemovedRules(),
        cycleLength = cycle.getLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const cycleIndirectlyRepeated = isCycleIndirectlyRepeated(context);

      if (cycleIndirectlyRepeated) {
        const indirectRuleName = indirectRuleNameFromCycle(cycle),
              removedRule = RemovedRule.fromIndirectRuleName(indirectRuleName, ruleMap);

        removedRules.push(removedRule);
      }

      break;
    }
  }

  return removedRules;
}
