'use strict';

const parsers = require('occam-parsers');

const RepeatedNode = require('../node/repeated'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Rule } = parsers,
      { repeatedRuleNameFromRuleName } = ruleNameUtilities;

class RepeatedRule extends Rule {
  static fromRule(rule) {
    const ruleName = rule.getName(),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          name = repeatedRuleName,  ///
          definitions = [],
          NonTerminalNode = RepeatedNode, ///
          repeatedRule = new RepeatedRule(name, definitions, NonTerminalNode);

    return repeatedRule;
  }
}

module.exports = RepeatedRule;
