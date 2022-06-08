"use strict";

import RecursiveDefinition from "../../definition/recursive";

import { reducedRuleNameFromRuleName } from "../../utilities/ruleName";
import { LEFT_RECURSIVE_TYPE, RECURSIVE_TYPE } from "../../types";
import { isDefinitionUnary, isDefinitionComplex, isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

export default class LeftRecursiveDefinition extends RecursiveDefinition {
  constructor(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    super(parts, type, ruleName, definition, recursiveRuleNames);

    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
  }

  isLeftRecursiveDefinition() {
    const leftRecursiveDefinition = true;

    return leftRecursiveDefinition;
  }

  isUnary() {
    const definition = this.getDefinition(),
          definitionUnary = isDefinitionUnary(definition),
          unary = definitionUnary;  ///

    return unary;
  }

  isComplex() {
    const definition = this.getDefinition(),
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

    const definition = recursiveDefinition.getDefinition(),
          definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const type = LEFT_RECURSIVE_TYPE,
            parts = recursiveDefinition.getParts(),
            ruleName = recursiveDefinition.getRuleName(),
            recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(),
            leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition);

      leftRecursiveDefinition = new LeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return leftRecursiveDefinition;
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let leftRecursiveDefinition = null;

    const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursiveDefinition = (leftRecursiveRuleNamesLength > 0);

    if (definitionLeftRecursiveDefinition) {
      const parts = [],
            type = RECURSIVE_TYPE,
            recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

      leftRecursiveDefinition = new LeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return leftRecursiveDefinition;
  }
}
