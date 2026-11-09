"use strict";

import { Definition } from "occam-parsers";

import { partsfromDefinition } from "../../utilities/definition";
import { ruleNamePartFromRuleName, oneOrMorePartsPartFromPart } from "../../utilities/part";
import { repeatedRuleNameFromRuleName, indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyRewrittenDefinition extends Definition {
  static fromPartsAndPrecedence(parts, precedence, context) {
    const indirectlyRewrittenDefinition = new IndirectlyRewrittenDefinition(parts, precedence);

    return indirectlyRewrittenDefinition;
  }

  static fromRuleNameAndIndirectRuleName(ruleName, indirectRuleName, context) {
    const indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          indirectlyReducedRuleNamePart = ruleNamePartFromRuleName(indirectlyReducedRuleName),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          oneOrMoreRepeatedRuleNamePartPart = oneOrMorePartsPartFromPart(repeatedRuleNamePart),
          parts = [
            indirectlyReducedRuleNamePart,
            oneOrMoreRepeatedRuleNamePartPart
          ],
          precedence = null,
          indirectlyRewrittenDefinition = new IndirectlyRewrittenDefinition(parts, precedence);

    return indirectlyRewrittenDefinition;
  }
}

export function indirectlyRewrittenDefinitionsFromDefinitions(definitions, context) {
  const indirectlyRewrittenDefinitions = definitions.map((definition) => {
    const parts = partsfromDefinition(definition, context),
          precedence = definition.getPrecedence(),
          indirectlyRewrittenDefinition = IndirectlyRewrittenDefinition.fromPartsAndPrecedence(parts, precedence, context);

    return indirectlyRewrittenDefinition;
  });

  return indirectlyRewrittenDefinitions;
}
