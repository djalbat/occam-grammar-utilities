"use strict";

import { isInstanceOf } from "../utilities/class";
import { repeatedRuleNameFromRuleName, reducedRuleNameFromRuleName } from "../utilities/ruleName";

export function findRule(ruleName, rules) {
  const name = ruleName,  ///
        rule = rules.find((rule) => {
          const ruleName = rule.getName();

          if (ruleName === name) {
            return true;
          }
        }) || null; ///

  return rule;
}

export function reducedRuleFromRule(rule, rules, ReducedRule) {
	const ruleName = rule.getName(),
				reducedRuleName = reducedRuleNameFromRuleName(ruleName);

	let reducedRule = findRule(reducedRuleName, rules);

	if (reducedRule === null) {
    reducedRule = ReducedRule.fromRule(rule);

    rules.push(reducedRule);
	}

	return reducedRule;
}

export function repeatedRuleFromRule(rule, rules, RepeatedRule) {
  const ruleName = rule.getName(),
        repeatedRuleName = repeatedRuleNameFromRuleName(ruleName);

  let repeatedRule = findRule(repeatedRuleName, rules);

  if (repeatedRule === null) {
    repeatedRule = RepeatedRule.fromRule(rule);

    rules.push(repeatedRule);
  }

  return repeatedRule;
}

export function rewrittenRuleFromRule(rule, rules, RewrittenRule) {
  let rewrittenRule;

  const ruleRewrittenRule = isInstanceOf(rule, RewrittenRule);

  if (ruleRewrittenRule) {
    rewrittenRule = rule; ///
  } else {
    rewrittenRule = RewrittenRule.fromRule(rule);

    const replacedRule = rule,  ///
          replacementRule = rewrittenRule;  ///

    replaceRule(replacedRule, replacementRule, rules);
  }

  return rewrittenRule;
}

function replaceRule(replacedRule, replacementRule, rules) {
  const index = rules.indexOf(replacedRule);

  if (index > -1) {
    const start = index,
          deleteCount = 1;

    rules.splice(start, deleteCount, replacementRule);
  }
}
