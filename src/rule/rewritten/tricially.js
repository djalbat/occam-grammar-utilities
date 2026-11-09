"use strict";

import { Rule } from "occam-parsers";

import TriviallyRewrittenNode from "../../node/rewritten/trivially";

import { CYCLE_LENGTH_2 } from "../../constants";
import { rewrittenRuleNameFromRuleName } from "../../utilities/ruleName";
import { triviallyRewrittenDefinitionsFromDefinitions } from "../../definition/rewritten/trivially";

export default class TriviallyRewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = TriviallyRewrittenNode; ///

    return NonTerminalNode;
  }

  static fromIndirectRule(indirectRule, context) {
    let definitions;

    definitions = indirectRule.getDefinitions();

    const triviallyRewrittenDefinitions = triviallyRewrittenDefinitionsFromDefinitions(definitions, context);

    definitions = triviallyRewrittenDefinitions; ///

    const indirectRuleName = indirectRule.getName(),
          ruleName = indirectRuleName,  ///
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName,  ///
          opacity = indirectRule.getOpacity(),
          triviallyRewrittenRule = new TriviallyRewrittenRule(name, opacity, definitions);

    return triviallyRewrittenRule;
  }
}

export function triviallyRewrittenRulesFromCycleAndCycles(context, rewrittenRules = []) {
  const cycleLength = context.getCycleLength();

  let triviallyRewrittenRule;

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {

      break;
    }
  }

  return rewrittenRules;
}
