"use strict";

import { Parts, Definition } from "occam-parsers";

import { reducedRuleNameFromRuleName, repeatedRuleNameFromRuleName } from "../utilities/ruleName";

const { RuleNamePart, ZeroOrMorePartsPart } = Parts;

export default class RewrittenDefinition extends Definition {
  static fromRuleName(ruleName, ruleMap) {
    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          zeroOrMoreRepeatedRuleNamePartPart = zeroOrMorePartsPartFromPart(repeatedRuleNamePart),
          parts = [
            reducedRuleNamePart,
            zeroOrMoreRepeatedRuleNamePartPart
          ],
          precedence = null,
          rewrittenDefinition = new RewrittenDefinition(parts, precedence);

    return rewrittenDefinition;
  }
}

function ruleNamePartFromRuleName(ruleName) {
  const ruleNamePart = RuleNamePart.fromRuleName(ruleName);

  return ruleNamePart;
}

function zeroOrMorePartsPartFromPart(part) {
  const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromPart(part);

  return zeroOrMorePartsPart;
}

