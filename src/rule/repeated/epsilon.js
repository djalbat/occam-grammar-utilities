"use strict";

import { Rule, Parts, Definition } from "occam-parsers";

import EpsilonRepeatedNode from "../../node/repeated/epsilon";

import { epsilonRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";

const { EpsilonPart } = Parts;

export default class EpsilonRepeatedRule extends Rule {
  static fromLeftRecursiveRuleName(leftRecursiveRuleName) {
    const ruleName = leftRecursiveRuleName, ///
          epsilonPart = new EpsilonPart(),
          indirectlyRepeatedRuleName = epsilonRepeatedRuleNameFromRuleName(ruleName),
          parts = [
            epsilonPart
          ],
          definition = new Definition(parts),
          definitions = [
            definition
          ],
          name = indirectlyRepeatedRuleName, ///
          ambiguous = false,
          NonTerminalNode = EpsilonRepeatedNode,  ///
          directlyRepeatedRule = new EpsilonRepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return directlyRepeatedRule;
  }
}
