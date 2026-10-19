"use strict";

import ReducedRule from "../rule/reduced";
import RepeatedRule from "../rule/repeated";
import RewrittenRule from "../rule/rewritten";
import IntermediateRule from "../rule/intermediate";

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

export function createIntermediateRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const intermediateRule = IntermediateRule.fromCycleAndCycles(cycle, cycles, ruleMap);

    if (intermediateRule !== null) {
      const intermediatedRuleName = intermediateRule.getName();

      ruleMap[intermediatedRuleName] = intermediateRule;
    }
  });
}
