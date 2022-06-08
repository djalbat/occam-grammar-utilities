"use strict";

import LeftRecursiveDefinition from "../../../definition/recursive/left";

import { repeatedPartFromParts } from "../../../utilities/parts";
import { reducedPartFromRuleName } from "../../../utilities/part";
import { DIRECTLY_LEFT_RECURSIVE_TYPE } from "../../../types";
import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../../utilities/definition";

export default class DirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  rewrite(ruleMap) {
    const unary = this.isUnary(),
          complex = this.isComplex(),
          isolated = this.isIsolated(ruleMap);

    if (unary) {
      const definitionString = this.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
    }

    if (complex) {
      const ruleName = this.getRuleName(),
            definitionString = this.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
    }

    if (isolated) {
      const ruleName = this.getRuleName(),
            definitionString = this.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is isolated and therefore cannot be rewritten.`);
    }

    let parts = this.getParts();

    parts.shift();

    parts = parts.splice(0);  ///

    const ruleName = this.getRuleName(),
          reducedPart = reducedPartFromRuleName(ruleName),
          repeatedPart = repeatedPartFromParts(parts);

    this.addPart(reducedPart);

    this.addPart(repeatedPart);
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let directlyLeftRecursiveDefinition = null;

    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition);

      leftRecursiveRuleNames.some((leftRecursiveRuleName) => {
        const ruleNameLeftRecursiveRuleName = (ruleName === leftRecursiveRuleName);

        if (ruleNameLeftRecursiveRuleName) {
          const type = DIRECTLY_LEFT_RECURSIVE_TYPE,
                parts = definition.getParts(),
                recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

          directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);

          return true;
        }
      });
    }

    return directlyLeftRecursiveDefinition;
  }
}
