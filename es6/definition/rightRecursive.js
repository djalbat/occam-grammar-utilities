'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Definition } = parsers,
      { rightRecursiveRuleNameFromRuleName } = ruleNameUtilities,
      { optionalRuleNamePartPartFromRuleName } = partUtilities;

class RightRecursiveDefinition extends Definition {
  constructor(parts, noWhitespace, lookAhead) {
    super(parts);

    this.noWhitespace = noWhitespace;

    this.lookAhead = lookAhead;
  }

  hasNoWhitespace() {
    return this.noWhitespace;
  }

  isLookAhead() {
    return this.lookAhead;
  }

  static fromDefinitionAndRuleName(definition, ruleName, count) {
    const parts = definition.getParts(),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName, count),
          optionalRightRecursiveRuleNamePart = optionalRuleNamePartPartFromRuleName(rightRecursiveRuleName);

    parts.push(optionalRightRecursiveRuleNamePart);

    const firstPart = parts.shift(),
          lookAhead = firstPart.isLookAhead(),
          noWhitespace = firstPart.hasNoWhitespace(),
          rightRecursiveDefinition = new RightRecursiveDefinition(parts, noWhitespace, lookAhead);

    return rightRecursiveDefinition;
  }
}

module.exports = RightRecursiveDefinition;
