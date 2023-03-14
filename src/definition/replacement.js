"use strict";

import { Parts, Definition } from "occam-parsers";

import { cloneParts } from "../utilities/parts";
import { first, head, tail } from "../utilities/array";
import { ruleNamePartFromRuleName, directlyReducedPartFromPart } from "../utilities/part";
import { directlyRepeatedRuleNameFromRuleName,
         implicitlyReducedRuleNameFromRuleNameAndLeftRecursiveRuleName,
         indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleName";

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

  static fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          ruleName = rule.getName(),
          implicitlyReducedRuleName = implicitlyReducedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          implicitlyReducedRuleNamePart = ruleNamePartFromRuleName(implicitlyReducedRuleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName);

    let parts = [
      implicitlyReducedRuleNamePart,
      indirectlyRepeatedRuleNamePart
    ];

    parts = cloneParts(parts);  ///

    let replacementDefinition = new ReplacementDefinition(parts);

    const present = replacementDefinition.isPresent(rule);

    if (present) {
      replacementDefinition = null;
    }

    return replacementDefinition;
  }

  static fromLeftRecursiveDefinitionAndIndirectlyReducedRule(leftRecursiveDefinition, indirectlyReducedRule) {
    let replacementDefinition = null;

    if (indirectlyReducedRule !== null) {
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

      replacementDefinition = new ReplacementDefinition(parts);
    }

    return replacementDefinition;
  }

  static fromDirectlyLeftRecursiveDefinitionAndDirectlyReducedRule(directlyLeftRecursiveDefinition, directlyReducedRule) {
    let replacementDefinition = null;

    if (directlyReducedRule !== null) {
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

      replacementDefinition = new ReplacementDefinition(parts);
    }

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
