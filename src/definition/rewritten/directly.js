"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName, optionalPartPartFromPart } from "../../utilities/part";
import { directlyRepeatedRuleNameFromRuleName, directlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyRewrittenDefinition extends Definition {
  static fromRuleName(ruleName, context) {
    const directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
          directlyReducedRuleNamePart = ruleNamePartFromRuleName(directlyReducedRuleName),
          directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedRuleName),
          optionalDirectlyRepeatedRuleNamePartPart = optionalPartPartFromPart(directlyRepeatedRuleNamePart),
          parts = [
            directlyReducedRuleNamePart,
            optionalDirectlyRepeatedRuleNamePartPart
          ],
          precedence = null,
          directlyRewrittenDefinition = new DirectlyRewrittenDefinition(parts, precedence);

    return directlyRewrittenDefinition;
  }
}
