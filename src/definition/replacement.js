"use strict";

import { arrayUtilities } from "necessary";
import { Parts, Definition } from "occam-parsers";

import { cloneParts } from "../utilities/parts";
import { ruleNamePartFromRuleName, directlyReducedPartFromPart } from "../utilities/part";
import { directlyRepeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleName";

const { first, head, tail } = arrayUtilities,
      { ZeroOrMorePartsPart } = Parts;

export default class ReplacementDefinition extends Definition {
  static fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
    const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
          directlyLeftRecursiveDefinitionParts = directlyLeftRecursiveDefinition.getParts(),
          firstDirectlyLeftRecursiveDefinitionParts = first(directlyLeftRecursiveDefinitionParts),
          part = firstDirectlyLeftRecursiveDefinitionParts, ///
          directlyReducedPart = directlyReducedPartFromPart(part),
          directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedRuleName),
          zeroOrMoreDirectlyRepeatedRuleNamePartPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);

    let parts = [
      directlyReducedPart,
      zeroOrMoreDirectlyRepeatedRuleNamePartPart
    ];

    parts = cloneParts(parts);  ///

    const replacementDefinition = new ReplacementDefinition(parts);

    return replacementDefinition;
  }

  static fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          ruleName = rule.getName(),
          leftRecursiveRuleNamePart = ruleNamePartFromRuleName(leftRecursiveRuleName),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName);

    let parts = [
      leftRecursiveRuleNamePart,
      indirectlyRepeatedRuleNamePart
    ];

    parts = cloneParts(parts);  ///

    const replacementDefinition = new ReplacementDefinition(parts);

    return replacementDefinition;
  }

  static fromLeftRecursiveDefinitionAndIndirectlyReducedRule(leftRecursiveDefinition, indirectlyReducedRule) {
    const indirectlyReducedRuleName = indirectlyReducedRule.getName(),
          leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(),
          leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts),
          reducedRuleName = indirectlyReducedRuleName,  ///
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName);

    let parts = [
      reducedRuleNamePart,
      ...leftRecursiveDefinitionPartsTail
    ];

    parts = cloneParts(parts);  ///

    const replacementDefinition = new ReplacementDefinition(parts);

    return replacementDefinition;
  }

  static fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRuleName) {
    const leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
          leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
          leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts),
          indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(),
          indirectlyLeftRecursiveDefinitionPartsHead = head(indirectlyLeftRecursiveDefinitionParts);

    let parts = [
      ...indirectlyLeftRecursiveDefinitionPartsHead,
      indirectlyRepeatedRuleNamePart,
      ...leftRecursiveDefinitionPartsTail
    ];

    parts = cloneParts(parts);  ///

    const replacementDefinition = new ReplacementDefinition(parts);

    return replacementDefinition;
  }
}
