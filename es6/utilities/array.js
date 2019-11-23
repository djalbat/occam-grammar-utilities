'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary;

function forEachWithReplace(array, callback) {
  let arrayLength = array.length;

  for (let index = 0; index < arrayLength; index++) {
    const replacedElement = array[index],
          replacementElement = callback(replacedElement, index);

    if (replacementElement !== null) {
      const start = index,  ///
            deleteCount = 1;

      array.splice(start, deleteCount, replacementElement);
    }
  }
}

module.exports = Object.assign(arrayUtilities, {
  forEachWithReplace
});
