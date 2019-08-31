'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array'),
      NonRecursiveNode = require('../node/nonRecursive'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Rule } = parsers,
      { last } = arrayUtilities,
      { nonRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonRecursiveRule extends Rule {
  static fromNonRecursiveDefinitionsAndRuleNames(nonRecursiveDefinitions, ruleNames) {
    const lastRuleName = last(ruleNames),
          ruleName = lastRuleName,  ///
          definitions = nonRecursiveDefinitions,  ///
          nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          name = nonRecursiveRuleName,  ///
          NonTerminalNode = NonRecursiveNode, ///
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

    return nonRecursiveRule;
  }
}

module.exports = NonRecursiveRule;
