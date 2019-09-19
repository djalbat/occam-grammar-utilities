'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

function areElementsEqual(elements) {
  let elementsEqual = true;

  const elementsLength = elements.length;

  if (elementsLength > 0) {
    const firstElement = first(elements);

    elementsEqual = elements.every((element) => {
      if (element === firstElement) {
        return true;
      }
    });
  }

  return elementsEqual;
}

function forEachWithRemove(elements, callback) {
  let elementsLength = elements.length;

  for (let index = 0; index < elementsLength; index++) {
    const element = elements[index],
          remove = callback(element, index);

    if (remove) {
      const start = index,  ///
            deleteCount = 1;

      elements.splice(start, deleteCount);

      elementsLength--;

      index--;
    }
  }
}

function forEachWithReplace(elements, callback) {
  const elementsLength = elements.length;

  for (let index = 0; index < elementsLength; index++) {
    let element = elements[index];

    element = callback(element, index);

    if (element) {
      const start = index,  ///
            deleteCount = 1;

      elements.splice(start, deleteCount, element);
    }
  }
}

module.exports = Object.assign(arrayUtilities, {
  areElementsEqual,
  forEachWithRemove,
  forEachWithReplace
});
