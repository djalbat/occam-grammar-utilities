"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";

const { first, filter } = arrayUtilities;

export function rulesAsString(rules, multiLine) {
  const maximumRuleNameLength = rules.reduce((maximumRuleNameLength, rule) => {
          const ruleName = rule.getName(),
                ruleNameLength = ruleName.length;

          maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

          return maximumRuleNameLength;
        }, 0),
        rulesString = rules.reduce((rulesString, rule) => {
          const ruleString = rule.asString(maximumRuleNameLength, multiLine);

          rulesString += ruleString;

          return rulesString;
        }, EMPTY_STRING).replace(/^\n\n/, EMPTY_STRING);

  return rulesString;
}

export function ruleMapFromRules(rules) {
  const ruleMap = rules.reduce((ruleMap, rule) => {
    const ruleName = rule.getName();

    ruleMap[ruleName] = rule;

    return ruleMap;
  }, {});

  return ruleMap;
}

export function startRuleFromRules(rules) {
  const firstRule = first(rules),
        startRule = firstRule;  ///

  return startRule;
}

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
