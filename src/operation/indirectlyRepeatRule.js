"use strict";

import Operation from "../operation";
import IndirectlyRepeatedRule from "../rule/repeated/indirectly";

import { findIndirectlyLeftRecursiveDefinitions } from "../utilities/context";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleName";

export default class IndirectlyRepeatRuleOperation extends Operation {
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
  }

  retrieve(context) {
    const { ruleMap } = context,
          rule = this.getRule(),
          ruleName = rule.getName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, this.leftRecursiveRuleName),
          indirectlyRepeatedRule = ruleMap[indirectlyRepeatedRuleName] || null;

    return indirectlyRepeatedRule;
  }

  compare(indirectlyRepeatRuleOperation) {
    const rule = this.getRule(),
          indirectlyRepeatRuleOperationRule = indirectlyRepeatRuleOperation.getRule(),
          indirectlyRepeatRuleOperationLeftRecursiveRuleName = indirectlyRepeatRuleOperation.getLeftRecursiveRuleName(),
          comparesTo = ((rule === indirectlyRepeatRuleOperationRule) && (this.leftRecursiveRuleName === indirectlyRepeatRuleOperationLeftRecursiveRuleName));

    return comparesTo;
  }

  static execute(indirectlyLeftRecursiveDefinition, context) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          indirectlyRepeatRuleOperation = new IndirectlyRepeatRuleOperation(rule, leftRecursiveRuleName, ),
          indirectlyRepeatedRule = indirectlyRepeatRuleOperation.execute(context);

    return indirectlyRepeatedRule;
  }
}
