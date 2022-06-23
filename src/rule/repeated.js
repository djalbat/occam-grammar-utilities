"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RepeatedNode from "../node/repeated";

import { repeatedRuleNameFromRuleNameAndIndex } from "../utilities/ruleName";

const { tail } = arrayUtilities;

export default class RepeatedRule extends Rule {
  static fromIndirectlyLeftRecursiveDefinitionAndIndex(indirectlyLeftRecursiveDefinition, index) {
    let parts = indirectlyLeftRecursiveDefinition.getParts();

    const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
          repeatedRuleName = repeatedRuleNameFromRuleNameAndIndex(ruleName, index);

    parts = tail(parts);  ///

    const definition = new Definition(parts),
          name = repeatedRuleName,  ///
          ambiguous = false,
          definitions = [
            definition
          ],
          NonTerminalNode = RepeatedNode,  ///
          repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return repeatedRule;
  }
}
