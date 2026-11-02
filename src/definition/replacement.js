"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName } from "../utilities/part";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";

export default class ReplacementDefinition extends Definition {
  static fromRuleName(ruleNams, context) {
    const rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleNams),
          rewrittenRuleNamePart = ruleNamePartFromRuleName(rewrittenRuleName),
          parts = [
            rewrittenRuleNamePart
          ],
          precedence = null,
          replacementDefinition = new ReplacementDefinition(parts, precedence);

    return replacementDefinition;
  }
}
