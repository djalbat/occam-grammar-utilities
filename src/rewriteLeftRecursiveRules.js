"use strict";

import RewrittenRule from "./rule/rewritten";

import {ruleNamesFromCycle, ruleNamesFromCycles} from "./utilities/ruleNames";
import { isRuleEffectivelyEmpty } from "./utilities/rule";
import {directlyRepeatedRuleNameFromRuleName, reducedRuleNameFromRuleName} from "./utilities/ruleName";

export default function rewriteLeftRecursiveRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    let rule = ruleMap[ruleName];

    const rewrittenRule = RewrittenRule.fromRuleAndCycles(rule, cycles, ruleMap);

    rule = rewrittenRule; ///

    ruleMap[ruleName] = rule;
  });

  ruleNames.forEach((ruleName) => {
    const directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          directlyRepeatedRule = ruleMap[directlyRepeatedRuleName],
          directlyRepeatedRuleEffectivelyEmpty = isRuleEffectivelyEmpty(directlyRepeatedRule, ruleMap);

    if (directlyRepeatedRuleEffectivelyEmpty) {
      const directlyRepeatedRuleName = directlyRepeatedRule.getName();

      throw new Error(`The '${directlyRepeatedRuleName}' directly repeated rule is effectively empty.`);
    }
  });

  ruleNames.forEach((ruleName) => {
    const ruleCycles = ruleCyclesFromRuleNamdAndCyclces(ruleName, cycles),
          ruleCyclesIrreducible = ruleCycles.every((ruleCycle) => {
            const ruleCycleIrreducible = isCycleIrreducible(ruleCycle, ruleMap);

            if (ruleCycleIrreducible) {
              return true;
            }
          });

    if (ruleCyclesIrreducible) {
      throw new Error(`None of the cycles including the '${ruleName}' rule have a reduced rule.`);
    }
  });
}

function isCycleIrreducible(cycle, ruleMap) {
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

function ruleCyclesFromRuleNamdAndCyclces(ruleName, cycles) {
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