"use strict";

import RuleOperation from "../../operation/rule";
import DirectlyReducedRule from "../../rule/reduced/directly";

import { findLeftRecursiveDefinitions } from "../../utilities/context";
import { directlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyReducedRuleOperation extends RuleOperation {
  apply(directlyLeftRecursiveDefinition, allowIsolated, context) {
    const rule = directlyLeftRecursiveDefinition.getRule(),
          leftRecursiveDefinitions = findLeftRecursiveDefinitions(rule, context),
          directlyReducedRule = DirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, allowIsolated);

    if (directlyReducedRule !== null) {
      const { ruleMap } = context,
            directlyReducedRuleName = directlyReducedRule.getName();

      ruleMap[directlyReducedRuleName] = directlyReducedRule;
    }

    return directlyReducedRule;
  }

  retrieve(directlyLeftRecursiveDefinition, allowIsolated, context) {
    const { ruleMap } = context,
          rule = directlyLeftRecursiveDefinition.getRule(),
          ruleName = rule.getName(),
          directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
          directlyReducedRule = ruleMap[directlyReducedRuleName] || null;

    return directlyReducedRule;
  }

  static execute(directlyLeftRecursiveDefinition, allowIsolated, context) {
    const rule = directlyLeftRecursiveDefinition.getRule(),
          directlyReducedRuleOperation = new DirectlyReducedRuleOperation(rule),
          directlyReducedRule = directlyReducedRuleOperation.execute(directlyLeftRecursiveDefinition, allowIsolated, context);

    return directlyReducedRule;
  }
}
