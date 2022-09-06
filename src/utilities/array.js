"use strict";

import { arrayUtilities } from "necessary";

export const { first, last, filter, front, head, tail, push, unshift, backwardsSome, backwardsFind, backwardsEvery } = arrayUtilities;

export function leftDifference(arrayA, arrayB) {
  filter(arrayA, (elementA) => {
    const arrayBIncludesElementA = arrayB.includes(elementA);

    if (!arrayBIncludesElementA) {
      return true;
    }
  });
}
