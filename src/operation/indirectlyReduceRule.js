"use strict";

import Operation from "../operation";
import IndirectlyReducedRule from "../rule/reduced/indirectly";

import { indirectlyReducedRuleNameFromRuleName } from "../utilities/ruleName";
import { findIndirectlyLeftRecursiveDefinitions } from "../utilities/context";

export default class IndirectlyReduceRuleOperation extends Operation {
  apply(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, (indirectlyLeftRecursiveDefinition) => {
            ///

            return true;
          }, context),
          indirectlyReducedRule = IndirectlyReducedRule.fromRuleAndIndirectlyLeftRecursiveDefinitions(rule, indirectlyLeftRecursiveDefinitions);

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
