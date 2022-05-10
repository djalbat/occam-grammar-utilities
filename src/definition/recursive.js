"use strict";

import { Definition } from "occam-parsers";

import { RECURSIVE_TYPE } from "../types";
import { recursiveRuleNamesFromDefinition } from "../utilities/definition";

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
