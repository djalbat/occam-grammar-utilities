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

  static fromRule(rule, context) {
    const ruleName = rule.getName(),
          directlyRewrittenDefinition = DirectlyRewrittenDefinition.fromRuleName(ruleName, context),
          rewrittenRuleName = directlyRewrittenRuleNameFromRuleName(ruleName),
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
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            directlyRewrittenRule = DirectlyRewrittenRule.fromRule(rule, context);

      directlyRewrittenRules.push(directlyRewrittenRule);

      break;
    }
  }

  return directlyRewrittenRules;
}
