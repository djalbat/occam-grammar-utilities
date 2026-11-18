"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName, optionalPartPartFromPart } from "../../utilities/part";
import { reducedRuleNameFromRuleName,
         repeatedRuleNameFromIndirectRuleName,
         intermediateRepeatedRuleNameFromRuleName,
         indirectlyReducedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyRewrittenDefinition extends Definition {
  static fromRuleName(ruleName, context) {
    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          intermediateRepeatedRuleName = intermediateRepeatedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          intermediateRepeatedRuleNamePart = ruleNamePartFromRuleName(intermediateRepeatedRuleName),
          optionalInindirectlyDirectlyIntermediateRepeatedRuleNamePartPart = optionalPartPartFromPart(intermediateRepeatedRuleNamePart),
          parts = [
            reducedRuleNamePart,
            optionalInindirectlyDirectlyIntermediateRepeatedRuleNamePartPart
          ],
          precedence = null,
          indirectlyRewrittenDefinition = new IndirectlyRewrittenDefinition(parts, precedence);

    return indirectlyRewrittenDefinition;
  }

  static fromIndirectRuleName(indirectRuleName, context) {
    const repeatedRuleName = repeatedRuleNameFromIndirectRuleName(indirectRuleName),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromIndirectRuleName(indirectRuleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          indirectlyReducedRuleNamePart = ruleNamePartFromRuleName(indirectlyReducedRuleName),
          optionalInindirectlyDirectlyRepeatedRuleNamePartPart = optionalPartPartFromPart(repeatedRuleNamePart),
          parts = [
            indirectlyReducedRuleNamePart,
            optionalInindirectlyDirectlyRepeatedRuleNamePartPart
          ],
          precedence = null,
          indirectlyRewrittenDefinition = new IndirectlyRewrittenDefinition(parts, precedence);

    return indirectlyRewrittenDefinition;
  }

  static fromIndirectRuleNameAndRuleName(indirectRuleName, ruleName, context) {
    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          repeatedRuleName = repeatedRuleNameFromIndirectRuleName(indirectRuleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          optionalInindirectlyDirectlyRepeatedRuleNamePartPart = optionalPartPartFromPart(repeatedRuleNamePart),
          parts = [
            reducedRuleNamePart,
            optionalInindirectlyDirectlyRepeatedRuleNamePartPart
          ],
          precedence = null,
          indirectlyRewrittenDefinition = new IndirectlyRewrittenDefinition(parts, precedence);

    return indirectlyRewrittenDefinition;
  }
}
