'use strict';

const easy = require('easy');

const { Element } = easy;

class EliminateOrphanedRulesCheckbox extends Element {
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
    const checkEliminateOrphanedRulesCheckbox = this.check.bind(this), ///
          enableEliminateOrphanedRulesCheckbox = this.enable.bind(this), ///
          disableEliminateOrphanedRulesCheckbox = this.disable.bind(this), ///
          isEliminateOrphanedRulesCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      checkEliminateOrphanedRulesCheckbox,
      enableEliminateOrphanedRulesCheckbox,
      disableEliminateOrphanedRulesCheckbox,
      isEliminateOrphanedRulesCheckboxChecked
    });
  }

  static fromProperties(properties) {
    const { onChange, checked } = properties,
          changeHandler = onChange, ///
          eliminateOrphanedRulesCheckbox = Element.fromProperties(EliminateOrphanedRulesCheckbox, properties, changeHandler, checked);

    return eliminateOrphanedRulesCheckbox;
  }}

Object.assign(EliminateOrphanedRulesCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'eliminate-orphaned-rules'
  },
  ignoredProperties: [
    'onChange',
    'checked'
  ]
});

module.exports = EliminateOrphanedRulesCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  const checkbox = targetElement, ///
        checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
