"use strict";

import { Parts, Definition } from "occam-parsers";

import { ruleNameFromCycle, indirectRuleNameFromCycle } from "../../utilities/cycle";
import { repeatedRuleNameFromRuleName, indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName } from "../../utilities/ruleName";

const { RuleNamePart, OneOrMorePartsPart } = Parts;

export default class IndirectlyRewrittenDefinition extends Definition {
  static fromCycle(cycle, ruleMap) {
    const ruleName = ruleNameFromCycle(cycle),
          indirectRuleName = indirectRuleNameFromCycle(cycle),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          indirectlyReducedRuleNamePart = ruleNamePartFromRuleName(indirectlyReducedRuleName),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          oneOrMoreRepeatedRuleNamePartPart = OneOrMorePartsPart.fromPart(repeatedRuleNamePart),
          parts = [
            indirectlyReducedRuleNamePart,
            oneOrMoreRepeatedRuleNamePartPart
          ],
          precedence = null,
          indirectlyRewrittenDefinition = new IndirectlyRewrittenDefinition(parts, precedence);

    return indirectlyRewrittenDefinition;
  }
}

function ruleNamePartFromRuleName(ruleName) {
  const ruleNamePart = RuleNamePart.fromRuleName(ruleName);

  return ruleNamePart;
}
