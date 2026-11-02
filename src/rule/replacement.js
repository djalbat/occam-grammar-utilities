"use strict";

import { Rule } from "occam-parsers";

import ReplacementNode from "../node/replacement";
import ReplacementDefinition from "../definition/replacement";

import { isCycleIndirectlyRepeatable } from "../utilities/cycle";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";

export default class ReplacementRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReplacementNode; ///

    return NonTerminalNode;
  }

  static fromRuleName(ruleName, context) {
    const rule = context.getRule(),
          replacementDefinition = ReplacementDefinition.fromRuleName(ruleName),
          definition = replacementDefinition, ///
          name = ruleName, ///
          opacity = rule.getOpacity(),
          definitions = [
            definition
          ],
          replacementRule = new ReplacementRule(name, opacity, definitions);

    return replacementRule;
  }
}

export function replacementRulesFromCycleAndCycles(context) {
  const ruleName = context.getRuleName(),
        cycleLength = context.getCycleLength(),
        replacementRules = context.getReplacementRules();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const replacementRule = ReplacementRule.fromRuleName(ruleName, context);

      replacementRules.push(replacementRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const replacementRule = ReplacementRule.fromRuleName(ruleName, context);

      replacementRules.push(replacementRule);

      const cycleIndirectlyRepeatable = isCycleIndirectlyRepeatable(context);

      if (!cycleIndirectlyRepeatable) {
        const indirectRuleName = context.getIndirectRuleName(),
              ruleName = indirectRuleName,  ///
              replacementRule = ReplacementRule.fromRuleName(ruleName, context);

        replacementRules.push(replacementRule);
      }

      break;
    }
  }

  return replacementRules;
}
