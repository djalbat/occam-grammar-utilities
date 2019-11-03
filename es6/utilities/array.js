'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary;

function forEachWithRemove(array, callback) {
  let arrayLength = array.length;

  for (let index = 0; index < arrayLength; index++) {
    const element = array[index],
          remove = callback(element, index);

    if (remove) {
      const start = index,  ///
            deleteCount = 1;

      array.splice(start, deleteCount);

      arrayLength--;

      index--;
    }
  }
}

module.exports = Object.assign(arrayUtilities, {
  forEachWithRemove
});
