"use strict";

import { isInstanceOf } from "../utilities/class";
import { repeatedRuleNameFromRuleName, reducedRuleNameFromRuleName } from "../utilities/ruleName";

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

export function repeatedRuleFromRule(rule, ruleMap, RepeatedRule) {
  const ruleName = rule.getName(),
        repeatedRuleName = repeatedRuleNameFromRuleName(ruleName);

  let repeatedRule = ruleMap[repeatedRuleName] || null;

  if (repeatedRule === null) {
    repeatedRule = RepeatedRule.fromRule(rule);

    ruleMap[repeatedRuleName] = repeatedRule;
  }

  return repeatedRule;
}

export function rewrittenRuleFromRule(rule, ruleMap, RewrittenRule) {
  let rewrittenRule;

  const ruleRewrittenRule = isInstanceOf(rule, RewrittenRule);

  if (ruleRewrittenRule) {
    rewrittenRule = rule; ///
  } else {
    rewrittenRule = RewrittenRule.fromRule(rule);

    const replacedRule = rule,  ///
          replacementRule = rewrittenRule;  ///

    replaceRule(replacedRule, replacementRule, ruleMap);
  }

  return rewrittenRule;
}

function replaceRule(replacedRule, replacementRule, ruleMap) {
  const replacedRuleName = replacedRule.getName(),
        replacementRuleName = replacementRule.getName();

  delete ruleMap[replacedRuleName];

  ruleMap[replacementRuleName] = replacementRule;
}
