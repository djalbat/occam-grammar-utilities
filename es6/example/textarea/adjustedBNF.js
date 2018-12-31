'use strict';

const easy = require('easy');

const { InputElement } = easy;

class AdjustedBNFTextarea extends InputElement {
  showError() {
    this.addClass('error');
  }

  hideError() {
    this.removeClass('error');
  }

  clearAdjustedBNF() {
    const value = '';

    this.setValue(value);
  }

  setAdjustedBNF(adjustedBNF) {
    const value = adjustedBNF;  ///

    this.setValue(value);
  }

  parentContext() {
    const showError = this.showError.bind(this),
          hideError = this.hideError.bind(this),
          setAdjustedBNF = this.setAdjustedBNF.bind(this),
          clearAdjustedBNF = this.clearAdjustedBNF.bind(this);

    return ({
      showError,
      hideError,
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
