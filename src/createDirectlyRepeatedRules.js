"use strict";

import DirectlyRepeatedRule from "./rule/repeated/directly";

import { ruleNamesFromCycles } from "./utilities/ruleNames";
import { isRuleEffectivelyEmpty } from "./utilities/rule";

export default function createDirectlyRepeatedRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles),
        directlyRepeatedRules = ruleNames.map((ruleName) => {
          const rule = ruleMap[ruleName],
                directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndCycles(rule, cycles),
                directlyRepeatedRuleName = directlyRepeatedRule.getName();

          ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;

          return directlyRepeatedRule;
        });

  directlyRepeatedRules.forEach((directlyRepeatedRule) => {
    const directlyRepeatedRuleEffectivelyEmpty = isRuleEffectivelyEmpty(directlyRepeatedRule, ruleMap);

    if (directlyRepeatedRuleEffectivelyEmpty) {
      const directlyRepeatedRuleName = directlyRepeatedRule.getName();

      throw new Error(`The '${directlyRepeatedRuleName}' directly repeated rule is effectively empty.`);
    }
  });
}
