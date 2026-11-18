"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName } from "../../utilities/part";
import { intermediateRuleNameFromIndirectRuleName } from "../../utilities/ruleName";

export default class IntermediateRepeatedDefinition extends Definition {
  static fromIndirectRuleNameAndPrecedence(indirectRuleName, precedence, context) {
    const intermediateRuleName = intermediateRuleNameFromIndirectRuleName(indirectRuleName),
          intermediateRuleNamePart = ruleNamePartFromRuleName(intermediateRuleName),
          parts = [
            intermediateRuleNamePart
          ],
          intermediateRepeatedDefinition = new IntermediateRepeatedDefinition(parts, precedence);

    return intermediateRepeatedDefinition;
  }
}
