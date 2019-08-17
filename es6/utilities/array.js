'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary;

function iterateWithDelete(array, callback) {
  let arrayLength = array.length;

  let index = 0,
      count = 0;

  while (index < arrayLength) {
    const element = array[index],
          result = callback(element, count);

    if (result) {
      const start = index,
            deleteCount = 1;

      array.splice(start, deleteCount);

      arrayLength--;
    } else {
      index++;
    }

    count++;
  }
}

function iterateWithReplace(array, callback) {
  let arrayLength = array.length;

  let index = 0,
      count = 0;

  while (index < arrayLength) {
    let element = array[index];

    element = callback(element, count);

    if (element) {
      const start = index,
            deleteCount = 1;

      array.splice(start, deleteCount, element);
    }

    index++;

    count++;
  }
}

module.exports = Object.assign(arrayUtilities, {
  iterateWithDelete,
  iterateWithReplace
});
