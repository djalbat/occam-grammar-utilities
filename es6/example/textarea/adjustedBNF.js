'use strict';

const easy = require('easy');

const { InputElement } = easy;

class AdjustedBNFTextarea extends InputElement {
  setAdjustedBNF(adjustedBNF) {
    const value = adjustedBNF;  ///

    this.setValue(value);
  }

  clearAdjustedBNF() {
    const value = '';

    this.setValue(value);
  }

  parentContext() {
    const setAdjustedBNF = this.setAdjustedBNF.bind(this),
          clearAdjustedBNF = this.clearAdjustedBNF.bind(this);

    return ({
      setAdjustedBNF,
      clearAdjustedBNF
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(AdjustedBNFTextarea, properties); }
}

Object.assign(AdjustedBNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'adjusted-bnf',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = AdjustedBNFTextarea;
