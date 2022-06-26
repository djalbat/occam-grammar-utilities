"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { reducedPartFromPart } from "../utilities/part";
import { repeatedPartFromParts, recursiveRuleNamesFromParts } from "../utilities/parts";
import { isDefinitionRecursive, definitionPartsFromDefinition, recursiveRuleNamesFromDefinition } from "../utilities/definition";

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
    let directlyLeftRecursiveDefinitionParts = definitionPartsFromDefinition(directlyLeftRecursiveDefinition);

    const firstDirectlyLeftRecursiveDefinitionPart = first(directlyLeftRecursiveDefinitionParts),
          part = firstDirectlyLeftRecursiveDefinitionPart, ///
          reducedPart = reducedPartFromPart(part);

    let parts = directlyLeftRecursiveDefinitionParts; ///

    const repeatedPart = repeatedPartFromParts(parts);

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
