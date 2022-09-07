"use strict";

import Operation from "../operation";
import DirectlyReducedRule from "../rule/reduced/directly";

import { findLeftRecursiveDefinitions } from "../utilities/context";
import { directlyReducedRuleNameFromRuleName } from "../utilities/ruleName";

export default class DirectlyReduceRuleOperation extends Operation {
  constructor(rule, disallowIsolated) {
    super(rule);

    this.disallowIsolated = disallowIsolated;
  }

  apply(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          leftRecursiveDefinitions = findLeftRecursiveDefinitions(rule, context),
          directlyReducedRule = DirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, this.disallowIsolated);

    if (directlyReducedRule !== null) {
      const directlyReducedRuleName = directlyReducedRule.getName();

      ruleMap[directlyReducedRuleName] = directlyReducedRule;
    }
  }

  retrieve(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          ruleName = rule.getName(),
          directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
          directlyReducedRule = ruleMap[directlyReducedRuleName] || null;

    return directlyReducedRule;
  }

  compare(directlyReduceRuleOperation) {
    const rule = this.getRule(),
          directlyReduceRuleOperationRule = directlyReduceRuleOperation.getRule(),
          comparesTo = (rule === directlyReduceRuleOperationRule);

    return comparesTo;
  }

  static execute(directlyLeftRecursiveDefinition, disallowIsolated, context) {
    const rule = directlyLeftRecursiveDefinition.getRule(),
          directlyReduceRuleOperation = new DirectlyReduceRuleOperation(rule, disallowIsolated),
          directlyReducedRule = directlyReduceRuleOperation.execute(context);

    return directlyReducedRule;
  }
}
