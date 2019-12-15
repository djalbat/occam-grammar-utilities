'use strict';

const classUtilities = require('../utilities/class'),
      ruleNameUtilities = require('../utilities/ruleName');

const { isInstanceOf } = classUtilities,
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

module.exports = {
  findRule,
	reducedRuleFromRule,
  repeatedRuleFromRule,
  rewrittenRuleFromRule
};

function replaceRule(replacedRule, replacementRule, rules) {
  const index = rules.indexOf(replacedRule);

  if (index > -1) {
    const start = index,
          deleteCount = 1;

    rules.splice(start, deleteCount, replacementRule);
  }
}
