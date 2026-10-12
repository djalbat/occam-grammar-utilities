"use strict";

import RepeatedRule from "./rule/repeated";

import { ruleNamesFromCycles } from "./utilities/cycle";

export default function createRepeatedRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName] || null;

    if (rule == null) {
      throw new Error(`The  '${ruleName}' rule is missing.`);
    }

    const repeatedRule = RepeatedRule.fromRuleAndCycles(rule, cycles, ruleMap),
          repeatedRuleName = repeatedRule.getName();

    ruleMap[repeatedRuleName] = repeatedRule;
  });
}
