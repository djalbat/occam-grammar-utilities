'use strict';

const parsers = require('occam-parsers');

const definitionUtilities = require('../utilities/definition');

const { Definition } = parsers,
      { recursiveRuleNamesFromDefinition } = definitionUtilities;

class RecursiveDefinition extends Definition {
  constructor(parts, ruleName, recursiveRuleNames) {
    super(parts);

    this.ruleName = ruleName;

    this.recursiveRuleNames = recursiveRuleNames;
  }

  getRuleName() {
    return this.ruleName;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
  }

  isLeftRecursive() {
    const leftRecursive = false;

    return leftRecursive;
  }

  rewrite(rules) {
    ///
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let recursiveDefinition = null;

    const parts = definition.getParts(),
          recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursiveDefinition = (recursiveRuleNamesLength > 0);

    if (definitionRecursiveDefinition) {
      recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);
    }

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
