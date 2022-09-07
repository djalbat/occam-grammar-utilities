"use strict";

import RuleOperation from "../ruleOperation";
import IndirectlyReducedRule from "../rule/reduced/indirectly";

import { indirectlyReducedRuleNameFromRuleName } from "../utilities/ruleName";

export default class IndirectlyReduceRuleOperation extends RuleOperation {
  apply(context) {
    const { ruleMap, indirectlyLeftRecursiveDefinitions } = context,
          indirectlyReducedRule = IndirectlyReducedRule.fromRuleAndIndirectlyLeftRecursiveDefinitions(this.rule, indirectlyLeftRecursiveDefinitions);

    if (indirectlyReducedRule !== null) {
      const indirectlyReducedRuleName = indirectlyReducedRule.getName();

      ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;
    }
  }

  retrieve(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          ruleName = rule.getName(),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleName(ruleName),
          indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || null;

    return indirectlyReducedRule;
  }

  compare(indirectlyReduceRuleOperation) {
    const rule = this.getRule(),
          indirectlyReduceRuleOperationRule = indirectlyReduceRuleOperation.getRule(),
          comparesTo = (rule === indirectlyReduceRuleOperationRule);

    return comparesTo;
  }

  static execute(indirectlyLeftRecursiveDefinition, context) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          indirectlyReduceRuleOperation = new IndirectlyReduceRuleOperation(rule),
          indirectlyReducedRule = indirectlyReduceRuleOperation.execute(context);

    return indirectlyReducedRule;
  }
}
