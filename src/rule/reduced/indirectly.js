"use strict";

import { Rule } from "occam-parsers";

import IndirectlyReducedNode from "../../node/reduced/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { isRuleSingular, isRuleReducible } from "../../utilities/rule";
import { indirectlyReducedDefinitionsFromDefinitions } from "../../definition/reduced/indirectly";
import { indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyReducedNode;  ///

    return NonTerminalNode;
  }

  static fromIndirectlySiingularIndirectRuleAndRule(indirectlyReducibleIndirectRule, rule, context) {
    const ruleName = rule.getName(),
          indirectRule = indirectlyReducibleIndirectRule,  ///
          indirectRuleName = indirectRule.getName();

    let definitions;

    definitions = indirectRule.getDefinitions();

    const indirectlyReducedDefinitions = indirectlyReducedDefinitionsFromDefinitions(definitions, context),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          name = indirectlyReducedRuleName, ///
          opacity = indirectRule.getOpacity();

    definitions = indirectlyReducedDefinitions; ///

    const indirectlyReducedRule = new IndirectlyReducedRule(name, opacity, definitions);

    return indirectlyReducedRule;
  }
}

export function indirectlyReducedRulesFromCycleAndCycles(context, indirectlyReducedRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const indirectRule = context.getIndirectRule(),
            indirectRuleSingular = isRuleSingular(indirectRule, context),
            indirectRuleReducible = isRuleReducible(indirectRule, context);

      if (indirectRuleSingular && indirectRuleReducible) {
        const rule = context.getRule(),
              indirectlySingularIndirectRule = indirectRule, ///
              indirectlyReducedRule = IndirectlyReducedRule.fromIndirectlySiingularIndirectRuleAndRule(indirectlySingularIndirectRule, rule, context);

        indirectlyReducedRules.push(indirectlyReducedRule);
      }

      break;
    }
  }

  return indirectlyReducedRules;
}
