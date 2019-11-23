'use strict';

const parsers = require('occam-parsers');

const { Definition } = parsers;

class LeftRecursiveDefinition extends Definition {
  constructor(parts, ruleName, definition, leftRecursiveRuleNames) {
    super(parts);

    this.ruleName = ruleName;

    this.definition = definition;

    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getRuleName() {
    return this.ruleName;
  }

  getDefinition() {
    return this.definition;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
  }

  static fromRuleNameAndDefinition(Class, ruleName, definition, ...remainingArguments) {
    let leftRecursiveDefinition = null;

    const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = (leftRecursiveRuleNamesLength > 0);

    if (definitionLeftRecursive) {
      const parts = definition.getParts();

      leftRecursiveDefinition = new Class(parts, ruleName, definition, leftRecursiveRuleNames, ...remainingArguments);
    }

    return leftRecursiveDefinition;
  }
}

module.exports = LeftRecursiveDefinition;
