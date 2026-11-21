"use strict";

import { Rule } from "occam-parsers";

import RewrittenNode from "../../node/rewritten";
import IndirectlyRewrittenDefinition from "../../definition/rewritten/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { rewrittenRuleNameFromRuleName } from "../../utilities/ruleName";
import { isRuleReducible, isRuleRepeatable } from "../../utilities/rule";

export default class IndirectlyRewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode; ///

    return NonTerminalNode;
  }

  static fromRule(rule, context) {
    const ruleName = rule.getName(),
          indirectlyRewrittenDefinition = IndirectlyRewrittenDefinition.fromRuleName(ruleName, context),
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = rule.getOpacity(),
          definitions = [
            indirectlyRewrittenDefinition
          ],
          indirectlyRewrittenRule = new IndirectlyRewrittenRule(name, opacity, definitions);

    return indirectlyRewrittenRule;
  }

  static fromRuleAndIndirectRule(rule, indirectRule, context) {
    const ruleName = rule.getName(),
          indirectRuleName = indirectRule.getName(),
          indirectRuleReducible = isRuleReducible(indirectRule, context),
          indirectlyRewrittenDefinition = indirectRuleReducible ?
                                            IndirectlyRewrittenDefinition.fromRuleNameAndIndirectRuleName(ruleName, indirectRuleName, context) :
                                              IndirectlyRewrittenDefinition.fromIndirectRuleNameAndRuleName(indirectRuleName, ruleName, context),
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = rule.getOpacity(),
          definitions = [
            indirectlyRewrittenDefinition
          ],
          indirectlyRewrittenRule = new IndirectlyRewrittenRule(name, opacity, definitions);

    return indirectlyRewrittenRule;
  }
}

export function indirectlyRewrittenRulesFromCycleAndCycles(context, indirectlyRewrittenRules = []) {
  const leftRecursiveCycleLength = context.getLeftRecursiveCycleLength();

  switch (leftRecursiveCycleLength) {
    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectRule = context.getIndirectRule(),
            ruleRepeatable = isRuleRepeatable(rule, context),
            indirectRuleRepeatable = isRuleRepeatable(indirectRule, context);

      if (ruleRepeatable) {
        const indirectlyRewrittenRule = IndirectlyRewrittenRule.fromRuleAndIndirectRule(rule, indirectRule, context);

        indirectlyRewrittenRules.push(indirectlyRewrittenRule);
      }

      if (indirectRuleRepeatable) {
        const indirectlyRewrittenRule = IndirectlyRewrittenRule.fromRule(rule, context);

        indirectlyRewrittenRules.push(indirectlyRewrittenRule);
      }

      break;
    }
  }

  return indirectlyRewrittenRules;
}
