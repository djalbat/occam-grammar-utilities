"use strict";

import { Definition, Parts } from "occam-parsers";

import {ruleNamePartFromRuleName} from "../utilities/part";
import { arePartsRecursive, recursiveRuleNamesFromParts } from "../utilities/parts";
import { isDefinitionRecursive, recursiveRuleNamesFromDefinition } from "../utilities/definition";
import { repeatedRuleNameFromRuleName, directlyReducedRuleNameFromRuleName } from "../utilities/ruleName";

const { ZeroOrMorePartsPart } = Parts;

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
    const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
          directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyReducedRuleName),
          zeroOrMoreDirectlyRepeatedRuleNamePartPart = new ZeroOrMorePartsPart(repeatedRuleNamePart),
          parts = [
            directlyRepeatedRuleNamePart,
            zeroOrMoreDirectlyRepeatedRuleNamePartPart
          ],
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          recursiveDefinition = new RecursiveDefinition(parts, ruleName, recursiveRuleNames);

    return recursiveDefinition;
  }
}
