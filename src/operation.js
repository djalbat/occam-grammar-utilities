"use strict";

export default class Operation {
  constructor(rule) {
    this.rule = rule;
  }

  getRule() {
    return this.rule;
  }

  isEqualTo(operation) {
    let equalTo = false;

    const { constructor } = this;

    if (operation instanceof constructor) {
      const comparesTo = this.compare(operation);

      equalTo = comparesTo; ///
    }

    return equalTo;
  }

  execute(context) {
    const { operations } = context;

    let operation = this.find(context);

    if (operation === null) {
      operation = this;  ///

      operations.push(operation);

      operation.apply(context);
    }

    const result = operation.retrieve(context);

    return result;
  }

  find(context) {
    const { operations } = context,
          operation = operations.find((operation) => {
            const equalTo = this.isEqualTo(operation);

            if (equalTo) {
              return true;
            }
          }) || null;

    return operation;
  }
}
