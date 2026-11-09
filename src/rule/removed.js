"use strict";

import { Rule } from "occam-parsers";

import { CYCLE_LENGTH_2 } from "../constants";

export default class RemovedRule extends Rule {
  static fromIndirectRule(indirectRule, context) {
    const indirectRuleName = indirectRule.getName(),
          name = indirectRuleName, ///
          opacity = null,
          definitions = [],
          removedRule = new RemovedRule(name, opacity, definitions);

    return removedRule;
  }
}

export function removedRulesFromCycleAndCycles(context, removedRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const indirectRule = context.getIndirectRule(),
            removedRule = RemovedRule.fromIndirectRule(indirectRule, context);

      removedRules.push(removedRule);

      break;
    }
  }

  return removedRules;
}
