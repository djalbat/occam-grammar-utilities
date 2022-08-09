"use strict";

import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../recursiveDefinition/left";

import { cloneParts } from "../../utilities/parts";
import { ruleNamePartFromRuleName } from "../../utilities/part";
import { recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../../utilities/parts";
import { isDefinitionComplex, isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

const { head, tail, first } = arrayUtilities;

export default class DirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  getLeftRecursiveRuleName() {
    const leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          leftRecursiveRuleName = firstLeftRecursiveRuleName; ///

    return leftRecursiveRuleName;
  }

  static fromRuleAndDefinition(rule, definition) {
    let directlyLeftRecursiveDefinition = null;

    const ruleName = rule.getName(),
          definitionLeftRecursive = isDefinitionLeftRecursive(definition);

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

        const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

        directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames);
      }
    }

    return directlyLeftRecursiveDefinition;
  }

  // static fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndIndirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, indirectlyRepeatedRuleName) {
  //   const leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(),
  //         leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts),
  //         indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(),
  //         indirectlyLeftRecursiveDefinitionPartsHead = head(indirectlyLeftRecursiveDefinitionParts);
  //
  //   const indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName);
  //
  //   let parts = [
  //     ...indirectlyLeftRecursiveDefinitionPartsHead,
  //     indirectlyRepeatedRuleNamePart,
  //     ...leftRecursiveDefinitionPartsTail
  //   ];
  //
  //   parts = cloneParts(parts);  ///
  //
  //   const ruleName = leftRecursiveDefinition.getRuleName(),
  //         recursiveRuleNames = recursiveRuleNamesFromParts(parts),
  //         leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
  //         directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
  //
  //   return directlyLeftRecursiveDefinition;
  // }
}
