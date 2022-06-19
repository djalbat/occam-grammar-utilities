"use strict";

import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../../definition/recursive/left";

import { recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../../../utilities/parts";
import { isDefinitionUnary,
         isDefinitionComplex,
         isDefinitionLeftRecursive,
         recursiveRuleNamesFromDefinition,
         leftRecursiveRuleNamesFromDefinition } from "../../../utilities/definition";

const { first } = arrayUtilities;

export default class DirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  static fromRuleNameAndParts(ruleName, parts) {
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
        const definitionUnary = isDefinitionUnary(definition);

        if (definitionUnary) {
          const definitionString = this.asString();

          throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
        }

        const definitionComplex = isDefinitionComplex(definition);

        if (definitionComplex) {
          const definitionString = this.asString();

          throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
        }

        const parts = definition.getParts(),
              recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

        directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
      }
    }

    return directlyLeftRecursiveDefinition;
  }
}
