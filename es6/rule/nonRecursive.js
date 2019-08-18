'use strict';

const parsers = require('occam-parsers');

const { Rule } = parsers;

class NonRecursiveRule extends Rule {
  static fromRuleAndNonRecursiveDefinitions(rule, nonRecursiveDefinitions) {
    const nonRecursiveRuleName = nonRecursiveRuleNameFromRule(rule),
          name = nonRecursiveRuleName,  ///
          definitions = nonRecursiveDefinitions,  ///
          NonTerminalNone = rule.getNonTerminalNode(),
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNone);

    return nonRecursiveRule;
  }
}

module.exports = NonRecursiveRule;

function nonRecursiveRuleNameFromRule(rule) {
  const ruleName = rule.getName(),
        nonRecursiveRuleName = `${ruleName}_`;

  return nonRecursiveRuleName;
}
