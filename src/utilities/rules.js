"use strict";

import ReducedRule from "../rule/reduced";
import RepeatedRule from "../rule/repeated";
import RewrittenRule from "../rule/rewritten";
import ReplacementRule from "../rule/replacement";
import IntermediateRule from "../rule/intermediate";

export function replaceRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const replacementRule = ReplacementRule.fromCycle(cycle, ruleMap),
          replacementRuleName = replacementRule.getName(),
          ruleName = replacementRuleName; ///

    ruleMap[ruleName] = replacementRule;
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

export function createRewrittenRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const rewrittenRule = RewrittenRule.fromCycle(cycle, ruleMap),
          rewrittenRuleName = rewrittenRule.getName();

    ruleMap[rewrittenRuleName] = rewrittenRule;
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
