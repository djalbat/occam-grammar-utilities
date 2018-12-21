'use strict';

const easy = require('easy');

const { Element } = easy;

class EliminateCyclesCheckbox extends Element {
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
    const checkEliminateCyclesCheckbox = this.check.bind(this), ///
          enableEliminateCyclesCheckbox = this.enable.bind(this), ///
          disableEliminateCyclesCheckbox = this.disable.bind(this), ///
          isEliminateCyclesCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      checkEliminateCyclesCheckbox,
      enableEliminateCyclesCheckbox,
      disableEliminateCyclesCheckbox,
      isEliminateCyclesCheckboxChecked
    });
  }

  static fromProperties(properties) {
    const { onChange, checked } = properties,
          changeHandler = onChange, ///
          eliminateCyclesCheckbox = Element.fromProperties(EliminateCyclesCheckbox, properties, changeHandler, checked);

    return eliminateCyclesCheckbox;
  }}

Object.assign(EliminateCyclesCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'eliminate-cycles'
  },
  ignoredProperties: [
    'onChange',
    'checked'
  ]
});

module.exports = EliminateCyclesCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  const checkbox = targetElement, ///
        checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
