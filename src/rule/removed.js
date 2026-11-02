"use strict";

import { Rule } from "occam-parsers";

import { CYCLE_LENGTH_2 } from "../constants";
import { isCycleIndirectlyRepeatable } from "../utilities/cycle";

export default class RemovedRule extends Rule {
  static fromIndirectlyRepeatedIndirectCycle(indirectlyRepeatedIndirectCycle, context) {
    const indirectRuleName = context.getIndirectRuleName(),
          name = indirectRuleName, ///
          opacity = null,
          definitions = [],
          removedRule = new RemovedRule(name, opacity, definitions);

    return removedRule;
  }
}

export function removedRulesFromCycleAndCycles(context) {
  const cycle = context.getCycle(),
        cycleLength = context.getCycleLength(),
        removedRules = context.getRemovedRules();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const cycleIndirectlyRepeatable = isCycleIndirectlyRepeatable(context);

      if (cycleIndirectlyRepeatable) {
        const indirectlyRepeatedIndirectCycle = cycle,  ///
              removedRule = RemovedRule.fromIndirectlyRepeatedIndirectCycle(indirectlyRepeatedIndirectCycle, context);

        removedRules.push(removedRule);
      }

      break;
    }
  }

  return removedRules;
}
