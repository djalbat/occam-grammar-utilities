"use strict";

import { Rule } from "occam-parsers";

import RepeatedNode from "../../node/repeated";

import { CYCLE_LENGTH_2 } from "../../constants";
import { repeatedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";
import { indirectlyRepeatedDefinitionsFromDefinitionsIndirectRuleNameAndRuleName } from "../../definition/repeated/indirectly";

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RepeatedNode; ///

    return NonTerminalNode;
  }

  static fromIndirectRuleAndRule(indirectRule, rule, context) {
    const ruleName = rule.getName(),
          indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    const indirectlyRepeatedDefinitions = indirectlyRepeatedDefinitionsFromDefinitionsIndirectRuleNameAndRuleName(definitions, indirectRuleName, ruleName, context),
          repeatedRuleName = repeatedRuleNameFromIndirectRuleName(indirectRuleName),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity();

    definitions = indirectlyRepeatedDefinitions;  ///

    const indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions);

    return indirectlyRepeatedRule;
  }
}

export function indirectlyRepeatedRulesFromCycleAndCycles(context, indirectlyRepeatedRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectRule = context.getIndirectRule(),
            indirectlyRepeatedRule = IndirectlyRepeatedRule.fromIndirectRuleAndRule(indirectRule, rule, context);

      indirectlyRepeatedRules.push(indirectlyRepeatedRule);

      break;
    }
  }

  return indirectlyRepeatedRules;
}
