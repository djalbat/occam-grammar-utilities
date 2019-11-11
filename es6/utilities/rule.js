'use strict';

const ReducedRule = require('../rule/reduced'),
			RepeatedRule = require('../rule/repeated'),
      arrayUtilities = require('../utilities/array'),
			ruleNameUtilities = require('../utilities/ruleName');

const { filter } = arrayUtilities,
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

function reducedRuleFromRule(rule, rules) {
	const ruleName = rule.getName(),
				reducedRuleName = reducedRuleNameFromRuleName(ruleName);

	let reducedRule = findRule(reducedRuleName, rules);

	if (reducedRule === null) {
		reducedRule = ReducedRule.fromReducedRuleNameAndRule(reducedRuleName, rule);

    rules.push(reducedRule);
	}

	return reducedRule;
}

function repeatedRuleFromLeftRecursiveRuleName(leftRecursiveRuleName, rules) {
	const ruleName = leftRecursiveRuleName, ///
				repeatedRuleName = repeatedRuleNameFromRuleName(ruleName);

	let repeatedRule = findRule(repeatedRuleName, rules);

	if (repeatedRule === null) {
		repeatedRule = RepeatedRule.fromRepeatedRuleName(repeatedRuleName);

		rules.push(repeatedRule);
	}

	return repeatedRule;
}

module.exports = {
  findRule,
  removeRule,
	reducedRuleFromRule,
	repeatedRuleFromLeftRecursiveRuleName
};
