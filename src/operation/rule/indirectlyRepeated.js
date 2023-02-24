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

  apply(indirectlyLeftRecursiveDefinition, context) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, (indirectlyLeftRecursiveDefinition) => {
            const indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

            if (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName) {
              return true;
            }
          }, context),
          indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions);

    if (indirectlyRepeatedRule !== null) {
      const { ruleMap } = context,
            indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();

      ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;
    }

    return indirectlyRepeatedRule;
  }

  retrieve(indirectlyLeftRecursiveDefinition, context) {
    const { ruleMap } = context,
          rule = indirectlyLeftRecursiveDefinition.getRule(),
          ruleName = rule.getName(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
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
          indirectlyRepeatedRuleOperation = new IndirectlyRepeatedRuleOperation(rule, leftRecursiveRuleName),
          indirectlyRepeatedRule = indirectlyRepeatedRuleOperation.execute(indirectlyLeftRecursiveDefinition, context);

    return indirectlyRepeatedRule;
  }
}
