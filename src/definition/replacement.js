"use strict";

import { Parts, Definition } from "occam-parsers";

import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";

const { RuleNamePart } = Parts;

export default class ReplacementDefinition extends Definition {
  static fromRuleName(ruleNams) {
    const rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleNams),
          rewrittenRuleNamePart = RuleNamePart.fromRuleName(rewrittenRuleName),
          parts = [
            rewrittenRuleNamePart
          ],
          precedence = null,
          replacementDefinition = new ReplacementDefinition(parts, precedence);

    return replacementDefinition;
  }
}
