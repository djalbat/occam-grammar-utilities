'use strict';

const definitionUtilities = require('../utilities/definition');

const { ruleNamesFromDefinition, leftRecursiveRuleNameFromDefinition } = definitionUtilities;

class RecursiveDefinition {
  constructor(definition, ruleName, recursiveRuleNames, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition) {
    this.definition = definition;

    this.ruleName = ruleName;
    this.recursiveRuleNames = recursiveRuleNames;
    this.leftRecursiveRuleName = leftRecursiveRuleName;
    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  getDefinition() {
    return this.definition;
  }

  getRuleName() {
    return this.ruleName;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
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
    const strictlyLeftRecursive = (this.leftRecursiveRuleName === this.ruleName);

    return strictlyLeftRecursive;
  }

  setIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition) {
    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  static fromDefinitionAndRuleName(definition, ruleName) {
    let recursiveDefinition = null;

    const ruleNames = ruleNamesFromDefinition(definition),
          recursiveRuleNames = ruleNames, ///
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursive = (recursiveRuleNamesLength > 0);

    if (definitionRecursive) {
      const leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
            indirectlyLeftRecursiveDefinition = null; ///

      recursiveDefinition = new RecursiveDefinition(definition, ruleName, recursiveRuleNames, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition);
    }

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
