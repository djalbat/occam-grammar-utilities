"use strict";

import { arrayUtilities } from "necessary";

const { push, compress } = arrayUtilities;

import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

export function isCycleIrreducible(cycle, ruleMap) {
  const ruleNames = ruleNamesFromCycle(cycle),
        reducedRules = ruleNames.reduce((reducedRules, ruleName) => {
          const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
                reducedRule = ruleMap[reducedRuleName] || null;

          if (reducedRule !== null) {
            reducedRules.push(reducedRule);
          }

          return reducedRules;
        }, []),
        reducedRulesLength = reducedRules.length,
        cycleIrreducible = (reducedRulesLength === 0); ///

  return cycleIrreducible;
}

export function ruleNamesFromCycle(cycle, ruleNames = []) {
  const cycleVertexes = cycle.getVertexes(),
        cycleRuleNames = cycleVertexes; ///

  push(ruleNames, cycleRuleNames);

  return ruleNames;
}

export function ruleNamesFromCycles(cycles, ruleNames = []) {
  cycles.forEach((cycle) => {
    ruleNamesFromCycle(cycle, ruleNames);
  });

  compress(ruleNames, (ruleNameA, ruleNameB) => {
    if (ruleNameA !== ruleNameB) {
      return true;
    }
  });

  return ruleNames;
}

export function ruleCyclesFromRuleNameAndCycles(ruleName, cycles) {
  const ruleCycles = cycles.reduce((ruleCycles, cycle) => {
    const ruleNames = ruleNamesFromCycle(cycle),
          ruleNamesIncludeRuleName = ruleNames.includes(ruleName);

    if (ruleNamesIncludeRuleName) {
      const ruleCycle = cycle;  ///

      ruleCycles.push(ruleCycle);
    }

    return ruleCycles;
  }, []);

  return ruleCycles;
}
