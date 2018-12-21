'use strict';

const easy = require('easy');

const { Element } = easy;

class EliminateImmediateLeftRecursionCheckbox extends Element {
  constructor(selector, changeHandler, checked) {
    super(selector);

    if (changeHandler !== undefined) {
      this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      this.check(checked);
    }
  }

  onChange(changeHandler, object, intermediateChangeHandler = defaultIntermediateChangeHandler) {
    this.on('click', changeHandler, object, intermediateChangeHandler);  ///
  }

  offChange(changeHandler, object) {
    this.off('click', changeHandler, object);  ///
  }

  isChecked() {
    const domElement = this.getDOMElement(),
          checked = domElement.checked;

    return checked;
  }

  check(checked = true) {
    const domElement = this.getDOMElement();

    domElement.checked = checked;
  }

  parentContext() {
    const checkEliminateImmediateLeftRecursionCheckbox = this.check.bind(this), ///
          enableEliminateImmediateLeftRecursionCheckbox = this.enable.bind(this), ///
          disableEliminateImmediateLeftRecursionCheckbox = this.disable.bind(this), ///
          isEliminateImmediateLeftRecursionCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      checkEliminateImmediateLeftRecursionCheckbox,
      enableEliminateImmediateLeftRecursionCheckbox,
      disableEliminateImmediateLeftRecursionCheckbox,
      isEliminateImmediateLeftRecursionCheckboxChecked
    });
  }

  static fromProperties(properties) {
    const { onChange, checked } = properties,
          changeHandler = onChange, ///
          eliminateImmediateLeftRecursionCheckbox = Element.fromProperties(EliminateImmediateLeftRecursionCheckbox, properties, changeHandler, checked);

    return eliminateImmediateLeftRecursionCheckbox;
  }}

Object.assign(EliminateImmediateLeftRecursionCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'eliminate-immediate-left-recursion'
  },
  ignoredProperties: [
    'onChange',
    'checked'
  ]
});

module.exports = EliminateImmediateLeftRecursionCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  const checkbox = targetElement, ///
        checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
