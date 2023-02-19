"use strict";

import RuleOperation from "../../operation/rule";
import DirectlyRepeatedRule from "../../rule/repeated/directly";

import { findDirectlyLeftRecursiveDefinitions } from "../../utilities/context";
import { directlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyRepeatedRuleOperation extends RuleOperation {
  apply(directlyLeftRecursiveDefinition, context) {
    const { ruleMap } = context,
          rule = directlyLeftRecursiveDefinition.getRule(),
          directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, context),
          directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions, context);

    if (directlyRepeatedRule !== null) {
      const directlyRepeatedRuleName = directlyRepeatedRule.getName();

      ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
    }

    return directlyRepeatedRule;
  }

  retrieve(directlyLeftRecursiveDefinition, context) {
    const { ruleMap } = context,
          rule = directlyLeftRecursiveDefinition.getRule(),
          ruleName = rule.getName(),
          directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          directlyRepeatedRule = ruleMap[directlyRepeatedRuleName] || null;

    return directlyRepeatedRule;
  }

  static execute(directlyLeftRecursiveDefinition, context) {
    const rule = directlyLeftRecursiveDefinition.getRule(),
          directlyRepeatedRuleOperation = new DirectlyRepeatedRuleOperation(rule),
          directlyRepeatedRule = directlyRepeatedRuleOperation.execute(directlyLeftRecursiveDefinition, context);

    return directlyRepeatedRule;
  }
}
