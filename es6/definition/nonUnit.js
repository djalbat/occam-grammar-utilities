'use strict';

const parsers = require('occam-parsers');

const UnitDefinition = require('../definition/unit');

const { Definition } = parsers;

class NonUnitDefinition extends Definition {
  static fromDefinition(definition) {
    let nonUnitDefinition = null;

    const unitDefinition = UnitDefinition.fromDefinition(definition);
    
    if (unitDefinition === null) {
      const parts = definition.getParts();
      
      nonUnitDefinition = new NonUnitDefinition(parts);
    }

    return nonUnitDefinition;
  }
}

module.exports = NonUnitDefinition;
