"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RecursiveDefinition from "../../definition/recursive";

import { ruleNamePartFromRuleName} from "../../utilities/part";
import { cloneParts, mergeParts, recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../../utilities/parts";
import { ruleNameFromReducedRuleName, reducedRuleNameFromRuleName, repeatedRuleNameFromRuleName } from "../../utilities/ruleName";
import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

const { tail, last } = arrayUtilities,
      { ZeroOrMorePartsPart } = Parts;

export default class LeftRecursiveDefinition extends RecursiveDefinition {
  constructor(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames) {
    super(parts, ruleName, recursiveRuleNames);

    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
  }

  static fromReducedRule(reducedRule) {
    const reducedRuleName = reducedRule.getName(),
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

  static fromRuleNameAndLeftRecursiveDefinition(ruleName, leftRecursiveDefinition) {
    let parts;

    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName);

    parts = leftRecursiveDefinition.getParts();

    const partsTail = tail(parts);

    const repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          repeatedRuleNamePartPart = ruleNamePartFromRuleName(repeatedRuleName),
          part = repeatedRuleNamePartPart,
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

    parts = [
      reducedRuleNamePart,
      zeroOrMorePartsPart,
      ...partsTail
    ];

    parts = cloneParts(parts);

    ruleName = leftRecursiveDefinition.getRuleName();  ///

    const recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts);

    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///

    return leftRecursiveDefinition;
  }

  static fromReducedLeftRecursiveDefinitionAndLeftRecursiveDefinition(reducedLeftRecursiveDefinition, leftRecursiveDefinition) {
    const leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(),
          leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts),
          reducedLeftRecursiveDefinitionParts = reducedLeftRecursiveDefinition.getParts();

    const parts = mergeParts(reducedLeftRecursiveDefinitionParts, leftRecursiveDefinitionPartsTail),
          ruleName = leftRecursiveDefinition.getRuleName(),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts);

    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///

    return leftRecursiveDefinition;
  }

  static fromRuleNameLeftRecursiveDefinitionAndDirectlyLeftRecursiveDefinition(ruleName, leftRecursiveDefinition, directlyLeftRecursiveDefinition) {
    let parts;

    parts = directlyLeftRecursiveDefinition.getParts();

    const lastPart = last(parts),
          part = lastPart,  ///
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

    parts = leftRecursiveDefinition.getParts();

    parts = [ ///
      ...parts,
      zeroOrMorePartsPart
    ];

    parts = cloneParts(parts);  ///

    const recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts);

    leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames); ///

    return leftRecursiveDefinition;
  }
}
