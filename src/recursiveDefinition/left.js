"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RecursiveDefinition from "../recursiveDefinition";

import { ruleNamePartFromRuleName } from "../utilities/part";
import { cloneParts, recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../utilities/parts";
import { ruleNameFromReducedRuleName, indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../utilities/ruleName";
import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../utilities/definition";

const { tail } = arrayUtilities,
      { ZeroOrMorePartsPart } = Parts;

export default class LeftRecursiveDefinition extends RecursiveDefinition {
  constructor(rule, definition, recursiveRuleNames, leftRecursiveRuleNames) {
    super(rule, definition, recursiveRuleNames);

    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
  }

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
  }

  static fromRuleAndDefinition(rule, definition) {
    let leftRecursiveDefinition = null;

    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
            leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition);

      leftRecursiveDefinition = new LeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return leftRecursiveDefinition;
  }

  // static fromDirectlyReducedRuleName(directlyReducedRuleName) {
  //   const directlyReducedRuleNamePart = ruleNamePartFromRuleName(directlyReducedRuleName),
  //         parts = [
  //           directlyReducedRuleNamePart
  //         ],
  //         ruleName = ruleNameFromReducedRuleName(reducedRuleName),
  //         recursiveRuleNames = recursiveRuleNamesFromParts(parts),
  //         leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
  //         leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
  //
  //   return leftRecursiveDefinition;
  // }

  // static fromIndirectlyReducedRuleName(indirectlyReducedRuleName) {
  //   const reducedRuleName = indirectlyReducedRuleName,  ///
  //         reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
  //         parts = [
  //           reducedRuleNamePart
  //         ],
  //         ruleName = ruleNameFromReducedRuleName(reducedRuleName),
  //         recursiveRuleNames = recursiveRuleNamesFromParts(parts),
  //         leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
  //         leftRecursiveDefinition = new LeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
  //
  //   return leftRecursiveDefinition;
  // }
}
