"use strict";

import { Rule } from "occam-parsers";

import ReplacementNode from "../node/replacement";
import ReplacementDefinition from "../definition/replacement";

import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { isRuleIndirectlyRepeated } from "./repeated/indirectly";
import { ruleNameFromCycle, indirectRuleNameFromCycle } from "../utilities/cycle";

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

export function replacementRulesFromCycleAndCycles(cycle, cycles, ruleMap, replacementRules = []) {
  const cycleLength = cycle.getLength(),
        ruleName = ruleNameFromCycle(cycle);

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const replacementRule = ReplacementRule.fromRuleName(ruleName, ruleMap);

      replacementRules.push(replacementRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const rule = ruleMap[ruleName],
            replacementRule = ReplacementRule.fromRuleName(ruleName, ruleMap);

      replacementRules.push(replacementRule);

      const ruleIndirectlyRepeated = isRuleIndirectlyRepeated(rule, cycle, cycles, ruleMap);

      if (!ruleIndirectlyRepeated) {
        const indirectRuleName = indirectRuleNameFromCycle(cycle),
              ruleName = indirectRuleName,  ///
              replacementRule = ReplacementRule.fromRuleName(ruleName, ruleMap);

        replacementRules.push(replacementRule);
      }

      break;
    }
  }

  return replacementRules;
}
