'use strict';

const easy = require('easy');

const { InputElement } = easy;

class EliminateCyclesCheckbox extends InputElement {
  static fromProperties(properties) { return InputElement.fromProperties(EliminateCyclesCheckbox, properties); }
}

Object.assign(EliminateCyclesCheckbox, {
  tagName: 'checkbox',
  defaultProperties: {
    className: 'eliminate-cycles',
    disabled: false
  }
});

module.exports = EliminateCyclesCheckbox;
