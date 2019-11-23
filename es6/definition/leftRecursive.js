'use strict';

const RecursiveDefinition = require('../definition/recursive');

class LeftRecursiveDefinition extends RecursiveDefinition {
  constructor(parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    super(parts, ruleName, recursiveRuleNames);

    this.definition = definition;

    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getDefinition() {
    return this.definition;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
  }

  isLeftRecursive() {
    const leftRecursive = true;

    return leftRecursive;
  }
}

module.exports = LeftRecursiveDefinition;
