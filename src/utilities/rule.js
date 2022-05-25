"use strict";

import { isInstanceOf } from "../utilities/class";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

export function reducedRuleFromRule(rule, ruleMap, ReducedRule) {
	const ruleName = rule.getName(),
				reducedRuleName = reducedRuleNameFromRuleName(ruleName);

	let reducedRule = ruleMap[reducedRuleName] || null;

	if (reducedRule === null) {
    reducedRule = ReducedRule.fromRule(rule);

    ruleMap[reducedRuleName] = reducedRule;
	}

	return reducedRule;
}

export function rewrittenRuleFromRule(rule, ruleMap, RewrittenRule) {
  let rewrittenRule;

  const ruleRewrittenRule = isInstanceOf(rule, RewrittenRule);

  if (ruleRewrittenRule) {
    rewrittenRule = rule; ///
  } else {
    rewrittenRule = RewrittenRule.fromRule(rule);

    const ruleName = rule.getName();

    delete ruleMap[ruleName];

    const rewrittenRuleName = ruleName; ///

    ruleMap[rewrittenRuleName] = rewrittenRule;
  }

  return rewrittenRule;
}
