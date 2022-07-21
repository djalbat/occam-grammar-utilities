"use strict";

import { arrayUtilities } from "necessary";
import { Definition, Parts } from "occam-parsers";

import { directlyRepeatedRuleNameFromRuleName } from "../utilities/ruleName";
import { arePartsRecursive, recursiveRuleNamesFromParts } from "../utilities/parts";
import { ruleNamePartFromRuleName, directlyReducedPartFromPart } from "../utilities/part";
import { isDefinitionRecursive, recursiveRuleNamesFromDefinition } from "../utilities/definition";

const { first } = arrayUtilities,
      { ZeroOrMorePartsPart } = Parts;

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

  static fromRuleNameAndParts(ruleName, parts) {
    let recursiveDefinition = null;

    const partsRecursive = arePartsRecursive(parts);

    if (partsRecursive) {
      const recursiveRuleNames = recursiveRuleNamesFromParts(parts);

      recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);
    }

    return recursiveDefinition;
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

    const firstPart = first(parts),
          part = firstPart, ///
          directlyReducedPart = directlyReducedPartFromPart(part),
          ruleName = directlyLeftRecursiveDefinition.getRuleName(),
          directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedRuleName),
          zeroOrMoreDirectlyRepeatedRuleNamePartPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);

    parts = [
      directlyReducedPart,
      zeroOrMoreDirectlyRepeatedRuleNamePartPart
    ];

    const recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);

    return recursiveDefinition;
  }
}
