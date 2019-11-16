'use strict';

const parsers = require('occam-parsers');

const { Definition } = parsers;

class PlaceHolderDefinition extends Definition {
  constructor(parts, leftRecursiveDefinition) {
    super(parts);

    this.leftRecursiveDefinition = leftRecursiveDefinition;
  }

  getLeftRecursiveDefinition() {
    return this.leftRecursiveDefinition;
  }

  static fromLeftRecursiveDefinition(leftRecursiveDefinition) {
    const parts = [],
          placeHolderDefinition = new PlaceHolderDefinition(parts, leftRecursiveDefinition);

    return placeHolderDefinition;
  }
}

module.exports = PlaceHolderDefinition;
