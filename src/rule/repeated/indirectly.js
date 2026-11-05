"use strict";

import { Rule } from "occam-parsers";

import IndirectlyRepeatedNode from "../../node/repeated/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { isRuleRepeatable } from "../../utilities/rule";
import { indirectlyRepeatedDefinitionsFromDefinitions } from "../../definition/repeated/indirectly";
import { indirectlyRepeatedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyRepeatedNode; ///

    return NonTerminalNode;
  }

  static fromIndirectlyRepeatableIndirectRule(indirectlyRepeatableIndirectRule, context) {
    const indirectRule = indirectlyRepeatableIndirectRule,  ///
          indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = indirectRule.getDefinitions();

    const indirectlyRepeatedDefinitions = indirectlyRepeatedDefinitionsFromDefinitions(definitions, context),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName),
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
      const indirectRule = context.getIndirectRule(),
            indirectRuleRepeatable = isRuleRepeatable(indirectRule, context);

      if (indirectRuleRepeatable) {
        const indirectlyRepeatableIndirectRule = indirectRule,  ///
              indirectlyRepeatedRule = IndirectlyRepeatedRule.fromIndirectlyRepeatableIndirectRule(indirectlyRepeatableIndirectRule, context);

        indirectlyRepeatedRules.push(indirectlyRepeatedRule);
      }

      break;
    }
  }

  return indirectlyRepeatedRules;
}
