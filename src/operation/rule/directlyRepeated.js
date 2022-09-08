"use strict";

import RuleOperation from "../../operation/rule";
import DirectlyRepeatedRule from "../../rule/repeated/directly";

import { findDirectlyLeftRecursiveDefinitions } from "../../utilities/context";
import { directlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyRepeatedRuleOperation extends RuleOperation {
  apply(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, context),
          directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions);

    if (directlyRepeatedRule !== null) {
      const directlyRepeatedRuleName = directlyRepeatedRule.getName();

      ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
    }

    return directlyRepeatedRule;
  }

  retrieve(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          ruleName = rule.getName(),
          directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          directlyRepeatedRule = ruleMap[directlyRepeatedRuleName] || null;

    return directlyRepeatedRule;
  }

  static execute(directlyLeftRecursiveDefinition, context) {
    const rule = directlyLeftRecursiveDefinition.getRule(),
          directlyRepeatedRuleOperation = new DirectlyRepeatedRuleOperation(rule),
          directlyRepeatedRule = directlyRepeatedRuleOperation.execute(context);

    return directlyRepeatedRule;
  }
}
