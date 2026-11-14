"use strict";

import { Rule } from "occam-parsers";

import DirectlyRepeatedNode from "../../node/repeated/directly";

import { CYCLE_LENGTH_1 } from "../../constants";
import { isRuleRepeatable } from "../../utilities/rule";
import { directlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";
import { directlyRepeatedDefinitionsFromDefinitions } from "../../definition/repeated/directly";

export default class DirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = DirectlyRepeatedNode; ///

    return NonTerminalNode;
  }

  static fromDirectlyRepeatableRule(directlyRepeatableRule, context) {
    const rule = directlyRepeatableRule,  ///
          ruleName = rule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    const directlyRepeatedDefinitions = directlyRepeatedDefinitionsFromDefinitions(definitions, ruleName, context),
          directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          name = directlyRepeatedRuleName, ///
          opacity = rule.getOpacity();

    definitions = directlyRepeatedDefinitions;  ///

    const directlyRepeatedRule = new DirectlyRepeatedRule(name, opacity, definitions);

    return directlyRepeatedRule;
  }
}

export function directlyRepeatedRulesFromCycleAndCycles(context, directlyRepeatedRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            ruleRepeatable = isRuleRepeatable(rule, context);

      if (ruleRepeatable) {
        const directlyRepeatableRule = rule,  ///
              directlyRepeatedRule = DirectlyRepeatedRule.fromDirectlyRepeatableRule(directlyRepeatableRule, context);

        directlyRepeatedRules.push(directlyRepeatedRule);
      }

      break;
    }
  }

  return directlyRepeatedRules;
}
