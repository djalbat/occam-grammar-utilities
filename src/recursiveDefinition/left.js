"use strict";

import RecursiveDefinition from "../recursiveDefinition";

import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../utilities/definition";

export default class LeftRecursiveDefinition extends RecursiveDefinition {
  constructor(rule, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    super(rule, definition, recursiveRuleNames);

    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
  }

  idEqualTo(lLeftRecursiveDefinition) {
    const definition = lLeftRecursiveDefinition.getDefinition(),
          equalTo = (definition === this.definition);

    return equalTo;
  }

  static fromRuleAndDefinition(rule, definition) {
    let leftRecursiveDefinition = null;

    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
            leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition);

      leftRecursiveDefinition = new LeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return leftRecursiveDefinition;
  }
}
