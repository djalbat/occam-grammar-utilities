"use strict";

import { Rule } from "occam-parsers";

import IndirectlyReducedNode from "../../node/reduced/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { isRuleReducible } from "../../utilities/rule";
import { indirectlyReducedDefinitionsFromDefinitions } from "../../definition/reduced/indirectly";
import { indirectlyReducedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyReducedNode;  ///

    return NonTerminalNode;
  }

  static fromIndirectRule(indirectRule, context) {
    const indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = indirectRule.getDefinitions();

    const indirectlyReducedDefinitions = indirectlyReducedDefinitionsFromDefinitions(definitions, context),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromIndirectRuleName(indirectRuleName),
          name = indirectlyReducedRuleName, ///
          opacity = indirectRule.getOpacity();

    definitions = indirectlyReducedDefinitions; ///

    const indirectlyReducedRule = new IndirectlyReducedRule(name, opacity, definitions);

    return indirectlyReducedRule;
  }
}

export function indirectlyReducedRulesFromCycleAndCycles(context, indirectlyReducedRules = []) {
  const leftRecursiveCycleLength = context.getLeftRecursiveCycleLength();

  switch (leftRecursiveCycleLength) {
    case CYCLE_LENGTH_2: {
      const indirectRule = context.getIndirectRule(),
            indirectRuleReducible = isRuleReducible(indirectRule, context);

      if (indirectRuleReducible) {
        const indirectlyReducedRule = IndirectlyReducedRule.fromIndirectRule(indirectRule, context);

        indirectlyReducedRules.push(indirectlyReducedRule);
      }

      break;
    }
  }

  return indirectlyReducedRules;
}
