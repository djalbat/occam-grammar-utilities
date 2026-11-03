"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName } from "../utilities/part";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";

export default class ReplacementDefinition extends Definition {
  static fromRuleName(ruleName, context) {
    const rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          rewrittenRuleNamePart = ruleNamePartFromRuleName(rewrittenRuleName),
          parts = [
            rewrittenRuleNamePart
          ],
          precedence = null,
          replacementDefinition = new ReplacementDefinition(parts, precedence);

    return replacementDefinition;
  }

  static fromIndirectRuleName(indirectRuleName, context) {
    const ruleName = indirectRuleName,  ///
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          rewrittenRuleNamePart = ruleNamePartFromRuleName(rewrittenRuleName),
          parts = [
            rewrittenRuleNamePart
          ],
          precedence = null,
          replacementDefinition = new ReplacementDefinition(parts, precedence);

    return replacementDefinition;
  }
}
