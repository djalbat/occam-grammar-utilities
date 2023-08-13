"use strict";

export function findLastIndex(nodes, callback) {
  let lastIndex = -1;

  const length = nodes.length;

  for (let index = length - 1; index >= 0; index--) {
    const node = nodes[index],
          result = callback(node);

    if (result) {
      lastIndex = index;

      break;
    }
  }

  return lastIndex;
}
