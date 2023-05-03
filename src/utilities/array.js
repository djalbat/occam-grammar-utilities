"use strict";

import { arrayUtilities } from "necessary";

export const { first, last, find, filter, front, head, tail, push, unshift, firstLast, secondLast, backwardsSome, backwardsFind, backwardsEvery, backwardsForEach } = arrayUtilities;

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
