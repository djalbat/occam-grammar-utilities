"use strict";

import { Definition } from "occam-parsers";

import { RECURSIVE_TYPE } from "../types";
import { recursiveRuleNamesFromDefinition } from "../utilities/definition";

export default class RecursiveDefinition extends Definition {
  constructor(parts, type, ruleName, definition, recursiveRuleNames) {
    super(parts);

    this.type = type;
    this.ruleName = ruleName;
    this.definition = definition;
    this.recursiveRuleNames = recursiveRuleNames;
  }

  getType() {
    return this.type;
  }

  getRuleName() {
    return this.ruleName;
  }

  getDefinition() {
    return this.definition;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
  }

  isLeftRecursiveDefinition() {
    const leftRecursiveDefinition = false;

    return leftRecursiveDefinition;
  }

  match(definition) {
    const matches = (this.definition === definition);

    return matches;
  }

  rewrite(ruleMap) {
    ///
  }

  replace(ruleMap) {
    const rule = ruleMap[this.ruleName],
          replacedDefinition = this.definition, ///
          replacementDefinition = this; ///

    rule.replaceDefinition(replacedDefinition, replacementDefinition);
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let recursiveDefinition = null;

    const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursiveDefinition = (recursiveRuleNamesLength > 0);

    if (definitionRecursiveDefinition) {
      const parts = [],
            type = RECURSIVE_TYPE;

      recursiveDefinition = new RecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames);
    }

    return recursiveDefinition;
  }
}
