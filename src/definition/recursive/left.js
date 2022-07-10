"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RecursiveDefinition from "../../definition/recursive";

import { ruleNamePartFromRuleName } from "../../utilities/part";
import { ruleNameFromReducedRuleName } from "../../utilities/ruleName";
import { cloneParts, singlePartFromParts, recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../../utilities/parts";
import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

const { tail, push } = arrayUtilities,
      { ZeroOrMorePartsPart } = Parts;

export default class LeftRecursiveDefinition extends RecursiveDefinition {
  constructor(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames) {
    super(parts, ruleName, recursiveRuleNames);

    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
  }

  static fromReducedRuleName(reducedRuleName) {
    const reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          parts = [
            reducedRuleNamePart
          ],
          ruleName = ruleNameFromReducedRuleName(reducedRuleName),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    return leftRecursiveDefinition;
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

  static fromLeftRecursiveDefinitionAndReducedRuleName(leftRecursiveDefinition, reducedRuleName) {
    const leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(),
          leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName);

    let parts = [];

    parts.push(reducedRuleNamePart);

    push(parts, leftRecursiveDefinitionPartsTail);

    parts = cloneParts(parts);  ///

    const ruleName = leftRecursiveDefinition.getRuleName(),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts);

    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///

    return leftRecursiveDefinition;
  }

  static fromLeftRecursiveDefinitionAndDirectlyLeftRecursiveDefinition(leftRecursiveDefinition, directlyLeftRecursiveDefinition) {
    let parts;

    parts = directlyLeftRecursiveDefinition.getParts();

    const partsTail = tail(parts);

    parts = partsTail;  ///

    const singlePart = singlePartFromParts(parts),
          part = singlePart,  ///
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

    parts = leftRecursiveDefinition.getParts();

    parts = [ ///
      ...parts,
      zeroOrMorePartsPart
    ];

    parts = cloneParts(parts);  ///

    const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts);

    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///

    return leftRecursiveDefinition;
  }
}
