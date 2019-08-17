'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      partsUtilities = require('../utilities/parts');

const { Definition } = parsers,
      { cloneParts } = partsUtilities,
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

  static fromRightRecursiveRuleNameAndImmediatelyLeftRecursiveDefinition(rightRecursiveRuleName, immediatelyLeftRecursiveDefinition) {
    let parts = immediatelyLeftRecursiveDefinition.getParts();

    parts = cloneParts(parts);  ///

    const optionalRightRecursiveRuleNamePart = optionalRuleNamePartPartFromRuleName(rightRecursiveRuleName);

    parts.push(optionalRightRecursiveRuleNamePart);

    const firstPart = parts.shift(),
          lookAhead = firstPart.isLookAhead(),
          noWhitespace = firstPart.hasNoWhitespace(),
          rightRecursiveDefinition = new RightRecursiveDefinition(parts, noWhitespace, lookAhead);

    return rightRecursiveDefinition;
  }
}

module.exports = RightRecursiveDefinition;
