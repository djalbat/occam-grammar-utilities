"use strict";

import RewrittenRule from "./rule/rewritten";

import { ruleNamesFromCycles } from "./utilities/cycle";

export default function createRewrittenRules(cycles, ruleMap) {
  const ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          rewrittenRule = RewrittenRule.fromRule(rule),
          rewrittenRuleName = rewrittenRule.getName();

    ruleMap[rewrittenRuleName] = rewrittenRule;
  });
}
