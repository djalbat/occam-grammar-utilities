"use strict";

import DirectlyRepeatedRule from "./rule/repeated/directly";

import { ruleNamesFromCycles } from "./utilities/directedGraph";

export default function createDirectlyRepeatedRules(ruleMap, directedGraph) {
  const cycles = directedGraph.findCycles(),
        ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndCycles(rule, cycles),
          directlyRepeatedRuleName = directlyRepeatedRule.getName();

    ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
  });
}
