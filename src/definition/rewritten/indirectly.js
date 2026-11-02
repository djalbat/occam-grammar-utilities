"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName, oneOrMorePartsPartFromPart } from "../../utilities/part";
import { repeatedRuleNameFromRuleName, indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyRewrittenDefinition extends Definition {
  static fromCycle(cycle, context) {
    const ruleName = context.getRuleName(),
          indirectRuleName = context.getIndirectRuleName(),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          indirectlyReducedRuleNamePart = ruleNamePartFromRuleName(indirectlyReducedRuleName),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          oneOrMoreRepeatedRuleNamePartPart = oneOrMorePartsPartFromPart(repeatedRuleNamePart),
          parts = [
            indirectlyReducedRuleNamePart,
            oneOrMoreRepeatedRuleNamePartPart
          ],
          precedence = null,
          indirectlyRewrittenDefinition = new IndirectlyRewrittenDefinition(parts, precedence);

    return indirectlyRewrittenDefinition;
  }
}
