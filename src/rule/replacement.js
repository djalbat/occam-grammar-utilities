"use strict";

import { Rule } from "occam-parsers";

import ReplacementNode from "../node/replacement";
import ReplacementDefinition from "../definition/replacement";

import { ruleNameFromCycle } from "../utilities/cycle";

export default class ReplacementRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReplacementNode; ///

    return NonTerminalNode;
  }

  static fromCycle(cycle, ruleMap) {
    const ruleName = ruleNameFromCycle(cycle),
          rule = ruleMap[ruleName],
          replacementDefinition = ReplacementDefinition.fromRuleName(ruleName),
          definition = replacementDefinition, ///
          name = ruleName, ///
          opacity = rule.getOpacity(),
          definitions = [
            definition
          ],
          replacementRule = new ReplacementRule(name, opacity, definitions);

    return replacementRule;
  }
}
