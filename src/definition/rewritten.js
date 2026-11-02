"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName, oneOrMorePartsPartFromPart, zeroOrMorePartsPartFromPart } from "../utilities/part";
import { reducedRuleNameFromRuleName, repeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromIndirectRuleName } from "../utilities/ruleName";

export default class RewrittenDefinition extends Definition {
  static fromRuleName(ruleName, singular, context) {
    if (context === undefined) {
      context = singular; ///

      singular = false;
    }

    const parts = [],
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName);

    parts.push(reducedRuleNamePart);

    if (!singular) {
      const repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
            repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
            zeroOrMoreRepeatedRuleNamePartPart = zeroOrMorePartsPartFromPart(repeatedRuleNamePart);

      parts.push(zeroOrMoreRepeatedRuleNamePartPart);
    }

    const precedence = null,
          rewrittenDefinition = new RewrittenDefinition(parts, precedence);

    return rewrittenDefinition;
  }

  static fromDefiniitonRuleNameAndIndirectRuleName(definition, ruleName, indirectRuleName, context) {
    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
          oneOrMoreIndirectlyRepeatedRuleNamePartPart = oneOrMorePartsPartFromPart(indirectlyRepeatedRuleNamePart),
          parts = [
            reducedRuleNamePart,
            oneOrMoreIndirectlyRepeatedRuleNamePartPart
          ],
          precedence = definition.getPrecedence(),
          rewrittenDefinition = new RewrittenDefinition(parts, precedence);

    return rewrittenDefinition;
  }
}
