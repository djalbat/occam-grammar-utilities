"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName, optionalPartPartFromPart } from "../../utilities/part";
import { indirectlyRepeatedRuleNameFromIndirectRuleName, indirectlyReducedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";

export default class InindirectlyDirectlyRewrittenDefinition extends Definition {
  static fromIndirectRuleName(indirectRuleName, context) {
    const indirectlyReducedRuleName = indirectlyReducedRuleNameFromIndirectRuleName(indirectRuleName),
          indirectlyReducedRuleNamePart = ruleNamePartFromRuleName(indirectlyReducedRuleName),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
          optionalInindirectlyDirectlyRepeatedRuleNamePartPart = optionalPartPartFromPart(indirectlyRepeatedRuleNamePart),
          parts = [
            indirectlyReducedRuleNamePart,
            optionalInindirectlyDirectlyRepeatedRuleNamePartPart
          ],
          precedence = null,
          indirectlyRewrittenDefinition = new InindirectlyDirectlyRewrittenDefinition(parts, precedence);

    return indirectlyRewrittenDefinition;
  }
}
