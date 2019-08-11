'use strict';

const parsers = require('occam-parsers');

const { Parts, Definition } = parsers,
      { EpsilonPart } = Parts;

class EpsilonDefinition extends Definition {
  static fromNothing() {
    const noWhitespace = false, ///
          epsilonPart = new EpsilonPart(noWhitespace),
          parts = [
            epsilonPart
          ],
          epsilonPartDefinition = new EpsilonDefinition(parts);

    return epsilonPartDefinition;
  }
}

module.exports = EpsilonDefinition;
