"use strict";

import RecursiveDefinition from "../../definition/recursive";

import { ruleNamePartFromRuleName } from "../../utilities/part";
import { ruleNameFromReducedRuleName } from "../../utilities/ruleName";
import { recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../../utilities/parts";
import { mergeDefinitionParts, isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

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

  static fromImplicitlyLeftRecursiveDefinitionAndDefinition(implicitlyLeftRecursiveDefinition, definition) {
    const parts = mergeDefinitionParts(definition, implicitlyLeftRecursiveDefinition),
          ruleName = implicitlyLeftRecursiveDefinition.getRuleName(),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    return leftRecursiveDefinition;
  }
}
