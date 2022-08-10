"use strict";

import { arrayUtilities } from "necessary";

import LeftRecursiveReplacementDefinition from "../../../definition/replacement/leftRecursive";

import { ruleNamePartFromRuleName } from "../../../utilities/part";
import { cloneParts, leftRecursiveRuleNamesFromParts, recursiveRuleNamesFromParts } from "../../../utilities/parts";

const { head, tail } = arrayUtilities;

export default class DirectlyLeftRecursiveReplacementDefinition extends LeftRecursiveReplacementDefinition {
  static fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndIndirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, indirectlyRepeatedRuleName) {
    const leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(),
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

    const rule = leftRecursiveDefinition.getRule(),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          directlyLeftRecursiveReplacementDefinition = new DirectlyLeftRecursiveReplacementDefinition(parts, rule, recursiveRuleNames, leftRecursiveRuleNames);

    return directlyLeftRecursiveReplacementDefinition;
  }
}
