"use strict";

import { Rule, Definition } from "occam-parsers";

import RepeatedNode from "../node/repeated";

import { repeatedPartFromRuleNameAndIndex } from "../utilities/part";
import { repeatedRuleNameFromRuleNameAndIndex } from "../utilities/ruleName";

export default class RepeatedRule extends Rule {
  static fromIndirectlyLeftRecursiveDefinitionAndIndex(indirectlyLeftRecursiveDefinition, index) {
    const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
          repeatedPart = repeatedPartFromRuleNameAndIndex(ruleName, index),
          repeatedRuleName = repeatedRuleNameFromRuleNameAndIndex(ruleName, index),
          parts = indirectlyLeftRecursiveDefinition.rewrite(repeatedPart),
          definition = new Definition(parts),
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
