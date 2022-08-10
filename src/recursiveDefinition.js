"use strict";

import { isDefinitionRecursive, recursiveRuleNamesFromDefinition } from "./utilities/definition";

export default class RecursiveDefinition {
  constructor(rule, definition, recursiveRuleNames) {
    this.rule = rule;
    this.definition = definition;
    this.recursiveRuleNames = recursiveRuleNames;
  }

  getRule() {
    return this.rule;
  }

  getDefinition() {
    return this.definition;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
  }

  getRuleName() {
    const ruleName = this.rule.getName();

    return ruleName;
  }

  getParts() { return this.definition.getParts(); }

  static fromRuleAndDefinition(rule, definition) {
    let recursiveDefinition = null;

    const definitionRecursive = isDefinitionRecursive(definition);

    if (definitionRecursive) {
      const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

      recursiveDefinition = new RecursiveDefinition(rule, definition, recursiveRuleNames);
    }

    return recursiveDefinition;
  }
}
