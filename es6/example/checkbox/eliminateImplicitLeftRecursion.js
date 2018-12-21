'use strict';

const easy = require('easy');

const { Element } = easy;

class EliminateImplicitLeftRecursionCheckbox extends Element {
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
    const isEliminateImplicitLeftRecursionCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      isEliminateImplicitLeftRecursionCheckboxChecked
    });
  }

  static fromProperties(properties) {
    const { onChange, checked } = properties,
          changeHandler = onChange, ///
          eliminateImplicitLeftRecursionCheckbox = Element.fromProperties(EliminateImplicitLeftRecursionCheckbox, properties, changeHandler, checked);

    return eliminateImplicitLeftRecursionCheckbox;
  }}

Object.assign(EliminateImplicitLeftRecursionCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'eliminate-implicit-left-recursion'
  },
  ignoredProperties: [
    'onChange',
    'checked'
  ]
});

module.exports = EliminateImplicitLeftRecursionCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  const checkbox = targetElement, ///
        checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
