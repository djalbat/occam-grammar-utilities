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
          reducedRule = ReducedRule.fromRuleAndCycles(rule, cycles);

    if (reducedRule !== null) {
      const reducedRuleName = reducedRule.getName();

      ruleMap[reducedRuleName] = reducedRule;
    }
  });

  cycles.forEach((cycle) => {
    const reducedRulesMissing = areReducedRulesMissing(cycle, ruleMap);

    if (reducedRulesMissing) {
      const ruleNames = cycle,
            ruleNamesString = ruleNames.join(COMMA_CHARACTER);

      throw new Error(`All of the reduced rules in the '${ruleNamesString}' cycle are missing.`);
    }
  });
}

function areReducedRulesMissing(cycle, ruleMap) {
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
        reducedRulesMissing = (reducedRulesLength === 0); ///

  return reducedRulesMissing;
}
