"use strict";

import { Rule } from "occam-parsers";

import ReplacementNode from "../node/replacement";
import ReplacementDefinition from "../definition/replacement";

import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";

export default class ReplacementRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReplacementNode; ///

    return NonTerminalNode;
  }

  static fromRule(rule, context) {
    const ruleName = rule.getName(),
          replacementDefinition = ReplacementDefinition.fromRuleName(ruleName),
          name = ruleName, ///
          opacity = null,
          definitions = [
            replacementDefinition
          ],
          replacementRule = new ReplacementRule(name, opacity, definitions);

    return replacementRule;
  }
}

export function replacementRulesFromCycleAndCycles(context, replacementRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            replacementRule = ReplacementRule.fromRule(rule, context);

      replacementRules.push(replacementRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            replacementRule = ReplacementRule.fromRule(rule, context);

      replacementRules.push(replacementRule);

      break;
    }
  }

  return replacementRules;
}
