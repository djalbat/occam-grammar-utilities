"use strict";

import { Rule } from "occam-parsers";

import ReplacementNode from "../node/replacement";
import ReplacementDefinition from "../definition/replacement";

import { isRuleSingular } from "../utilities/rule";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";

export default class ReplacementRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReplacementNode; ///

    return NonTerminalNode;
  }

  static fromRule(rule, context) {
    const ruleName = rule.getName(),
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

  static fromIndirectRule(indirectRule, context) {
    const indirectRuleName = indirectRule.getName(),
          replacementDefinition = ReplacementDefinition.fromIndirectRuleName(indirectRuleName),
          definition = replacementDefinition, ///
          name = indirectRuleName, ///
          opacity = indirectRule.getOpacity(),
          definitions = [
            definition
          ],
          replacementRule = new ReplacementRule(name, opacity, definitions);

    return replacementRule;
  }
}

export function replacementRulesFromCycleAndCycles(context) {
  const cycleLength = context.getCycleLength(),
        replacementRules = context.getReplacementRules();

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

      const ruleSingular = isRuleSingular(rule, context);

      if (!ruleSingular) {
        const indirectRule = context.getIndirectRule(),
              replacementRule = ReplacementRule.fromIndirectRule(indirectRule, context);

        replacementRules.push(replacementRule);
      }

      break;
    }
  }

  return replacementRules;
}
