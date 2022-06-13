"use strict";

import { Definition } from "occam-parsers";

import { RECURSIVE_TYPE } from "../types";
import { isDefinitionRecursive, recursiveRuleNamesFromDefinition } from "../utilities/definition";

export default class RecursiveDefinition extends Definition {
  constructor(parts, type, ruleName, recursiveRuleNames) {
    super(parts);

    this.type = type;
    this.ruleName = ruleName;
    this.recursiveRuleNames = recursiveRuleNames;
  }

  getType() {
    return this.type;
  }

  getRuleName() {
    return this.ruleName;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
  }

  isLeftRecursiveDefinition() {
    const leftRecursiveDefinition = false;

    return leftRecursiveDefinition;
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let recursiveDefinition = null;

    const definitionRecursive = isDefinitionRecursive(definition);

    if (definitionRecursive) {
      const type = RECURSIVE_TYPE,
            parts = definition.getParts(),
            recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

      recursiveDefinition = new RecursiveDefinition(parts, type, ruleName, recursiveRuleNames);
    }

    return recursiveDefinition;
  }
}
