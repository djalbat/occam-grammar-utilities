"use strict";

import { Definition } from "occam-parsers";

import { cloneParts } from "../utilities/parts";

import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { ruleNamePartFromRuleNameAndLookAhead } from "../utilities/part";

export default class ReducedDefinition extends Definition {
  static fromDefinition(definition) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    const part = parts.shift(),
          ruleNamePart = part,  ///
          lookAhead = ruleNamePart.isLookAhead(),
          ruleName = ruleNamePart.getRuleName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleNameAndLookAhead(reducedRuleName, lookAhead);

    parts = [ ///
        reducedRuleNamePart,
        ...parts
    ];

    const unaryDefinition = new ReducedDefinition(parts);

    return unaryDefinition;
  }
}
