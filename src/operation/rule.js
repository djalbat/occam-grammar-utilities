"use strict";

import Operation from "../operation";

export default class RuleOperation extends Operation {
  constructor(rule) {
    super();

    this.rule = rule;
  }

  getRule() {
    return this.rule;
  }

  compare(ruleOperation) {
    const rule = ruleOperation.getRule(),
          comparesTo = (this.rule === rule);

    return comparesTo;
  }
}
