"use strict";

import RuleOperation from "../ruleOperation";
import DirectlyRepeatedRule from "../rule/repeated/directly";

import { directlyRepeatedRuleNameFromRuleName } from "../utilities/ruleName";

export default class DirectlyRepeatRuleOperation extends RuleOperation {
  apply(context) {
    const { ruleMap, directlyLeftRecursiveDefinitions } = context,
          directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndDirectlyLeftRecursiveDefinitions(this.rule, directlyLeftRecursiveDefinitions);

    if (directlyRepeatedRule !== null) {
      const directlyRepeatedRuleName = directlyRepeatedRule.getName();

      ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
    }
  }

  retrieve(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          ruleName = rule.getName(),
          directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          directlyRepeatedRule = ruleMap[directlyRepeatedRuleName] || null;

    return directlyRepeatedRule;
  }

  compare(directlyRepeatRuleOperation) {
    const rule = this.getRule(),
          directlyRepeatRuleOperationRule = directlyRepeatRuleOperation.getRule(),
          comparesTo = (rule === directlyRepeatRuleOperationRule);

    return comparesTo;
  }

  static execute(directlyLeftRecursiveDefinition, context) {
    const rule = directlyLeftRecursiveDefinition.getRule(),
          directlyRepeatRuleOperation = new DirectlyRepeatRuleOperation(rule),
          directlyRepeatedRule = directlyRepeatRuleOperation.execute(context);

    return directlyRepeatedRule;
  }
}
