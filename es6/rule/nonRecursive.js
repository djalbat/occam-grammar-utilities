'use strict';

const parsers = require('occam-parsers');

const ruleNameUtilities = require('../utilities/ruleName'),
      NonRecursiveRuleNameDefinition = require('../definition/nonRecursiveRuleName');

const { Rule } = parsers,
      { nonRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonRecursiveRule extends Rule {
  static fromRuleRuleNameAndNonRecursiveDefinitions(rule, ruleName, nonRecursiveDefinitions) {
    let name = rule.getName();

    const definitions = nonRecursiveDefinitions;  ///

    if (name !== ruleName) {
      const nonRecursiveRuleNameDefinition = NonRecursiveRuleNameDefinition.fromRuleName(ruleName);

      definitions.unshift(nonRecursiveRuleNameDefinition);
    }

    ruleName = rule.getName();

    const nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName);

    name = nonRecursiveRuleName;  ///

    const NonTerminalNone = rule.getNonTerminalNode(),
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNone);

    return nonRecursiveRule;
  }
}

module.exports = NonRecursiveRule;
