"use strict";

import RuleOperation from "../../operation/rule";
import IndirectlyReducedRule from "../../rule/reduced/indirectly";

import { indirectlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";
import { findIndirectlyLeftRecursiveDefinitions } from "../../utilities/context";

export default class IndirectlyReducedRuleOperation extends RuleOperation {
  apply(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, context),
          indirectlyReducedRule = IndirectlyReducedRule.fromRuleAndIndirectlyLeftRecursiveDefinitions(rule, indirectlyLeftRecursiveDefinitions);

    if (indirectlyReducedRule !== null) {
      const indirectlyReducedRuleName = indirectlyReducedRule.getName();

      ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;
    }

    return indirectlyReducedRule;
  }

  retrieve(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          ruleName = rule.getName(),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleName(ruleName),
          indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || null;

    return indirectlyReducedRule;
  }

  static execute(indirectlyLeftRecursiveDefinition, context) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          indirectlyReducedRuleOperation = new IndirectlyReducedRuleOperation(rule),
          indirectlyReducedRule = indirectlyReducedRuleOperation.execute(context);

    return indirectlyReducedRule;
  }
}
