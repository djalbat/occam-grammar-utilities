"use strict";

import { arrayUtilities } from "necessary";
import { Parts, Definition } from "occam-parsers";

import { cloneParts } from "../utilities/parts";
import { directlyRepeatedRuleNameFromRuleName } from "../utilities/ruleName";
import { ruleNamePartFromRuleName, directlyReducedPartFromPart } from "../utilities/part";

const { first } = arrayUtilities,
      { ZeroOrMorePartsPart } = Parts;

export default class ReplacementDefinition extends Definition {
  static fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
    const directlyLeftRecursiveDefinitionParts = directlyLeftRecursiveDefinition.getParts(),
          firstDirectlyLeftRecursiveDefinitionParts = first(directlyLeftRecursiveDefinitionParts),
          part = firstDirectlyLeftRecursiveDefinitionParts, ///
          directlyReducedPart = directlyReducedPartFromPart(part),
          ruleName = directlyLeftRecursiveDefinition.getRuleName(),
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
}
