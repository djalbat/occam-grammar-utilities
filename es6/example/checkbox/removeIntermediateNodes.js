'use strict';

const easy = require('easy');

const { Element } = easy;

class RemoveIntermediateNodesCheckbox extends Element {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler !== undefined) {
      this.onChange(changeHandler);
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

  parentContext() {
    const isRemoveIntermediateNodesCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      isRemoveIntermediateNodesCheckboxChecked
    });
  }

  static fromProperties(properties) {
    const { onChange } = properties,
          changeHandler = onChange, ///
          removeIntermediateNodesCheckbox = Element.fromProperties(RemoveIntermediateNodesCheckbox, properties, changeHandler);

    return removeIntermediateNodesCheckbox;
  }}

Object.assign(RemoveIntermediateNodesCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'remove-intermediate-nodes'
  },
  ignoredProperties: [
    'onChange'
  ]
});

module.exports = RemoveIntermediateNodesCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  const checkbox = targetElement, ///
        checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
