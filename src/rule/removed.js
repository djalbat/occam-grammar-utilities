"use strict";

import { Rule } from "occam-parsers";

import {indirectRuleNameFromCycle, ruleNameFromCycle} from "../utilities/cycle";
import { isRuleIndirectlyRepeated } from "./repeated/indirectly";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";

export default class RemovedRule extends Rule {
  static fromIndirectRuleName(indirectRuleName, ruleMap) {
    const name = indirectRuleName, ///
          opacity = null,
          definitions = [],
          removedRule = new RemovedRule(name, opacity, definitions);

    return removedRule;
  }
}

export function removedRulesFromCycleAndCycles(cycle, cycles, ruleMap) {
  const removedRules = [],
        cycleLength = cycle.getLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {

      break;
    }

    case CYCLE_LENGTH_2: {
      const ruleName = ruleNameFromCycle(cycle),
            rule = ruleMap[ruleName],
            ruleIndirectlyRepeated = isRuleIndirectlyRepeated(rule, cycle, cycles, ruleMap);

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
