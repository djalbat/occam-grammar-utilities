'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part');

const { Definition } = parsers,
      { optionalRuleNamePartPartFromRuleName } = partUtilities;

class RightRecursiveDefinition extends Definition {
  constructor(parts, recursiveRuleName) {
    super(parts);

    this.recursiveRuleName = recursiveRuleName;
  }

  getRecursiveRuleName() {
    return this.recursiveRuleName;
  }

  static fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName) {
    const parts = definition.getParts(),
          optionalRightRecursiveRuleNamePart = optionalRuleNamePartPartFromRuleName(rightRecursiveRuleName);

    parts.push(optionalRightRecursiveRuleNamePart);

    const firstPart = parts.shift(),
          ruleNamePart = firstPart, ///
          ruleName = ruleNamePart.getRuleName(),
          recursiveRuleName = ruleName, ///
          rightRecursiveDefinition = new RightRecursiveDefinition(parts, recursiveRuleName);

    return rightRecursiveDefinition;
  }
}

module.exports = RightRecursiveDefinition;
