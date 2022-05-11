"use strict";

import { Definition } from "occam-parsers";

import { recursiveRuleNamesFromDefinition } from "../utilities/definition";
import { RECURSIVE_TYPE, DIRECTLY_LEFT_RECURSIVE_TYPE, IMPLICITLY_LEFT_RECURSIVE_TYPE,  INDIRECTLY_LEFT_RECURSIVE_TYPE } from "../types";

export default class RecursiveDefinition extends Definition {
  constructor(type, parts, ruleName, definition, recursiveRuleNames) {
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
    const leftRecursiveDefinition = ((this.type === DIRECTLY_LEFT_RECURSIVE_TYPE) ||
                                     (this.type === INDIRECTLY_LEFT_RECURSIVE_TYPE) ||
                                     (this.type === IMPLICITLY_LEFT_RECURSIVE_TYPE));

    return leftRecursiveDefinition;
  }

  replace(ruleMap) {
    const rule = ruleMap[this.ruleName] || null,
          replacedDefinition = this.definition, ///
          replacementDefinition = this; ///

    rule.replaceDefinition(replacedDefinition, replacementDefinition);
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let recursiveDefinition = null;

    const type = RECURSIVE_TYPE,
          parts = definition.getParts(),
          recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursiveDefinition = (recursiveRuleNamesLength > 0);

    if (definitionRecursiveDefinition) {
      recursiveDefinition = new RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames);
    }

    return recursiveDefinition;
  }
}
