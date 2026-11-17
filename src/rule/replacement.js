"use strict";

import { Rule } from "occam-parsers";

import ReplacementNode from "../node/replacement";
import ReplacementDefinition from "../definition/replacement";

import { isRuleRepeatable } from "../utilities/rule";
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

  static fromIndirectRule(indirectRule, context) {
    const indirectRuleName = indirectRule.getName(),
          replacementDefinition = ReplacementDefinition.fromIndirectRuleName(indirectRuleName),
          name = indirectRuleName, ///
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
            indirectRule = context.getIndirectRule(),
            ruleRepeatable = isRuleRepeatable(rule, context),
            indirectRuleRepeatable = isRuleRepeatable(indirectRule, context);

      if (ruleRepeatable) {
        const replacementRule = ReplacementRule.fromRule(rule, context);

        replacementRules.push(replacementRule);
      }

      if (indirectRuleRepeatable) {
        const replacementRule = ReplacementRule.fromIndirectRule(indirectRule, context);

        replacementRules.push(replacementRule);
      }

      break;
    }
  }

  return replacementRules;
}
