"use strict";

export default class RuleOperation {
  constructor(rule) {
    this.rule = rule;
  }

  getRule() {
    return this.rule;
  }

  isEqualTo(ruleOperation) {
    let equalTo = false;

    const { constructor } = this,
          operationIndirectlyReduceRuleOperation = (ruleOperation instanceof constructor);

    if (operationIndirectlyReduceRuleOperation) {
      const comparesTo = this.compare(ruleOperation);

      equalTo = comparesTo; ///
    }

    return equalTo;
  }

  execute(context) {
    const { ruleOperations } = context;

    let ruleOperation = this.find(context);

    if (ruleOperation === null) {
      ruleOperation = this;  ///

      ruleOperations.push(ruleOperation);

      ruleOperation.apply(context);
    }

    const result = ruleOperation.retrieve(context);

    return result;
  }

  find(context) {
    const { ruleOperations } = context,
          ruleOperation = ruleOperations.find((ruleOperation) => {
            const equalTo = this.isEqualTo(ruleOperation);

            if (equalTo) {
              return true;
            }
          }) || null;

    return ruleOperation;
  }
}
