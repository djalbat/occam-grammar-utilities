"use strict";

import IndirectlyRepeatedRule from "./rule/repeated/indirectly";

import { ruleNamesFromCycle, forEachRuleNameAndLeftRecursiveRuleName } from "./utilities/ruleNames";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "./utilities/ruleName";

export default function createIndirectlyRepeatedRules(cycles, ruleMap) {
  cycles.forEach((cycle) => {
    const ruleNames = ruleNamesFromCycle(cycle);

    forEachRuleNameAndLeftRecursiveRuleName(ruleNames, (ruleName, leftRecursiveRuleName) => {
      const indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName);

      let indirectlyRepeatedRule = ruleMap[indirectlyRepeatedRuleName] || null;

      if (indirectlyRepeatedRule === null) {
        const rule = ruleMap[ruleName];

        indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName);

        ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;
      }
    });
  });
}
