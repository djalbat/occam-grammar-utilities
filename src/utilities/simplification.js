"use strict";

export function simplifyChildNodes(childNodes, alternate, state) {
  childNodes.some((childNode) => {
    const terminate = childNode.simplify(alternate, state);

    if (terminate) {
      return true;
    }

    if (terminate === null) {
      alternate = true;
    }
  });
}
