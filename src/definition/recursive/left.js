"use strict";

import RecursiveDefinition from "../../definition/recursive";

import { reducedRuleNameFromRuleName } from "../../utilities/ruleName";
import { isDefinitionUnary, isDefinitionComplex, isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

export default class LeftRecursiveDefinition extends RecursiveDefinition {
  constructor(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames) {
    super(parts, ruleName, recursiveRuleNames);

    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
  }

  isUnary() {
    const definition = this,  ///
          definitionUnary = isDefinitionUnary(definition),
          unary = definitionUnary;  ///

    return unary;
  }

  isComplex() {
    const definition = this,  ///
          definitionComplex = isDefinitionComplex(definition),
          complex = definitionComplex;  ///

    return complex;
  }

  isIsolated(ruleMap) {
    const ruleName = this.getRuleName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRule = ruleMap[reducedRuleName] || null,
          isolated = (reducedRule === null);

    return isolated;
  }

  static fromRecursiveDefinition(recursiveDefinition) {
    let leftRecursiveDefinition = null;

    const recursiveDefinitionLeftRecursive = isDefinitionLeftRecursive(recursiveDefinition);

    if (recursiveDefinitionLeftRecursive) {
      const parts = recursiveDefinition.getParts(),
            ruleName = recursiveDefinition.getRuleName(),
            recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(),
            leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(recursiveDefinition);

      leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return leftRecursiveDefinition;
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let leftRecursiveDefinition = null;

    const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursiveDefinition = (leftRecursiveRuleNamesLength > 0);

    if (definitionLeftRecursiveDefinition) {
      const parts = definition.getParts(),
            recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

      leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return leftRecursiveDefinition;
  }
}
