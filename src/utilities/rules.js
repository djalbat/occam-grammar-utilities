"use strict";

import { removedRulesFromCycleAndCycles } from "../rule/removed";
import { reducedRulesFromCycleAndCycles } from "../rule/reduced";
import { repeatedRulesFromCycleAndcycles } from "../rule/repeated";
import { rewrittenRulesFromCycleAndCycles } from "../rule/rewritten";
import { replacementRulesFromCycleAndCycles } from "../rule/replacement";
import { intermediateRulesFromCycleAndCycles } from "../rule/intermediate";
import { indirectlyRepeatedRulesFromCycleAndCycles } from "../rule/repeated/indirectly";

export function replaceOrRemoveRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const removedRules = removedRulesFromCycleAndCycles(cycle, cycles, ruleMap),
          replacementRules = replacementRulesFromCycleAndCycles(cycle, cycles, ruleMap);

    removedRules.forEach((removedRule) => {
      const removedRuleName = removedRule.getName(),
            ruleName = removedRuleName; ///

      delete ruleMap[ruleName];
    });

    replacementRules.forEach((replacementRule) => {
      const replacementRuleName = replacementRule.getName(),
            ruleName = replacementRuleName; ///

      ruleMap[ruleName] = replacementRule;
    });
  });
}

export function createReducedRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const reducedRules = reducedRulesFromCycleAndCycles(cycle, cycles, ruleMap);

    reducedRules.forEach((reducedRule) => {
      const reducedRuleName = reducedRule.getName();

      ruleMap[reducedRuleName] = reducedRule;
    });
  });
}

export function createRepeatedRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const repeatedRules = repeatedRulesFromCycleAndcycles(cycle, cycles, ruleMap);

    repeatedRules.forEach((repeatedRule) => {
      const repeatedRuleName = repeatedRule.getName();

      ruleMap[repeatedRuleName] = repeatedRule;
    });
  });
}

export function createRewrittenRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const rewrittenRules = rewrittenRulesFromCycleAndCycles(cycle, cycles, ruleMap);

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

export function createIndirectlyRepeatedRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const indirectlyRepeatedRules = indirectlyRepeatedRulesFromCycleAndCycles(cycle, cycles, ruleMap);

    indirectlyRepeatedRules.forEach((indirectlyRepeatedRule) => {
      const indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();

      ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;
    });
  });
}

