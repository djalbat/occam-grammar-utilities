"use strict";

import { Rule } from "occam-parsers";

import RewrittenNode from "../../node/rewritten";
import DirectlyRewrittenDefinition from "../../definition/rewritten/directly";

import { CYCLE_LENGTH_1 } from "../../constants";
import { rewrittenRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyRewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode; ///

    return NonTerminalNode;
  }

  static fromRule(rule, context) {
    const ruleName = rule.getName(),
          directlyRewrittenDefinition = DirectlyRewrittenDefinition.fromRuleName(ruleName, context),
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = rule.getOpacity(),
          definitions = [
            directlyRewrittenDefinition
          ],
          directlyRewrittenRule = new DirectlyRewrittenRule(name, opacity, definitions);

    return directlyRewrittenRule;
  }
}

export function directlyRewrittenRulesFromCycleAndCycles(context, directlyRewrittenRules = []) {
  const leftRecursiveCycleLength = context.getLeftRecursiveCycleLength();

  switch (leftRecursiveCycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            directlyRewrittenRule = DirectlyRewrittenRule.fromRule(rule, context);

      directlyRewrittenRules.push(directlyRewrittenRule);

      break;
    }
  }

  return directlyRewrittenRules;
}
