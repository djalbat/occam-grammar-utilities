"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

const { tail } = arrayUtilities;

export default class RepeatedDefinition extends Definition {
  static fromDefinition(definition, ruleMap) {
    let parts = definition.getParts();

    const tailParts = tail(parts);

    parts = tailParts;  ///

    const precedence = definition.getPrecedence(),
          repeatedDefinition = new RepeatedDefinition(parts, precedence);

    const visitedRules = [],
          checkForCutParts = true;

    repeatedDefinition.isConsuming(ruleMap, visitedRules, checkForCutParts);

    return repeatedDefinition;
  }
}
