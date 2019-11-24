'use strict';

const necessary = require('necessary');

const ruleNameUtilities = require('../utilities/ruleName');

const { arrayUtilities } = necessary,
      { filter } = arrayUtilities,
      { repeatedRuleNameFromRuleName, reducedRuleNameFromRuleName } = ruleNameUtilities;

function findRule(ruleName, rules) {
  const name = ruleName,  ///
        rule = rules.find((rule) => {
          const ruleName = rule.getName();

          if (ruleName === name) {
            return true;
          }
        }) || null; ///

  return rule;
}

function removeRule(rule, rules) {
  const removedRule = rule; ///

  filter(rules, (rule) => {
    if (rule !== removedRule) {
      return true;
    }
  })
}

function reducedRuleFromRule(rule, rules, ReducedRule) {
	const ruleName = rule.getName(),
				reducedRuleName = reducedRuleNameFromRuleName(ruleName);

	let reducedRule = findRule(reducedRuleName, rules);

	if (reducedRule === null) {
    reducedRule = ReducedRule.fromRule(rule);

    rules.push(reducedRule);
	}

	return reducedRule;
}

function repeatedRuleFromRule(rule, rules, RepeatedRule) {
  const ruleName = rule.getName(),
        repeatedRuleName = repeatedRuleNameFromRuleName(ruleName);

  let repeatedRule = findRule(repeatedRuleName, rules);

  if (repeatedRule === null) {
    repeatedRule = RepeatedRule.fromRule(rule);

    rules.push(repeatedRule);
  }

  return repeatedRule;
}

function rewrittenRuleFromRule(rule, rules, RewrittenRule) {
  let rewrittenRule;

  const ruleRewrittenRule = (rule instanceof RewrittenRule);

  if (ruleRewrittenRule) {
    rewrittenRule = rule; ///
  } else {
    removeRule(rule, rules);

    rewrittenRule = RewrittenRule.fromRule(rule);

    rules.push(rewrittenRule);
  }

  return rewrittenRule;
}

module.exports = {
  findRule,
  removeRule,
	reducedRuleFromRule,
  repeatedRuleFromRule,
  rewrittenRuleFromRule
};
