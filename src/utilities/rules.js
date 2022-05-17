"use strict";

import { arrayUtilities } from "necessary";
import { rulesUtilities } from "occam-parsers";

const { filter } = arrayUtilities,
      { startRuleFromRules } = rulesUtilities;

export function rulesFromStartRuleAndRuleMap(startRule, ruleMap) {
  const rules = Object.values(ruleMap),
        startRuleName = startRule.getName();

  filter(rules, (rule) => {
    const ruleName = rule.getName();

    if (ruleName !== startRuleName) {
      return true;
    }
  });

  rules.unshift(startRule);

  return rules;
}

export function startRuleFromRulesAndStartRuleName(rules, startRuleName) {
  let startRule = rules.find((rule) => {
    const ruleName = rule.getName();

    if (ruleName === startRuleName) {
      return true;
    }
  }) || null; ///

  if (startRule === null) {
    startRule = startRuleFromRules(rules);
  }

  return startRule;
}
