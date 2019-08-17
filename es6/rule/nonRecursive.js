'use strict';

const parsers = require('occam-parsers');

const { Rule } = parsers;

class NonRecursiveRule extends Rule {
  addNonRecursiveDefinitions(nonRecursiveDefinitions) {
    const definitions = nonRecursiveDefinitions;  ///

    this.addDefinitions(definitions);
  }

  static fromRule(rule) {
    const ruleName = rule.getName(),
          name = `${ruleName}_`,
          definitions = [],  ///
          nonTerminalNode = rule.getNonTerminalNode(),
          nonRecursiveRule = new NonRecursiveRule(name, definitions, nonTerminalNode);

    return nonRecursiveRule;
  }
}

module.exports = NonRecursiveRule;
