'use strict';

const parsers = require('occam-parsers');

const { Rule } = parsers;

class NonRecursiveRule extends Rule {
  static fromRule(rule) {
    const ruleName = rule.getName(),
          name = `${ruleName}_`,
          definitions = rule.getDefinitions(),
          nonTerminalNode = rule.getNonTerminalNode(),
          nonRecursiveRule = new NonRecursiveRule(name, definitions, nonTerminalNode);

    return nonRecursiveRule;
  }
}

module.exports = NonRecursiveRule;
