"use strict";

import { Rule } from "occam-parsers";

import IndirectlyRepeatedNode from "../../node/repeated/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { indirectlyRepeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";
import { indirectlyRepeatedDefinitionsFromDefinitionsAndRuleName, indirectlyRepeatedDefinitionsFromDefinitionsIndirectRuleNameAndRuleName } from "../../definition/repeated/indirectly";

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyRepeatedNode; ///

    return NonTerminalNode;
  }

  static fromRule(rule, context) {
    const ruleName = rule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    const indirectlyRepeatedDefinitions = indirectlyRepeatedDefinitionsFromDefinitionsAndRuleName(definitions, ruleName, context),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleName(ruleName),
          name = indirectlyRepeatedRuleName, ///
          opacity = rule.getOpacity();

    definitions = indirectlyRepeatedDefinitions;  ///

    const indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, opacity, definitions);

    return indirectlyRepeatedRule;
  }

  static fromIndirectRuleAndRule(indirectRule, rule, context) {
    const ruleName = rule.getName(),
          indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    const indirectlyRepeatedDefinitions = indirectlyRepeatedDefinitionsFromDefinitionsIndirectRuleNameAndRuleName(definitions, indirectRuleName, ruleName, context),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName),
          name = indirectlyRepeatedRuleName, ///
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
