'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary;

function forEachWithReplace(array, callback) {
  let arrayLength = array.length;

  for (let index = 0; index < arrayLength; index++) {
    const oldElement = array[index],
          newElement = callback(oldElement, index);

    if (newElement !== null) {
      const start = index,  ///
            deleteCount = 1;

      array.splice(start, deleteCount, newElement);
    }
  }
}

module.exports = Object.assign(arrayUtilities, {
  forEachWithReplace
});
