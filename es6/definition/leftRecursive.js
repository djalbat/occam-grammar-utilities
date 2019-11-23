'use strict';

const definitionUtilities = require('../utilities/definition'),
      RecursiveDefinition = require('../definition/recursive');

const { recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } = definitionUtilities;

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

  static fromRuleNameAndDefinition(ruleName, definition) {
    let leftRecursiveDefinition = null;

    const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = (leftRecursiveRuleNamesLength > 0);

    if (definitionLeftRecursive) {
      const parts = definition.getParts(),
            recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

      leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return leftRecursiveDefinition;
  }
}

module.exports = LeftRecursiveDefinition;
