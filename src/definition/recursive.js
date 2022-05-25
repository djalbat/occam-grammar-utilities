"use strict";

import { Definition } from "occam-parsers";

import { recursiveRuleNamesFromDefinition } from "../utilities/definition";
import { RECURSIVE_TYPE, DIRECTLY_LEFT_RECURSIVE_TYPE, IMPLICITLY_LEFT_RECURSIVE_TYPE,  INDIRECTLY_LEFT_RECURSIVE_TYPE } from "../types";

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
    const leftRecursiveDefinition = ((this.type === DIRECTLY_LEFT_RECURSIVE_TYPE) ||
                                     (this.type === INDIRECTLY_LEFT_RECURSIVE_TYPE) ||
                                     (this.type === IMPLICITLY_LEFT_RECURSIVE_TYPE));

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
