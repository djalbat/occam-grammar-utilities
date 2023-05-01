"use strict";

import ReducedRule from "./rule/reduced";

import { ruleNamesFromCycles } from "./utilities/directedGraph";

export default function createReducedRules(ruleMap, directedGraph) {
  const cycles = directedGraph.findCycles(),
        ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          reducedRule = ReducedRule.fromRule(rule),
          reducedRuleName = reducedRule.getName();

    ruleMap[reducedRuleName] = reducedRule;
  });
}

