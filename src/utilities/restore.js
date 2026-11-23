"use strict";

export function restoreChildNodes(childNodes, alternate, state) {
  childNodes.some((childNode) => {
    const terminate = childNode.restore(alternate, state);

    if (terminate) {
      return true;
    }

    if (terminate === null) {
      alternate = true;
    }
  });
}
