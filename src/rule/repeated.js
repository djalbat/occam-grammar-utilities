"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RepeatedNode from "../node/repeated";

import { cloneParts } from "../utilities/parts";
import { repeatedRuleNameFromRuleName } from "../utilities/ruleName";

const { tail } = arrayUtilities;

export default class RepeatedRule extends Rule {
  static fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition) {
    let repeatedRule = null;

    let parts = indirectlyLeftRecursiveDefinition.getParts();

    const partsLength = parts.length;

    if (partsLength > 1) {
      const partsTail = tail(parts);

      parts = partsTail;  ///

      parts = cloneParts(parts);  ///

      const definition = new Definition(parts),
            ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
            repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
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
