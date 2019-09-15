'use strict';

const definitionUtilities = require('../utilities/definition');

const { isDefinitionRecursive, leftRecursiveRuleNameFromDefinition } = definitionUtilities;

class RecursiveDefinition {
  constructor(ruleName, definition, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition) {
    this.ruleName = ruleName;
    this.definition = definition;
    this.leftRecursiveRuleName = leftRecursiveRuleName;
    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  getRuleName() {
    return this.ruleName;
  }

  getDefinition() {
    return this.definition;
  }

  getLeftRecursiveRuleName() {
    return this.leftRecursiveRuleName;
  }

  getIndirectlyLeftRecursiveDefinition() {
    return this.indirectlyLeftRecursiveDefinition;
  }

  isLeftRecursive() {
    const leftRecursive = (this.leftRecursiveRuleName !== null);

    return leftRecursive;
  }

  isStrictlyLeftRecursive() {
    const strictlyLeftRecursive = (this.ruleName === this.leftRecursiveRuleName);

    return strictlyLeftRecursive;
  }

  setIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition) {
    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  static fromDefinitionAndRuleName(definition, ruleName) {
    let recursiveDefinition = null;

    const definitionRecursive = isDefinitionRecursive(definition);

    if (definitionRecursive) {
      const leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
            indirectlyLeftRecursiveDefinition = null; ///

      recursiveDefinition = new RecursiveDefinition(ruleName, definition, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition);
    }

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
