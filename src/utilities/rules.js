"use strict";

import ReducedRule from "../rule/reduced";
import RepeatedRule from "../rule/repeated";
import IndirectRule from "../rule/indirect";
import RewrittenRule from "../rule/rewritten";

export function rewriteRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const rewrittenRule = RewrittenRule.fromCycle(cycle, ruleMap),
          rule = rewrittenRule, ///
          ruleName = rule.getName();

    ruleMap[ruleName] = rule;
  });
}

export function createReducedRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const reducedRule = ReducedRule.fromCycleAndCycles(cycle, cycles, ruleMap);

    if (reducedRule !== null) {
      const reducedRuleName = reducedRule.getName();

      ruleMap[reducedRuleName] = reducedRule;
    }
  });
}

export function createRepeatedRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const repeatedRule = RepeatedRule.fromCycleAndCycles(cycle, cycles, ruleMap),
          repeatedRuleName = repeatedRule.getName();

    ruleMap[repeatedRuleName] = repeatedRule;
  });
}

export function createIndirectRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const indirectRule = IndirectRule.fromCycle(cycle, ruleMap);

    if (indirectRule !== null) {
      const indirectdRuleName = indirectRule.getName();

      ruleMap[indirectdRuleName] = indirectRule;
    }
  });
}
