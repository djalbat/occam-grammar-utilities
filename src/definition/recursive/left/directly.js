"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../../definition/recursive/left";

import { mergeParts, cloneParts } from "../../../utilities/parts";
import { ruleNamePartFromRuleName } from "../../../utilities/part";
import { recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../../../utilities/parts";
import { isDefinitionComplex, isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../../utilities/definition";

const { tail, first, front } = arrayUtilities,
      { ZeroOrMorePartsPart } = Parts;

export default class DirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  getLeftRecursiveRuleName() {
    const leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          leftRecursiveRuleName = firstLeftRecursiveRuleName; ///

    return leftRecursiveRuleName;
  }

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

  static fromLeftRecursiveDefinitionsRepeatedRuleNameAndRuleName(leftRecursiveDefinitionA, leftRecursiveDefinitionB, repeatedRuleName, ruleName) {
    let parts;

    parts = leftRecursiveDefinitionA.getParts();

    const partsFront = front(parts);

    parts = leftRecursiveDefinitionB.getParts();

    const partsTail = tail(parts);

    const repeatedRuleNamePartPart = ruleNamePartFromRuleName(repeatedRuleName),
          part = repeatedRuleNamePartPart,
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

    parts = [
      ...partsFront,
      zeroOrMorePartsPart,
      ...partsTail
    ];

    parts = cloneParts(parts);

    const recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    return directlyLeftRecursiveDefinition;
  }

  static fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName) {
    const leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(),
          leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts),
          indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(),
          indirectlyLeftRecursiveDefinitionPartsFront = front(indirectlyLeftRecursiveDefinitionParts);

    if (repeatedRuleName !== null) {
      const repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
            part = repeatedRuleNamePart,  ///
            zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      indirectlyLeftRecursiveDefinitionPartsFront.push(zeroOrMorePartsPart);
    }

    const parts = mergeParts(indirectlyLeftRecursiveDefinitionPartsFront, leftRecursiveDefinitionPartsTail),
          ruleName = leftRecursiveDefinition.getRuleName(),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    return directlyLeftRecursiveDefinition;
  }
}
