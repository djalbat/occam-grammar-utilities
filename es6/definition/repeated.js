'use strict';

const parsers = require('occam-parsers');

const partsUtilities = require('../utilities/parts');

const { Definition } = parsers,
      { cloneParts } = partsUtilities;

class RepeatedDefinition extends Definition {
  static fromLeftRecursiveDefinition(leftRecursiveDefinition) {
    let parts = leftRecursiveDefinition.getParts();

    parts = cloneParts(parts);  ///

    parts.shift();  ///

    const repeatedDefinition = new RepeatedDefinition(parts);

    return repeatedDefinition;
  }
}

module.exports = RepeatedDefinition;
