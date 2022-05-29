"use strict";

import RecursiveDefinition from "../definition/recursive";

import { LEFT_RECURSIVE_TYPE } from "../types";
import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../utilities/definition";

export default class LeftRecursiveDefinition extends RecursiveDefinition {
  constructor(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    super(parts, type, ruleName, definition, recursiveRuleNames);

    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
  }

  static fromRecursiveDefinition(recursiveDefinition) {
    let leftRecursiveDefinition = null;

    const definition = recursiveDefinition.getDefinition(),
          definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const parts = [],
            type = LEFT_RECURSIVE_TYPE,
            ruleName = recursiveDefinition.getRuleName(),
            recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(),
            leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition);

      leftRecursiveDefinition = new LeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return leftRecursiveDefinition;
  }
}
