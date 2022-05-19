"use strict";

import { Parts } from "occam-parsers";

const { RuleNamePart, OneOrMorePartsPart } = Parts;

export function ruleNamePartFromRuleName(ruleName, lookAhead = false) {
  const ruleNamePart = new RuleNamePart(ruleName, lookAhead);

  return ruleNamePart;
}

export function oneOrMoreRuleNamePartPartFromRuleName(ruleName) {
  const ruleNamePart = ruleNamePartFromRuleName(ruleName),
        oneOrMoreRuleNamePartPart = new OneOrMorePartsPart(ruleNamePart);

  return oneOrMoreRuleNamePartPart;
}
