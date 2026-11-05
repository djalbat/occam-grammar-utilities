"use strict";

import { Rule } from "occam-parsers";

import IndirectlyRewrittenNode from "../../node/rewritten/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { isRuleRepeatable } from "../../utilities/rule";
import { rewrittenRuleNameFromRuleName } from "../../utilities/ruleName";
import { indiretlyRewrittenDefinitionsFromDefinitions } from "../../definition/rewritten/indirectly";

export default class IndirectlyRewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyRewrittenNode; ///

    return NonTerminalNode;
  }

  static fromIndirectRule(indirectRule, context) {
    let definitions;

    definitions = indirectRule.getDefinitions();

    const indirectlyRewrittenDefinitions = indiretlyRewrittenDefinitionsFromDefinitions(definitions, context);

    definitions = indirectlyRewrittenDefinitions; ///

    const indirectRuleName = indirectRule.getName(),
          ruleName = indirectRuleName,  ///
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName,  ///
          opacity = indirectRule.getOpacity(),
          indirectlyRewrittenRule = new IndirectlyRewrittenRule(name, opacity, definitions);

    return indirectlyRewrittenRule;
  }
}

export function indirectlyRewrittenRulesFromCycleAndCycles(context, rewrittenRules = []) {
  const cycleLength = context.getCycleLength();

  let indirectlyRewrittenRule;

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const indirectRule = context.getIndirectRule(),
            indirectRuleRepeatable = isRuleRepeatable(indirectRule, context);

      if (!indirectRuleRepeatable) {
        indirectlyRewrittenRule = IndirectlyRewrittenRule.fromIndirectRule(indirectRule, context);

        rewrittenRules.push(indirectlyRewrittenRule);
      }

      break;
    }
  }

  return rewrittenRules;
}
