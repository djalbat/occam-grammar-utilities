'use strict';

const LeftRecursiveDefinition = require('../../definition/leftRecursive');

class ImplicitlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  static fromLeftRecursiveDefinition(leftRecursiveDefinition) {
    const ruleName = leftRecursiveDefinition.getRuleName(),
          definition = leftRecursiveDefinition.getDefinition(),
          recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(),
          leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames(),
          parts = definition.getParts(),
          implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);

    return implicitlyLeftRecursiveDefinition;
  }
}

module.exports = ImplicitlyLeftRecursiveDefinition;
