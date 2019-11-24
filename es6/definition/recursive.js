'use strict';

const parsers = require('occam-parsers');

const types = require('../types'),
      ruleUtilities = require('../utilities/rule'),
      definitionUtilities = require('../utilities/definition');

const { findRule } = ruleUtilities,
      { Definition } = parsers,
      { RECURSIVE_TYPE } = types,
      { recursiveRuleNamesFromDefinition } = definitionUtilities;

class RecursiveDefinition extends Definition {
  constructor(type, parts, ruleName, definition, recursiveRuleNames) {
    super(parts);

    this.type = type;

    this.ruleName = ruleName;

    this.definition = definition;

    this.recursiveRuleNames = recursiveRuleNames;
  }

  getType() {
    return this.type;
  }

  getRuleName() {
    return this.ruleName;
  }

  getDefinition() {
    return this.definition;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
  }

  rewrite(rules) {
    ///
  }

  replace(rules) {
    const rule = findRule(this.ruleName, rules),
          replacedDefinition = this.definition,
          replacementDefinition = this; ///

    rule.replaceDefinition(replacedDefinition, replacementDefinition);
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let recursiveDefinition = null;

    const type = RECURSIVE_TYPE,
          parts = definition.getParts(),
          recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursiveDefinition = (recursiveRuleNamesLength > 0);

    if (definitionRecursiveDefinition) {
      recursiveDefinition = new RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames);
    }

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
