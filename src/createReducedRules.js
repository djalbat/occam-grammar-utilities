"use strict";

import ReducedRule from "./rule/reduced";

import { reducedRuleNameFromRuleName } from "./utilities/ruleName";
import { ruleNamesFromCycle, ruleNamesFromCycles } from "./utilities/ruleNames";

export default function createReducedRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          reducedRule = ReducedRule.fromRuleAndCycles(rule, cycles);

    if (reducedRule !== null) {
      const reducedRuleName = reducedRule.getName();

      ruleMap[reducedRuleName] = reducedRule;
    }
  });

  cycles.forEach((cycle) => {
    const reducedRulesMissing = areReducedRulesMissing(cycle, ruleMap);

    if (reducedRulesMissing) {
      const cycleString =- cycle.asString();

      throw new Error(`All of the reduced rules in the '${cycleString}' cycle are missing.`);
    }
  });
}

function areReducedRulesMissing(cycle, ruleMap) {
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
        reducedRulesMissing = (reducedRulesLength === 0); ///

  return reducedRulesMissing;
}
