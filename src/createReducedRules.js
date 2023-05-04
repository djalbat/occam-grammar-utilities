"use strict";

import ReducedRule from "./rule/reduced";

import { characters } from "necessary";

import { ruleNamesFromCycles } from "./utilities/ruleNames";
import { reducedRuleNameFromRuleName } from "./utilities/ruleName";

const { COMMA_CHARACTER } = characters;

export default function createReducedRules(ruleMap, directedGraph) {
  const cycles = directedGraph.findCycles(),
        ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          reducedRule = ReducedRule.fromRule(rule);

    if (reducedRule !== null) {
      const reducedRuleName = reducedRule.getName();

      ruleMap[reducedRuleName] = reducedRule;
    }
  });

  cycles.forEach((cycle) => {
    const cycleEmpty = isCycleEmpty(cycle, ruleMap);

    if (cycleEmpty) {
      const ruleNames = cycle,
            ruleNamesString = ruleNames.join(COMMA_CHARACTER);

      throw new Error(`All of the reduced rules in the '${ruleNamesString}' cycle are empty.`);
    }
  });
}

function isCycleEmpty(cycle, ruleMap) {
  const ruleNames = cycle,  ///
        reducedRules = ruleNames.reduce((reducedRules, ruleName) => {
          const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
                reducedRule = ruleMap[reducedRuleName] || null;

          if (reducedRule !== null) {
            reducedRules.push(reducedRule);
          }

          return reducedRules;
        }, []),
        reducedRulesLength = reducedRules.length,
        cycleEmpty = (reducedRulesLength === 0); ///

  return cycleEmpty;
}
