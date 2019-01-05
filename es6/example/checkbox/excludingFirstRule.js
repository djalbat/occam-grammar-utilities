'use strict';

const easy = require('easy');

const { Element } = easy;

class ExcludingFirstRuleCheckbox extends Element {
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
    const checkExcludingFirstRuleCheckbox = this.check.bind(this), ///
          enableExcludingFirstRuleCheckbox = this.enable.bind(this), ///
          disableExcludingFirstRuleCheckbox = this.disable.bind(this), ///
          isExcludingFirstRuleCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      checkExcludingFirstRuleCheckbox,
      enableExcludingFirstRuleCheckbox,
      disableExcludingFirstRuleCheckbox,
      isExcludingFirstRuleCheckboxChecked
    });
  }

  static fromProperties(properties) {
    const { onChange, checked } = properties,
          changeHandler = onChange, ///
          excludingFirstRuleCheckbox = Element.fromProperties(ExcludingFirstRuleCheckbox, properties, changeHandler, checked);

    return excludingFirstRuleCheckbox;
  }}

Object.assign(ExcludingFirstRuleCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'excluding-first-rule'
  },
  ignoredProperties: [
    'onChange',
    'checked'
  ]
});

module.exports = ExcludingFirstRuleCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  const checkbox = targetElement, ///
        checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
