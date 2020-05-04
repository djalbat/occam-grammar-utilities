"use strict";

import RecursiveDefinition from "../definition/recursive";

import { LEFT_RECURSIVE_TYPE } from "../types";
import { recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../utilities/definition";

export default class LeftRecursiveDefinition extends RecursiveDefinition {
  constructor(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    super(type, parts, ruleName, definition, recursiveRuleNames);

    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
  }

  rewrite(rules) {
    ///
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let leftRecursiveDefinition = null;

    const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = (leftRecursiveRuleNamesLength > 0);

    if (definitionLeftRecursive) {
      const type = LEFT_RECURSIVE_TYPE,
            parts = definition.getParts(),
            recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

      leftRecursiveDefinition = new LeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return leftRecursiveDefinition;
  }
}
