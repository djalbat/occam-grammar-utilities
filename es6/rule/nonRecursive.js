'use strict';

const parsers = require('occam-parsers'),
      necessary = require('necessary');

const IntermediateNode = require('../node/intermediate'),
      ruleNameUtilities = require('../utilities/ruleName'),
      NonRecursiveRuleNameDefinition = require('../definition/nonRecursiveRuleName');

const { Rule } = parsers,
      { arrayUtilities } = necessary,
      { last, secondLast } = arrayUtilities,
      { nonRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonRecursiveRule extends Rule {
  static fromNonRecursiveDefinitionsAndRuleNames(nonRecursiveDefinitions, ruleNames) {
    const definitions = nonRecursiveDefinitions,  ///
          ruleNamesLength = ruleNames.length;

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
          NonTerminalNode = IntermediateNode, ///
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

    return nonRecursiveRule;
  }
}

module.exports = NonRecursiveRule;
