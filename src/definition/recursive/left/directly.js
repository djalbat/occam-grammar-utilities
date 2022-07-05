"use strict";

import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../../definition/recursive/left";

import { mergeParts } from "../../../utilities/parts";
import { ruleNamePartFromRuleName } from "../../../utilities/part";
import { recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../../../utilities/parts";
import { isDefinitionComplex, isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../../utilities/definition";

const { head, tail, first } = arrayUtilities;

export default class DirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  static fromPartsAndRuleName(parts, ruleName) {
    const recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    return directlyLeftRecursiveDefinition;
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let directlyLeftRecursiveDefinition = null;

    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
            firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
            ruleNameFirstLeftRecursiveRuleName = (ruleName === firstLeftRecursiveRuleName);

      if (ruleNameFirstLeftRecursiveRuleName) {
        const definitionComplex = isDefinitionComplex(definition);

        if (definitionComplex) {
          const definitionString = definition.asString();

          throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
        }

        const parts = definition.getParts(),
              recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

        directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
      }
    }

    return directlyLeftRecursiveDefinition;
  }

  static fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName) {
    const leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(),
          leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts),
          indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(),
          indirectlyLeftRecursiveDefinitionPartsHead = head(indirectlyLeftRecursiveDefinitionParts);

    if (repeatedRuleName !== null) {
      const repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName);

      indirectlyLeftRecursiveDefinitionPartsHead.push(repeatedRuleNamePart);
    }

    const parts = mergeParts(indirectlyLeftRecursiveDefinitionPartsHead, leftRecursiveDefinitionPartsTail),
          ruleName = leftRecursiveDefinition.getRuleName(),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    return directlyLeftRecursiveDefinition;
  }
}
