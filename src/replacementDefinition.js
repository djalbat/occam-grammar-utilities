"use strict";

import { Parts, Definition } from "occam-parsers";

import { cloneParts } from "./utilities/parts";
import { first, head, tail } from "./utilities/array";
import { ruleNamePartFromRuleName, directlyReducedPartFromPart } from "./utilities/part";
import { directlyRepeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "./utilities/ruleName";

const { ZeroOrMorePartsPart } = Parts;

export default class ReplacementDefinition extends Definition {
  isPresent(rule) {
    const string = this.asString(),
          definitions = rule.getDefinitions(),
          replacementDefinitions = definitions.filter((definition) => {
            const definitionReplacementDefinition = (definition instanceof ReplacementDefinition);

            if (definitionReplacementDefinition) {
              return true;
            }
          }),
          present = replacementDefinitions.some((replacementDefinition) => {
            const replacementDefinitionString = replacementDefinition.asString();

            if (replacementDefinitionString === string) {
              return true;
            }
          });

    return present;
  }

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

  static fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, directlyRepeatedRule) {
    let parts;

    const definition = indirectlyLeftRecursiveDefinition.getDefinition(),
          directlyRepeatedRuleName = directlyRepeatedRule.getName(),
          directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedRuleName),
          zeroOrMoreDirectlyRepeatedRuleNamePartsPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);  ///

    parts = definition.getParts();

    parts = [ ///
      ...parts,
      zeroOrMoreDirectlyRepeatedRuleNamePartsPart
    ];

    parts = cloneParts(parts);  ///

    const replacementDefinition = new ReplacementDefinition(parts);

    return replacementDefinition;
  }

  static fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule) {
    const leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName(),
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
