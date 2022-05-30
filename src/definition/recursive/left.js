"use strict";

import RecursiveDefinition from "../../definition/recursive";

import {LEFT_RECURSIVE_TYPE, RECURSIVE_TYPE} from "../../types";
import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

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
