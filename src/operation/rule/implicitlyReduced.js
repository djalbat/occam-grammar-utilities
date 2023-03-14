"use strict";

import RuleOperation from "../../operation/rule";
import ImplicitlyReducedRule from "../../rule/reduced/implicitly";

export default class ImplicitlyReducedRuleOperation extends RuleOperation {
  constructor(leftRecursiveDefinition, rule) {
    super(rule);

    this.leftRecursiveDefinition = leftRecursiveDefinition;
  }

  getLeftRecursiveDefinition() {
    return this.leftRecursiveDefinition;
  }

  compare(implicitlyReducedRuleOperation) {
    const comparesTo = false; ///

    return comparesTo;
  }

  apply(leftRecursiveDefinition, rule, context) {
    const { ruleMap } = context,
          implicitlyReducedRule = ImplicitlyReducedRule.fromLeftRecursiveDefinitionAndRule(leftRecursiveDefinition, rule),
          implicitlyReducedRuleName = implicitlyReducedRule.getName();

    ruleMap[implicitlyReducedRuleName] = implicitlyReducedRule;

    return implicitlyReducedRule;
  }

  retrieve(leftRecursiveDefinition, rule, context) {
    const implicitlyReducedRule = null;

    return implicitlyReducedRule;
  }

  static execute(leftRecursiveDefinition, rule, context) {
    const implicitlyReducedRuleOperation = new ImplicitlyReducedRuleOperation(leftRecursiveDefinition, rule),
          implicitlyReducedRule = implicitlyReducedRuleOperation.execute(leftRecursiveDefinition, rule, context);

    return implicitlyReducedRule;
  }
}
