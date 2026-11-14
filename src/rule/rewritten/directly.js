"use strict";

import { Rule } from "occam-parsers";

import DirectlyRewrittenNode from "../../node/rewritten/directly";
import DirectlyRewrittenDefinition from "../../definition/rewritten/directly";

import { CYCLE_LENGTH_1 } from "../../constants";
import { directlyRewrittenRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyRewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = DirectlyRewrittenNode; ///

    return NonTerminalNode;
  }

  static fromDirectlyRepeatableRule(directlyRepeatableRule, context) {
    const rule = directlyRepeatableRule,  ///
          ruleName = rule.getName(),
          directlyRewrittenDefinition = DirectlyRewrittenDefinition.fromRuleName(ruleName, context),
          rewrittenRuleName = directlyRewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = rule.getOpacity(),
          definitions = [
            directlyRewrittenDefinition
          ],
          rewrittenRule = new DirectlyRewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}

export function directlyRewrittenRulesFromCycleAndCycles(context, rewrittenRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            directlyRepeatableRule = rule,  ///
            rewrittenRule = DirectlyRewrittenRule.fromDirectlyRepeatableRule(directlyRepeatableRule, context);

      rewrittenRules.push(rewrittenRule);

      break;
    }
  }

  return rewrittenRules;
}
