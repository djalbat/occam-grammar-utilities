"use strict";

import { arrayUtilities } from "necessary";
import { Parts, Definition } from "occam-parsers";

import { directlyRepeatedRuleNameFromRuleName } from "../utilities/ruleName";
import { ruleNamePartFromRuleName, directlyReducedPartFromPart } from "../utilities/part";

const { first } = arrayUtilities,
      { ZeroOrMorePartsPart } = Parts;

export default class ReplacementDefinition extends Definition {
  static fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
    const definition = directlyLeftRecursiveDefinition.getDefinition();

    let parts = definition.getParts();

    const firstPart = first(parts),
          part = firstPart, ///
          directlyReducedPart = directlyReducedPartFromPart(part),
          ruleName = directlyLeftRecursiveDefinition.getRuleName(),
          directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedRuleName),
          zeroOrMoreDirectlyRepeatedRuleNamePartPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);

    parts = [
      directlyReducedPart,
      zeroOrMoreDirectlyRepeatedRuleNamePartPart
    ];

    const replacementDefinition = new ReplacementDefinition(parts);

    return replacementDefinition;
  }
}