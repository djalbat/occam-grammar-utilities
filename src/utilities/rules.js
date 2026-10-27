"use strict";

import ReducedRule from "../rule/reduced";
import RepeatedRule from "../rule/repeated";

import { rewrittenRulesFromCycle } from "../rule/rewritten";
import { replacementRulesFromCycle } from "../rule/replacement";
import { intermediateRulesFromCycleAndCycles } from "../rule/intermediate";

export function replaceRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const replacementRules = replacementRulesFromCycle(cycle, ruleMap);

    replacementRules.forEach((replacementRule) => {
      const replacementRuleName = replacementRule.getName(),
            ruleName = replacementRuleName; ///

      ruleMap[ruleName] = replacementRule;
    });
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
    const rewrittenRules = rewrittenRulesFromCycle(cycle, ruleMap);

    rewrittenRules.map((rewrittenRule) => {
      const rewrittenRuleName = rewrittenRule.getName();

      ruleMap[rewrittenRuleName] = rewrittenRule;
    });
  });
}

export function createIntermediateRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const intermediateRules = intermediateRulesFromCycleAndCycles(cycle, cycles, ruleMap);

    intermediateRules.forEach((intermediateRule) => {
      const intermediatedRuleName = intermediateRule.getName();

      ruleMap[intermediatedRuleName] = intermediateRule;
    });
  });
}
