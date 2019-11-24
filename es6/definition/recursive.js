'use strict';

const parsers = require('occam-parsers');

const ruleUtilities = require('../utilities/rule'),
      definitionUtilities = require('../utilities/definition');

const { findRule } = ruleUtilities,
      { Definition } = parsers,
      { recursiveRuleNamesFromDefinition } = definitionUtilities;

class RecursiveDefinition extends Definition {
  constructor(parts, ruleName, definition, recursiveRuleNames) {
    super(parts);

    this.ruleName = ruleName;

    this.definition = definition;

    this.recursiveRuleNames = recursiveRuleNames;
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

    rule.replaceDefinition(replacementDefinition, replacedDefinition);
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let recursiveDefinition = null;

    const parts = definition.getParts(),
          recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursiveDefinition = (recursiveRuleNamesLength > 0);

    if (definitionRecursiveDefinition) {
      recursiveDefinition = new RecursiveDefinition(parts, ruleName, definition, recursiveRuleNames);
    }

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
