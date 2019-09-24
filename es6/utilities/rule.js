'use strict';

const ReducedRule = require('../rule/reduced'),
			RepeatedRule = require('../rule/repeated'),
			ruleNameUtilities = require('../utilities/ruleName'),
			RuleNameDefinition = require('../definition/ruleName');

const { repeatedRuleNameFromRuleName, reducedRuleNameFromRuleName } = ruleNameUtilities;

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

function reducedRuleFromRule(rule, rules) {
	const ruleName = rule.getName(),
				reducedRuleName = reducedRuleNameFromRuleName(ruleName);

	let reducedRule = findRule(reducedRuleName, rules);

	if (reducedRule === null) {
		reducedRule = ReducedRule.fromReducedRuleNameAndRule(reducedRuleName, rule);

		if (reducedRule !== null) {
			rules.push(reducedRule);

			const reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName),
						definitions = [
							reducedRuleNameDefinition
						];

			rule.setDefinitions(definitions);
		}
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
	reducedRuleFromRule,
	repeatedRuleFromLeftRecursiveRuleName
};
