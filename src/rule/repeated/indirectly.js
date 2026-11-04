"use strict";

import { Rule } from "occam-parsers";

import IndirectlyRepeatedNode from "../../node/repeated/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { isRuleRepeatable } from "../../utilities/rule";
import { indirectlyRepeatedDefinitionsFromDefinitinos } from "../../definition/repeated/indirectly";
import { indirectlyRepeatedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyRepeatedNode; ///

    return NonTerminalNode;
  }

  static fromIndirectlyRepeatableRule(indirectlyRepeatableRule, context) {
    const indirectRule = context.getIndirectRule(),
          indirectRuleName = context.getIndirectRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName);

    let definitions;

    definitions = indirectRule.getDefinitions();

    const indirectlyRepeatedDefinitions = indirectlyRepeatedDefinitionsFromDefinitinos(definitions, context),
          name = indirectlyRepeatedRuleName, ///
          opacity = indirectRule.getOpacity();

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
            indirectRuleName = context.getIndirectRuleName(),
            ruleRepeatable = isRuleRepeatable(rule, indirectRuleName, context);

      if (ruleRepeatable) {

      }

      break;
    }
  }

  return indirectlyRepeatedRules;
}
