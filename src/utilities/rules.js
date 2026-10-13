"use strict";

import ReducedRule from "../rule/reduced";
import RepeatedRule from "../rule/repeated";
import RewrittenRule from "../rule/rewritten";

import { ruleNamesFromCycles } from "../utilities/cycle";

export function rewriteRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    let rule;

    rule = ruleMap[ruleName];

    const rewrittenRule = RewrittenRule.fromRule(rule);

    rule = rewrittenRule; ///

    ruleMap[ruleName] = rule;
  });
}

export function createReducedRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          reducedRule = ReducedRule.fromRuleAndCycles(rule, cycles, ruleMap);

    if (reducedRule !== null) {
      const reducedRuleName = reducedRule.getName();

      ruleMap[reducedRuleName] = reducedRule;
    }
  });
}

export function createRepeatedRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          repeatedRule = RepeatedRule.fromRuleAndCycles(rule, cycles, ruleMap),
          repeatedRuleName = repeatedRule.getName();

    ruleMap[repeatedRuleName] = repeatedRule;
  });
}
