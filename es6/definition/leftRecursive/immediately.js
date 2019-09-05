'use strict';

const parsers = require('occam-parsers');

const { Definition } = parsers;

class ImmediatelyLeftRecursiveDefinition extends Definition {
  constructor(parts, ruleName, indirectlyLeftRecursiveDefinition) {
    super(parts);

    this.ruleName = ruleName;

    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  getRuleName() {
    return this.ruleName;
  }

  getIndirectlyLeftRecursiveDefinition() {
    return this.indirectlyLeftRecursiveDefinition;
  }

  static fromLeftRecursiveDefinitionAndIndirectlyLeftRecursiveDefinition(leftRecursiveDefinition, indirectlyLeftRecursiveDefinition) {
    const parts = leftRecursiveDefinition.getParts(),
          ruleName = leftRecursiveDefinition.getRuleName(),
          immediatelyLeftRecursiveDefinition = new ImmediatelyLeftRecursiveDefinition(parts, ruleName, indirectlyLeftRecursiveDefinition);

    return immediatelyLeftRecursiveDefinition;
  }
}

module.exports = ImmediatelyLeftRecursiveDefinition;
