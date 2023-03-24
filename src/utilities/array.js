"use strict";

import { arrayUtilities } from "necessary";

export const { first, last, find, filter, front, head, tail, push, unshift, backwardsSome, backwardsFind, backwardsEvery } = arrayUtilities;

export function flatten(arrays) {
  const flattenedArray = [];

  arrays.forEach((array) => {
    const elements = array; ///

    elements.forEach((element) => {
      const flattenedArrayIncludesElement = flattenedArray.includes(element);

      if (!flattenedArrayIncludesElement) {
        flattenedArray.push(element);
      }
    })
  })

  return flattenedArray;
}

export function leftDifference(arrayA, arrayB) {
  filter(arrayA, (elementA) => {
    const arrayBIncludesElementA = arrayB.includes(elementA);

    if (!arrayBIncludesElementA) {
      return true;
    }
  });
}

export function rightDifference(arrayA, arrayB) {
  filter(arrayB, (elementB) => {
    const arrayAIncludesElementB = arrayA.includes(elementB);

    if (!arrayAIncludesElementB) {
      return true;
    }
  });
}
