'use strict';

const parsers = require('occam-parsers');

const NonRecursiveNode = require('../node/nonRecursive'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Rule } = parsers,
      { nonRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonRecursiveRule extends Rule {
  addNonRecursiveDefinition(nonRecursiveDefinition) {
    const definition = nonRecursiveDefinition;  ///

    super.addDefinition(definition);
  }

  static fromRuleName(ruleName) {
    const definitions = [],
          nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          name = nonRecursiveRuleName,  ///
          NonTerminalNode = NonRecursiveNode, ///
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

    return nonRecursiveRule;
  }

  static fromRule(rule) {
    const ruleName = rule.getName(),
          definitions = rule.getDefinitions(),
          nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          name = nonRecursiveRuleName,  ///
          NonTerminalNode = NonRecursiveNode, ///
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

    return nonRecursiveRule;
  }
}

module.exports = NonRecursiveRule;
