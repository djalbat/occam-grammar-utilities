'use strict';

const parsers = require('occam-parsers'),
      necessary = require('necessary');

const NonRecursiveNode = require('../node/nonRecursive'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Rule } = parsers,
      { arrayUtilities } = necessary,
      { last } = arrayUtilities,
      { nonRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonRecursiveRule extends Rule {
  static fromNonRecursiveDefinitionsAndRuleNames(nonRecursiveDefinitions, ruleNames) {
    const definitions = nonRecursiveDefinitions,  ///
          lastRuleName = last(ruleNames),
          ruleName = lastRuleName,  ///
          nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          name = nonRecursiveRuleName,  ///
          NonTerminalNode = NonRecursiveNode, ///
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

    return nonRecursiveRule;
  }
}

module.exports = NonRecursiveRule;
