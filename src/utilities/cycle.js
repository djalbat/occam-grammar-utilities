"use strict";

import { ruleNamesFromCycle } from "../utilities/ruleNames";
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
