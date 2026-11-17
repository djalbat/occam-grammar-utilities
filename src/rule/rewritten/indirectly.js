"use strict";

import { Rule } from "occam-parsers";

import RewrittenNode from "../../node/rewritten";
import IndirectlyRewrittenDefinition from "../../definition/rewritten/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { rewrittenRuleNameFromRuleName } from "../../utilities/ruleName";

export default class IndirectlyRewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode; ///

    return NonTerminalNode;
  }

  static fromIndirectRuleAndRule(indirectRule, rule, context) {
    const ruleName = rule.getName(),
          indirectRuleName = indirectRule.getName(),
          directlyRewrittenDefinition = IndirectlyRewrittenDefinition.fromIndirectRuleName(indirectRuleName, context),
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = rule.getOpacity(),
          definitions = [
            directlyRewrittenDefinition
          ],
          indirectlyRewrittenRule = new IndirectlyRewrittenRule(name, opacity, definitions);

    return indirectlyRewrittenRule;
  }
}

export function indirectlyRewrittenRulesFromCycleAndCycles(context, indirectlyRewrittenRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectRule = context.getIndirectRule(),
            indirectlyRewrittenRule = IndirectlyRewrittenRule.fromIndirectRuleAndRule(indirectRule, rule, context);

      indirectlyRewrittenRules.push(indirectlyRewrittenRule);

      break;
    }
  }

  return indirectlyRewrittenRules;
}
