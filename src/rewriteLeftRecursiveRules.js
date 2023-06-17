"use strict";

import RewrittenRule from "./rule/rewritten";

import { ruleNamesFromCycles } from "./utilities/ruleNames";
import { isRuleEffectivelyEmpty } from "./utilities/rule";
import { directlyRepeatedRuleNameFromRuleName } from "./utilities/ruleName";

export default function rewriteLeftRecursiveRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    let rule = ruleMap[ruleName];

    const rewrittenRule = RewrittenRule.fromRuleAndCycles(rule, cycles, ruleMap);

    rule = rewrittenRule; ///

    ruleMap[ruleName] = rule;
  });

  ruleNames.forEach((ruleName) => {
    const directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          directlyRepeatedRule = ruleMap[directlyRepeatedRuleName],
          directlyRepeatedRuleEffectivelyEmpty = isRuleEffectivelyEmpty(directlyRepeatedRule, ruleMap);

    if (directlyRepeatedRuleEffectivelyEmpty) {
      const directlyRepeatedRuleName = directlyRepeatedRule.getName();

      throw new Error(`The '${directlyRepeatedRuleName}' directly repeated rule is effectively empty.`);
    }
  });
}
