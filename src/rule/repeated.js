"use strict";

import { Rule } from "occam-parsers";

import RepeatedNode from "../node/repeated";

import { isRuleIndirectlyRepeatable } from "../utilities/rule";
import { repeatedRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { repeatedDefinitionsFromDefinitions } from "../definition/repeated";
import { intermediateRepeatedDefinitionsFromDefinitions } from "../definition/repeated/intermediate";

export default class RepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RepeatedNode; ///

    return NonTerminalNode;
  }

  static fromDirectlyRepeatableRule(directlyRepeatableRule, context) {
    const rule = directlyRepeatableRule,  ///
          ruleName = rule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    const repeatedDefinitions = repeatedDefinitionsFromDefinitions(definitions, context),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity();

    definitions = repeatedDefinitions;  ///

    const repeatedRule = new RepeatedRule(name, opacity, definitions);

    return repeatedRule;
  }

  static fromIndirectlyRepeatableRule(directlyRepeatableIndirectCycle, context) {
    const rule = directlyRepeatableIndirectCycle, ///
          ruleName = rule.getName(),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName);

    let definitions;

    definitions = rule.getDefinitions();

    const intermediateRepeatedDefinitions = intermediateRepeatedDefinitionsFromDefinitions(definitions, context),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity();

    definitions = intermediateRepeatedDefinitions;  ///

    const repeatedRule = new RepeatedRule(name, opacity, definitions);

    return repeatedRule;
  }
}

export function repeatedRulesFromCycleAndCycles(context, repeatedRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            directlyRepeatableRule = rule,  ///
            repeatedRule = RepeatedRule.fromDirectlyRepeatableRule(directlyRepeatableRule, context);

      repeatedRules.push(repeatedRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            ruleIndirectlyRepeatedRule = isRuleIndirectlyRepeatable(rule, context);

      if (ruleIndirectlyRepeatedRule) {
        const directlyRepeatableRule = rule,  ///
              repeatedRule = RepeatedRule.fromIndirectlyRepeatableRule(directlyRepeatableRule, context);

        repeatedRules.push(repeatedRule);
      }

      break;
    }
  }

  return repeatedRules;
}
