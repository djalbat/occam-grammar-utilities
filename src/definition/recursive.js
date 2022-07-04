"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { reducedPartFromPart } from "../utilities/part";
import { isDefinitionRecursive, recursiveRuleNamesFromDefinition } from "../utilities/definition";
import { cloneParts, repeatedPartFromParts, recursiveRuleNamesFromParts } from "../utilities/parts";

const { first } = arrayUtilities;

export default class RecursiveDefinition extends Definition {
  constructor(parts, ruleName, recursiveRuleNames) {
    super(parts);

    this.ruleName = ruleName;

    this.recursiveRuleNames = recursiveRuleNames;
  }

  getRuleName() {
    return this.ruleName;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let recursiveDefinition = null;

    const definitionRecursive = isDefinitionRecursive(definition);

    if (definitionRecursive) {
      const parts = definition.getParts(),
            recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

      recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);
    }

    return recursiveDefinition;
  }

  static fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
    let parts = directlyLeftRecursiveDefinition.getParts();

    parts = cloneParts(parts); ///

    const firstPart = first(parts),
          part = firstPart, ///
          reducedPart = reducedPartFromPart(part),
          repeatedPart = repeatedPartFromParts(parts);

    parts = [
      reducedPart,
      repeatedPart
    ]

    const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);

    return recursiveDefinition;
  }
}
