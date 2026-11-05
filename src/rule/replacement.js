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

  static fromIndirectRuleName(indirectRuleName, context) {
    const indirectRule = context.getIndirectRule(),
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

  let replacementRule;

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const ruleName = context.getRuleName();

      replacementRule = ReplacementRule.fromRuleName(ruleName, context);

      replacementRules.push(replacementRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const ruleName = context.getRuleName();

      replacementRule = ReplacementRule.fromRuleName(ruleName, context);

      replacementRules.push(replacementRule);

      const rule = context.getRule(),
            ruleSingular = isRuleSingular(rule, context);

      if (!ruleSingular) {
        const indirectRuleName = context.getIndirectRuleName();

        replacementRule = ReplacementRule.fromIndirectRuleName(indirectRuleName, context);

        replacementRules.push(replacementRule);
      }

      break;
    }
  }

  return replacementRules;
}
