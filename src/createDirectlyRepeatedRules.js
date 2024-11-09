"use strict";

import DirectlyRepeatedRule from "./rule/repeated/directly";

import { ruleNamesFromCycles } from "./utilities/cycle";

export default function createDirectlyRepeatedRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndCycles(rule, cycles),
          directlyRepeatedRuleName = directlyRepeatedRule.getName();

    ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
  });
}
