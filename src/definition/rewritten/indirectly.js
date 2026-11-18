"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName, optionalPartPartFromPart } from "../../utilities/part";
import { reducedRuleNameFromRuleName, repeatedRuleNameFromIndirectRuleName, intermediateRepeatedRuleNameFromRuleName, reducedRuleNameFromIndirectRuleName } from "../../utilities/ruleName";

export default class InindirectlyDirectlyRewrittenDefinition extends Definition {
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
          indirectlyRewrittenDefinition = new InindirectlyDirectlyRewrittenDefinition(parts, precedence);

    return indirectlyRewrittenDefinition;
  }

  static fromIndirectRuleName(indirectRuleName, context) {
    const reducedRuleName = reducedRuleNameFromIndirectRuleName(indirectRuleName),
          repeatedRuleName = repeatedRuleNameFromIndirectRuleName(indirectRuleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          optionalInindirectlyDirectlyRepeatedRuleNamePartPart = optionalPartPartFromPart(repeatedRuleNamePart),
          parts = [
            reducedRuleNamePart,
            optionalInindirectlyDirectlyRepeatedRuleNamePartPart
          ],
          precedence = null,
          indirectlyRewrittenDefinition = new InindirectlyDirectlyRewrittenDefinition(parts, precedence);

    return indirectlyRewrittenDefinition;
  }
}
