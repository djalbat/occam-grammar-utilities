"use strict";

import { Rule } from "occam-parsers";

import { CYCLE_LENGTH_2 } from "../constants";
import { isRuleSingular } from "../utilities/rule";

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

export function removedRulesFromCycleAndCycles(context) {
  const cycleLength = context.getCycleLength(),
        removedRules = context.getRemovedRules();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectRuleName = context.getIndirectRuleName(),
            ruleSingular = isRuleSingular(rule, indirectRuleName, context);

      if (ruleSingular) {
        const indirectRule = context.getIndirectRule(),
              removedRule = RemovedRule.fromIndirectRule(indirectRule, context);

        removedRules.push(removedRule);
      }

      break;
    }
  }

  return removedRules;
}
