'use strict';

const parsers = require('occam-parsers');

const partsUtilities = require('../utilities/parts');

const { Definition } = parsers,
      { cloneParts } = partsUtilities;

class RightRecursiveDefinition extends Definition {
  constructor(parts, noWhitespace) {
    super(parts);

    this.noWhitespace = noWhitespace;
  }

  hasNoWhitespace() {
    return this.noWhitespace;
  }

  static fromDefinition(definition) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    const firstPart = parts.shift(),
          noWhitespace = firstPart.hasNoWhitespace(),
          rightRecursiveDefinition = new RightRecursiveDefinition(parts, noWhitespace);

    return rightRecursiveDefinition;
  }
}

module.exports = RightRecursiveDefinition;
