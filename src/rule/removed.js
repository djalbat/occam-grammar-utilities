"use strict";

import { Rule } from "occam-parsers";

import { CYCLE_LENGTH_2 } from "../constants";
import { isRuleIndirectlyRepeated } from "./repeated/indirectly";
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

export function removedRulesFromCycleAndCycles(cycle, cycles, ruleMap, removedRules = []) {
  const cycleLength = cycle.getLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const ruleIndirectlyRepeated = isRuleIndirectlyRepeated(cycle, cycles, ruleMap);

      if (ruleIndirectlyRepeated) {
        const indirectRuleName = indirectRuleNameFromCycle(cycle),
              removedRule = RemovedRule.fromIndirectRuleName(indirectRuleName, ruleMap);

        removedRules.push(removedRule);
      }

      break;
    }
  }

  return removedRules;
}
