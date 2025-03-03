"use strict";

import IndirectlyRepeatedRule from "./rule/repeated/indirectly";

import { ruleNamesFromCycle } from "./utilities/cycle";
import { forEachRuleNameAndLeftRecursiveRuleName } from "./utilities/ruleNames";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "./utilities/ruleName";

export default function createIndirectlyRepeatedRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const ruleNames = ruleNamesFromCycle(cycle);

    forEachRuleNameAndLeftRecursiveRuleName(ruleNames, (ruleName, leftRecursiveRuleName) => {
      const indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName);

      let indirectlyRepeatedRule = ruleMap[indirectlyRepeatedRuleName] || null;

      if (indirectlyRepeatedRule === null) {
        const rule = ruleMap[ruleName],
              leftRecursiveRule = ruleMap[leftRecursiveRuleName];

        indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleAndLeftRecursiveRule(rule, leftRecursiveRule, ruleMap);

        ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;
      }
    });
  });
}
