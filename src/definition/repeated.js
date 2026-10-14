"use strict";

import { Definition } from "occam-parsers";

import { tail } from "../utilities/array";
import { retrieveSimpleParts } from "../utilities/recursion";

export default class RepeatedDefinition extends Definition {
  static fromDefinition(definition) {
    let parts = definition.getParts();

    const tailParts = tail(parts);

    parts = tailParts;  ///

    setCutPartsProducing(parts);

    const precedence = definition.getPrecedence(),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    return repeatedDefinition;
  }
}

function setCutPartsProducing(parts) {
  const producint = true;

  parts.forEach((part) => {
    retrieveSimpleParts(part, (simplePart) => {
      const simplePartTermionalPart = simplePart.isTerminalPart();

      if (simplePartTermionalPart) {
        const terminalpart = simplePart,  ///
              terminalPartCutPart = terminalpart.isCutPart();

        if (terminalPartCutPart) {
          const cutPart = terminalpart; ///

          cutPart.setProducing(producint);
        }
      }
    });
  });
}