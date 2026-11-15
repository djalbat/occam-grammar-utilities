"use strict";

import { Rule } from "occam-parsers";

import IndirectlyRewrittenNode from "../../node/rewritten/indirectly";
import IndirectlyRewrittenDefinition from "../../definition/rewritten/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { isRuleRepeatable } from "../../utilities/rule";
import { indirectlyRewrittenRuleNameFromRuleName } from "../../utilities/ruleName";

export default class IndirectlyRewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyRewrittenNode; ///

    return NonTerminalNode;
  }

  static fromIndirectRuleAndRule(indirectRule, rule, context) {
    const ruleName = rule.getName(),
          indirectRuleName = indirectRule.getName(),
          directlyRewrittenDefinition = IndirectlyRewrittenDefinition.fromIndirectRuleName(indirectRuleName, context),
          indirectlyRewrittenRuleName = indirectlyRewrittenRuleNameFromRuleName(ruleName),
          name = indirectlyRewrittenRuleName, ///
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

  let indirectlyRewrittenRule;

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const indirectRule = context.getIndirectRule(),
            indirectRuleRepeatable = isRuleRepeatable(indirectRule, context);

      if (!indirectRuleRepeatable) {
        const rule = context.getRule();

        indirectlyRewrittenRule = IndirectlyRewrittenRule.fromIndirectRuleAndRule(indirectRule, rule, context);

        indirectlyRewrittenRules.push(indirectlyRewrittenRule);
      }

      break;
    }
  }

  return indirectlyRewrittenRules;
}
