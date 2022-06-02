"use strict";

import { Parts, Definition } from "occam-parsers";

import { cloneParts } from "../utilities/parts";

import { reducedPartFromPart } from "../utilities/part";

const { RuleNamePart } = Parts;

export default class ReducedDefinition extends Definition {
  static fromRuleName(ruleName) {
    const ruleNamePart = new RuleNamePart(ruleName),
          part = ruleNamePart,  ///
          reducedPart = reducedPartFromPart(part),
          parts = [
            reducedPart
          ],
          reducedDefinition = new ReducedDefinition(parts);

    return reducedDefinition;
  }

  static fromDefinition(definition) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    const part = parts.shift(),
          reducedPart = reducedPartFromPart(part);

    parts = [ ///
        reducedPart,
        ...parts
    ];

    const reducedDefinition = new ReducedDefinition(parts);

    return reducedDefinition;
  }
}
