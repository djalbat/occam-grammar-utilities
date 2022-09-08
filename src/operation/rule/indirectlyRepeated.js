"use strict";

import RuleOperation from "../../operation/rule";
import IndirectlyRepeatedRule from "../../rule/repeated/indirectly";

import { findIndirectlyLeftRecursiveDefinitions } from "../../utilities/context";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";

export default class IndirectlyRepeatedRuleOperation extends RuleOperation {
  constructor(rule, leftRecursiveRuleName) {
    super(rule);

    this.leftRecursiveRuleName = leftRecursiveRuleName;
  }

  getLeftRecursiveRuleName() {
    return this.leftRecursiveRuleName;
  }

  apply(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, (indirectlyLeftRecursiveDefinition) => {
            const indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

            if (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === this.leftRecursiveRuleName) {
              return true;
            }
          }, context),
          indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(rule, this.leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions);

    if (indirectlyRepeatedRule !== null) {
      const indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();

      ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;
    }

    return indirectlyRepeatedRule;
  }

  retrieve(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          ruleName = rule.getName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, this.leftRecursiveRuleName),
          indirectlyRepeatedRule = ruleMap[indirectlyRepeatedRuleName] || null;

    return indirectlyRepeatedRule;
  }

  compare(indirectlyRepeatedRuleOperation) {
    const rule = this.getRule(),
          indirectlyRepeatedRuleOperationRule = indirectlyRepeatedRuleOperation.getRule(),
          indirectlyRepeatedRuleOperationLeftRecursiveRuleName = indirectlyRepeatedRuleOperation.getLeftRecursiveRuleName(),
          comparesTo = ((rule === indirectlyRepeatedRuleOperationRule) && (this.leftRecursiveRuleName === indirectlyRepeatedRuleOperationLeftRecursiveRuleName));

    return comparesTo;
  }

  static execute(indirectlyLeftRecursiveDefinition, context) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          indirectlyRepeatedRuleOperation = new IndirectlyRepeatedRuleOperation(rule, leftRecursiveRuleName, ),
          indirectlyRepeatedRule = indirectlyRepeatedRuleOperation.execute(context);

    return indirectlyRepeatedRule;
  }
}
