"use strict";

import { arrayUtilities } from "necessary";

import ReplacementDefinition from "../../definition/replacement";

import { ruleNamePartFromRuleName } from "../../utilities/part";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";
import { cloneParts, recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../../utilities/parts";

const { tail } = arrayUtilities;

export default class LeftRecursiveReplacementDefinition extends ReplacementDefinition {
  constructor(parts, rule, recursiveRuleNames, leftRecursiveRuleNames) {
    super(parts);

    this.rule = rule;
    this.recursiveRuleNames = recursiveRuleNames;
    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getRule() {
    return this.rule;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
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

    const rule = leftRecursiveDefinition.getRule(),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          leftRecursiveReplacementDefinition = new LeftRecursiveReplacementDefinition(parts, rule, recursiveRuleNames, leftRecursiveRuleNames);

    return leftRecursiveReplacementDefinition;
  }

  static fromIndirectlyLeftRecursiveDefinitionAndLeftRecursiveRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveRuleName) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          ruleName = rule.getName(),
          leftRecursiveRuleNamePart = ruleNamePartFromRuleName(leftRecursiveRuleName),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
          parts = [
            leftRecursiveRuleNamePart,
            indirectlyRepeatedRuleNamePart
          ],
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          leftRecursiveReplacementDefinition = new LeftRecursiveReplacementDefinition(parts, rule, recursiveRuleNames, leftRecursiveRuleNames);

    return leftRecursiveReplacementDefinition;
  }
}
