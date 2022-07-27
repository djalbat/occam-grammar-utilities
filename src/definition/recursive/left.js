"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RecursiveDefinition from "../../definition/recursive";

import { ruleNamePartFromRuleName } from "../../utilities/part";
import { cloneParts, recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../../utilities/parts";
import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";
import { ruleNameFromReducedRuleName,
         directlyReducedRuleNameFromRuleName,
         directlyRepeatedRuleNameFromRuleName,
         indirectlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";

const { tail } = arrayUtilities,
      { OptionalPartPart, ZeroOrMorePartsPart } = Parts;

export default class LeftRecursiveDefinition extends RecursiveDefinition {
  constructor(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames) {
    super(parts, ruleName, recursiveRuleNames);

    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
  }

  static fromRuleNameAndParts(ruleName, parts) {
    const recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    return leftRecursiveDefinition;
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let leftRecursiveDefinition = null;

    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const parts = definition.getParts(),
            recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
            leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition);

      leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return leftRecursiveDefinition;
  }

  static fromDirectlyReducedRuleName(directlyReducedRuleName) {
    const directlyReducedRuleNamePart = ruleNamePartFromRuleName(directlyReducedRuleName),
          parts = [
            directlyReducedRuleNamePart
          ],
          ruleName = ruleNameFromReducedRuleName(reducedRuleName),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    return leftRecursiveDefinition;
  }

  static fromIndirectlyReducedRuleName(indirectlyReducedRuleName) {
    const reducedRuleName = indirectlyReducedRuleName,  ///
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          parts = [
            reducedRuleNamePart
          ],
          ruleName = ruleNameFromReducedRuleName(reducedRuleName),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    return leftRecursiveDefinition;
  }

  static fromLeftRecursiveRuleNameAndRuleName(leftRecursiveRuleName, ruleName) {
    const indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleName(ruleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
          directlyReducedLeftRecursiveRuleName = directlyReducedRuleNameFromRuleName(leftRecursiveRuleName),
          directlyRepeatedLeftRecursiveRuleName = directlyRepeatedRuleNameFromRuleName(leftRecursiveRuleName),
          directlyReducedLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(directlyReducedLeftRecursiveRuleName),
          directlyRepeatedLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedLeftRecursiveRuleName),
          optionalIndirectlyRepeatedRuleNamePartPart = new OptionalPartPart(indirectlyRepeatedRuleNamePart),
          zeroOrMoreDirectlyRepeatedLeftRecursiveRuleNamePartsPart = new ZeroOrMorePartsPart(directlyRepeatedLeftRecursiveRuleNamePart),
          parts = [
            directlyReducedLeftRecursiveRuleNamePart,
            zeroOrMoreDirectlyRepeatedLeftRecursiveRuleNamePartsPart,
            optionalIndirectlyRepeatedRuleNamePartPart
          ],
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    return leftRecursiveDefinition;
  }

  static fromDirectlyReducedRuleNameAndDirectlyRepeatedRuleName(directlyReducedRuleName, directlyRepeatedRuleName) {
    const directlyReducedRuleNamePart = ruleNamePartFromRuleName(directlyReducedRuleName),
          directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedRuleName),
          zeroOrMoreDirectlyRecursiveRuleNamePartsPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart),
          parts = [
            directlyReducedRuleNamePart,
            zeroOrMoreDirectlyRecursiveRuleNamePartsPart
          ],
          reducedRuleName = directlyReducedRuleName,  ///
          ruleName = ruleNameFromReducedRuleName(reducedRuleName),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    return leftRecursiveDefinition;
  }

  static fromLeftRecursiveDefinitionAndIndirectlyReducedRuleName(leftRecursiveDefinition, indirectlyReducedRuleName) {
    const leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(),
          leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts),
          reducedRuleName = indirectlyReducedRuleName,  ///
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName);

    let parts = [
      reducedRuleNamePart,
      ...leftRecursiveDefinitionPartsTail
    ];

    parts = cloneParts(parts);  ///

    const ruleName = leftRecursiveDefinition.getRuleName(),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts);

    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///

    return leftRecursiveDefinition;
  }
}
