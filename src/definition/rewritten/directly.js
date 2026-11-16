"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName, optionalPartPartFromPart } from "../../utilities/part";
import { repeatedRuleNameFromRuleName, reducedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyRewrittenDefinition extends Definition {
  static fromRuleName(ruleName, context) {
    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          optionalDirectlyRepeatedRuleNamePartPart = optionalPartPartFromPart(repeatedRuleNamePart),
          parts = [
            reducedRuleNamePart,
            optionalDirectlyRepeatedRuleNamePartPart
          ],
          precedence = null,
          directlyRewrittenDefinition = new DirectlyRewrittenDefinition(parts, precedence);

    return directlyRewrittenDefinition;
  }
}
