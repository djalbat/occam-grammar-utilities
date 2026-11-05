"use strict";

const { rulesUtilities } = require("occam-parsers");

const { ruleMapFromRules } = rulesUtilities;

class Context {
  constructor(ruleMap) {
    this.ruleMap = ruleMap;
  }

  getRuleMap() {
    return this.ruleMap;
  }

  static fromRules(rules) {
    const ruleMap = ruleMapFromRules(rules),
          context = new Context(ruleMap);

    return context;
  }
}

module.exports = Context;
