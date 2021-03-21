"use strict";

import { Parts } from "occam-parsers";

const { RuleNamePart, ZeroOrMorePartsPart } = Parts;

export function ruleNamePartFromRuleName(ruleName, lookAhead = false) {
  const ruleNamePart = new RuleNamePart(ruleName, lookAhead);

  return ruleNamePart;
}

export function zeroOrMoreRuleNamePartPartFromRuleName(ruleName) {
  const ruleNamePart = ruleNamePartFromRuleName(ruleName),
        zeroOrMoreRuleNamePartPart = new ZeroOrMorePartsPart(ruleNamePart);

  return zeroOrMoreRuleNamePartPart;
}
