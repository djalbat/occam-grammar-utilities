"use strict";

export function simplifyChildNodes(childNodes, state) {
  childNodes.every((childNode) => {
    const terminate = childNode.simplify(state);

    if (!terminate) {
      return true;
    }
  });
}
