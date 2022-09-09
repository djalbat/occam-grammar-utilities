"use strict";

export default class Operation {
  isEqualTo(operation) {
    let equalTo = false;

    const { constructor } = this;

    if (operation instanceof constructor) {
      const comparesTo = this.compare(operation);

      equalTo = comparesTo; ///
    }

    return equalTo;
  }

  execute(...remainingArguments) {
    const context = remainingArguments.pop();

    let result;

    const { operations } = context;

    let operation = this.find(context);

    if (operation === null) {
      operation = this;  ///

      operations.push(operation);

      result = operation.apply(...remainingArguments, context);
    } else {
      result = operation.retrieve(...remainingArguments, context);
    }

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
