"use strict";

import { Rule } from "occam-parsers";

import ReplacementNode from "../node/replacement";
import ReplacementDefinition from "../definition/replacement";

import { ruleNamesFromCycle } from "../utilities/cycle";

export default class ReplacementRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReplacementNode; ///

    return NonTerminalNode;
  }

  static fromRuleName(ruleName, ruleMap) {
    const rule = ruleMap[ruleName],
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

export function replacementRulesFromCycle(cycle, ruleMap) {
  const ruleNames = ruleNamesFromCycle(cycle),
        replacementRules = ruleNames.map((ruleName) => {
          const replacementRule = ReplacementRule.fromRuleName(ruleName, ruleMap);

          return replacementRule;
        });

  return replacementRules;
}
