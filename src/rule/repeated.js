"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RepeatedNode from "../node/repeated";

import { definitionPartsFromDefinition } from "../utilities/definition";
import { repeatedRuleNameFromRuleNameAndIndex } from "../utilities/ruleName";

const { tail } = arrayUtilities;

export default class RepeatedRule extends Rule {
  static fromIndirectlyLeftRecursiveDefinitionAndIndex(indirectlyLeftRecursiveDefinition, index) {
    let repeatedRule = null;

    const definitionParts = definitionPartsFromDefinition(indirectlyLeftRecursiveDefinition),
          parts = tail(definitionParts),  ///
          partsLength = parts.length;

    if (partsLength > 0) {
      const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
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
