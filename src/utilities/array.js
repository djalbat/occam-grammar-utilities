"use strict";

import { arrayUtilities } from "necessary";

export const { first, last, tail, push, filter, find, compress } = arrayUtilities;

export function separate(array, arrayA, arrayB, index) {
  let startIndex,
      endIndex;

  startIndex = 0;

  endIndex = index; ///

  const elementsA = array.slice(startIndex, endIndex);

  startIndex = index + 1;

  const elementsB = array.slice(startIndex);

  push(arrayA, elementsA);

  push(arrayB, elementsB);
}

export function move(arrayA, arrayB, index) {
  let startIndex,
      deleteCount;

  startIndex = 0;

  deleteCount = index; ///

  const elements = arrayB.splice(startIndex, deleteCount);

  push(arrayA, elements);
}
