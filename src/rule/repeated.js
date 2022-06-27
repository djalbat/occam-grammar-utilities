"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RepeatedNode from "../node/repeated";

import { cloneDefinitionParts } from "../utilities/definition";
import { repeatedRuleNameFromRuleNameAndIndex } from "../utilities/ruleName";

const { tail } = arrayUtilities;

export default class RepeatedRule extends Rule {
  static fromIndirectlyLeftRecursiveDefinitionAndIndex(indirectlyLeftRecursiveDefinition, index) {
    let repeatedRule = null;

    const parts = indirectlyLeftRecursiveDefinition.getParts(),
          partsLength = parts.length;

    if (partsLength > 1) {
      const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
            clonedParts = cloneDefinitionParts(indirectlyLeftRecursiveDefinition),
            clonedPartsTail = tail(clonedParts),
            parts = clonedPartsTail,  ///
            definition = new Definition(parts),
            repeatedRuleName = repeatedRuleNameFromRuleNameAndIndex(ruleName, index),
            name = repeatedRuleName,  ///
            ambiguous = false,
            definitions = [
              definition
            ],
            NonTerminalNode = RepeatedNode;  ///

      repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return repeatedRule;
  }
}
