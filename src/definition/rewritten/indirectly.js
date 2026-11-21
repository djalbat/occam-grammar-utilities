"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName, optionalPartPartFromPart, choiceOfPartsPartFromParts } from "../../utilities/part";
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

  static fromRuleNameAndIndirectRuleName(ruleName, indirectRuleName, context) {
    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromIndirectRuleName(indirectRuleName),
          reduceddRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          indirectlyReducedRuleNamePart = ruleNamePartFromRuleName(indirectlyReducedRuleName);

    let parts;

    parts = [
      reduceddRuleNamePart,
      indirectlyReducedRuleNamePart
    ];

    const choiceOfPartsPart = choiceOfPartsPartFromParts(parts),
          repeatedRuleName = repeatedRuleNameFromIndirectRuleName(indirectRuleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          optionalInindirectlyDirectlyRepeatedRuleNamePartPart = optionalPartPartFromPart(repeatedRuleNamePart);

    parts = [
      choiceOfPartsPart,
      optionalInindirectlyDirectlyRepeatedRuleNamePartPart
    ];

    const precedence = null,
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
