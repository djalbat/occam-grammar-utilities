"use strict";

import DirectlyRepeatedRule from "./rule/repeated/directly";

import { ruleNamesFromCycles } from "./utilities/directedGraph";
import { isRuleEffectivelyEmpty } from "./utilities/parts";  ///

export default function createDirectlyRepeatedRules(ruleMap, directedGraph) {
  const cycles = directedGraph.findCycles(),
        ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndCycles(rule, cycles),
          directlyRepeatedRuleName = directlyRepeatedRule.getName(),
          directlyRepeatedRuleEffectivelyEmpty = isRuleEffectivelyEmpty(directlyRepeatedRule, ruleMap);

    if (directlyRepeatedRuleEffectivelyEmpty) {
      throw new Error(`The '${directlyRepeatedRuleName}' directly repeated rule is effectively empty.`);
    }

    ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
  });
}
