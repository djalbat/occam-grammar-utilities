'use strict';

const easy = require('easy');

const { Element } = easy;

class RemoveOrRenameIntermediateNodesCheckbox extends Element {
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
    const isRemoveOrRenameIntermediateNodesCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      isRemoveOrRenameIntermediateNodesCheckboxChecked
    });
  }

  static fromProperties(properties) {
    const { onChange } = properties,
          changeHandler = onChange, ///
          removeOrRenameIntermediateNodesCheckbox = Element.fromProperties(RemoveOrRenameIntermediateNodesCheckbox, properties, changeHandler);

    return removeOrRenameIntermediateNodesCheckbox;
  }}

Object.assign(RemoveOrRenameIntermediateNodesCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'remove-or-rename-intermediate-nodes'
  },
  ignoredProperties: [
    'onChange'
  ]
});

module.exports = RemoveOrRenameIntermediateNodesCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  const checkbox = targetElement, ///
        checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
