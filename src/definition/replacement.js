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

  static fromLeftRecursiveDefinition(leftRecursiveDefinition) {
    const definition = leftRecursiveDefinition.getDefinition();

    let parts = definition.getParts();

    let firstPart = first(parts);

    firstPart = firstPart.clone(); ///

    const rule = leftRecursiveDefinition.getRule(),
          ruleName = rule.getName(),
          leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          leftRecursiveRuleName = firstLeftRecursiveRuleName, ///
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName);

    parts = [
      firstPart,
      indirectlyRepeatedRuleNamePart
    ];

    const replacementDefinition = new ReplacementDefinition(parts);

    return replacementDefinition;
  }

  static fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          depth = indirectlyLeftRecursiveDefinition.getDepth(),
          ruleName = rule.getName(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
          zeroOrMoreIndirectlyRepeatedRuleNamePartsPart = new ZeroOrMorePartsPart(indirectlyRepeatedRuleNamePart);  ///

    let parts;

    if (depth === 1) {
      const implicitlyReducedRuleName = implicitlyReducedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
            implicitlyReducedRuleNamePart = ruleNamePartFromRuleName(implicitlyReducedRuleName);

      parts = [
        implicitlyReducedRuleNamePart,
        zeroOrMoreIndirectlyRepeatedRuleNamePartsPart
      ];
    } else {
      const indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(),
            indirectlyLeftRecursiveDefinitionPartsHead = head(indirectlyLeftRecursiveDefinitionParts);

      parts = [
        ...indirectlyLeftRecursiveDefinitionPartsHead,
        zeroOrMoreIndirectlyRepeatedRuleNamePartsPart
      ];

      parts = cloneParts(parts);  ///
    }

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
