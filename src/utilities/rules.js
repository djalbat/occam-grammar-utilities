"use strict";

import { arrayUtilities } from "necessary";
import { rulesUtilities } from "occam-parsers";

const { filter } = arrayUtilities,
      { rulesAsString, ruleMapFromRules, startRuleFromRules } = rulesUtilities;

export function retrieveLeftRecursiveRules(leftRecursiveDefinitions, LeftRecursiveDefinition, ruleMap) {
  const leftRecursiveRules = [];

  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
    if (leftRecursiveDefinition instanceof LeftRecursiveDefinition) {
      const ruleName = leftRecursiveDefinition.getRuleName(),
            rule = ruleMap[ruleName],
            leftRecursiveRulesIncludesRule = leftRecursiveRules.includes(rule);

      if (!leftRecursiveRulesIncludesRule) {
        const leftRecursiveRule = rule; ///

        leftRecursiveRules.push(leftRecursiveRule);
      }
    }
  });

  return leftRecursiveRules;
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

export default {
  rulesAsString,
  ruleMapFromRules,
  startRuleFromRules,
  retrieveLeftRecursiveRules,
  rulesFromStartRuleAndRuleMap,
  startRuleFromRulesAndStartRuleName
};
