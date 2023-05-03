"use strict";

import ReducedRule from "./rule/reduced";

import { characters } from "necessary";

import { isRuleEmpty } from "./utilities/rule";
import { ruleNamesFromCycles } from "./utilities/directedGraph";
import { reducedRuleNameFromRuleName } from "./utilities/ruleName";

const { COMMAN_CHARACTER } = characters;

export default function createReducedRules(ruleMap, directedGraph) {
  const cycles = directedGraph.findCycles(),
        ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          reducedRule = ReducedRule.fromRule(rule),
          reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;
  });

  cycles.forEach((cycle) => {
    const cycleEmpty = isCycleEmpty(cycle, ruleMap);

    if (cycleEmpty) {
      const ruleNames = cycle,
            ruleNamesString = ruleNames.join(COMMAN_CHARACTER);

      throw new Error(`All of the reduced rules in the '${ruleNamesString}' cycle are empty.`);
    }
  });
}

function isCycleEmpty(cycle, ruleMap) {
  const ruleNames = cycle,  ///
        reducedRules = ruleNames.map((ruleName) => {
          const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
                reducedRule = ruleMap[reducedRuleName];

          return reducedRule;
        }),
        reducedRulesEmpty = reducedRules.every((reducedRule) => {
          const reducedRuleEmpty = isRuleEmpty(reducedRule);

          if (reducedRuleEmpty) {
            return true;
          }
        }),
        cycleEmpty = reducedRulesEmpty; ///

  return cycleEmpty;
}
