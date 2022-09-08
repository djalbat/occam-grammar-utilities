"use strict";

import RuleOperation from "../../operation/rule";
import DirectlyReducedRule from "../../rule/reduced/directly";

import { findLeftRecursiveDefinitions } from "../../utilities/context";
import { directlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyReducedRuleOperation extends RuleOperation {
  constructor(rule, allowIsolated) {
    super(rule);

    this.allowIsolated = allowIsolated;
  }

  apply(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          leftRecursiveDefinitions = findLeftRecursiveDefinitions(rule, context),
          directlyReducedRule = DirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, this.allowIsolated);

    if (directlyReducedRule !== null) {
      const directlyReducedRuleName = directlyReducedRule.getName();

      ruleMap[directlyReducedRuleName] = directlyReducedRule;
    }

    return directlyReducedRule;
  }

  retrieve(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          ruleName = rule.getName(),
          directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
          directlyReducedRule = ruleMap[directlyReducedRuleName] || null;

    return directlyReducedRule;
  }

  static execute(directlyLeftRecursiveDefinition, allowIsolated, context) {
    const rule = directlyLeftRecursiveDefinition.getRule(),
          directlyReducedRuleOperation = new DirectlyReducedRuleOperation(rule, allowIsolated),
          directlyReducedRule = directlyReducedRuleOperation.execute(context);

    return directlyReducedRule;
  }
}
