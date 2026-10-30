"use strict";

import { Parts, Definition } from "occam-parsers";

import { reducedRuleNameFromRuleName, repeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromIndirectRuleName } from "../utilities/ruleName";

const { RuleNamePart, OneOrMorePartsPart, ZeroOrMorePartsPart } = Parts;

export default class RewrittenDefinition extends Definition {
  static fromRuleName(ruleName, singular, ruleMap) {
    if (ruleMap === undefined) {
      ruleMap = singular; ///

      singular = false;
    }

    const parts = [],
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName);

    parts.push(reducedRuleNamePart);

    if (!singular) {
      const repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
            repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
            zeroOrMoreRepeatedRuleNamePartPart = ZeroOrMorePartsPart.fromPart(repeatedRuleNamePart);

      parts.push(zeroOrMoreRepeatedRuleNamePartPart);
    }

    const precedence = null,
          rewrittenDefinition = new RewrittenDefinition(parts, precedence);

    return rewrittenDefinition;
  }

  static fromDefiniitonRuleNameAndIndirectRuleName(definition, ruleName, indirectRuleName, ruleMap) {
    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
          repeatedRuleNamePart = indirectlyRepeatedRuleNamePart,  ///
          oneOrMoreRepeatedRuleNamePartPart = OneOrMorePartsPart.fromPart(repeatedRuleNamePart),
          parts = [
            reducedRuleNamePart,
            oneOrMoreRepeatedRuleNamePartPart
          ],
          precedence = definition.getPrecedence(),
          rewrittenDefinition = new RewrittenDefinition(parts, precedence);

    return rewrittenDefinition;
  }
}

function ruleNamePartFromRuleName(ruleName) {
  const ruleNamePart = RuleNamePart.fromRuleName(ruleName);

  return ruleNamePart;
}
