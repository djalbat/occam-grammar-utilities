"use strict";

import RuleOperation from "../ruleOperation";
import DirectlyReducedRule from "../rule/reduced/directly";

import { directlyReducedRuleNameFromRuleName } from "../utilities/ruleName";

export default class DirectlyReduceRuleOperation extends RuleOperation {
  constructor(rule, disallowIsolated) {
    super(rule);

    this.disallowIsolated = disallowIsolated;
  }

  apply(context) {
    const { ruleMap, directlyLeftRecursiveDefinitions, indirectlyLeftRecursiveDefinitions } = context,
          leftRecursiveDefinitions = [
            ...directlyLeftRecursiveDefinitions,
            ...indirectlyLeftRecursiveDefinitions
          ],
          directlyReducedRule = DirectlyReducedRule.fromRuleDisallowIsolatedAndLeftRecursiveDefinitions(this.rule, this.disallowIsolated, leftRecursiveDefinitions);

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
