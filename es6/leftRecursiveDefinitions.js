'use strict';

class LeftRecursiveDefinitions {
  constructor(indirectlyLeftRecursiveDefinition, immediatelyLeftRecursiveDefinition) {
    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
    this.immediatelyLeftRecursiveDefinition = immediatelyLeftRecursiveDefinition;
  }

  fromIndirectlyLeftRecursiveDefinitionAndImmediatelyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, immediatelyLeftRecursiveDefinition) {
    const leftRecursiveDefinitions = new LeftRecursiveDefinitions(indirectlyLeftRecursiveDefinition, immediatelyLeftRecursiveDefinition);

    return leftRecursiveDefinitions;
  }
}

module.exports = LeftRecursiveDefinitions;
