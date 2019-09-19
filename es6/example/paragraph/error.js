'use strict';

const easy = require('easy');

const { Element } = easy;

class ErrorParagraph extends Element {
  showError(error) {
    const html = error; ///

    this.html(html);

    this.show();
  }

  parentContext() {
    const showError = this.showError.bind(this),
          hideError = this.hide.bind(this); ///

    return ({
      showError,
      hideError
    });
  }

  static fromProperties(properties) { return Element.fromProperties(ErrorParagraph, properties); }
}

Object.assign(ErrorParagraph, {
  tagName: 'p',
  defaultProperties: {
    className: 'error'
  }
});

module.exports = ErrorParagraph;
