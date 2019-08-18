'use strict';

const parsers = require('occam-parsers'),
      necessary = require('necessary');

const ruleNameUtilities = require('../utilities/ruleName'),
      NonRecursiveRuleNameDefinition = require('../definition/nonRecursiveRuleName');

const { Rule } = parsers,
      { arrayUtilities } = necessary,
      { last, secondLast } = arrayUtilities,
      { nonRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonRecursiveRule extends Rule {
  static fromRuleRuleNamesAndNonRecursiveDefinitions(rule, ruleNames, nonRecursiveDefinitions) {
    const ruleNamesLength = ruleNames.length,
          definitions = nonRecursiveDefinitions;  ///

    if (ruleNamesLength > 1) {
      const secondLastRuleName = secondLast(ruleNames),
            ruleName = secondLastRuleName,  ///
            nonRecursiveRuleNameDefinition = NonRecursiveRuleNameDefinition.fromRuleName(ruleName);

      definitions.unshift(nonRecursiveRuleNameDefinition);
    }

    const lastRuleName = last(ruleNames),
          ruleName = lastRuleName,  ///
          nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          name = nonRecursiveRuleName,  ///
          NonTerminalNone = rule.getNonTerminalNode(),
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNone);

    return nonRecursiveRule;
  }
}

module.exports = NonRecursiveRule;
