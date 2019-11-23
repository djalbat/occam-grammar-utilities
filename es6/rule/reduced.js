'use strict';

const parsers = require('occam-parsers');

const ReducedNode = require('../node/reduced'),
      ruleNameUtilities = require('../utilities/ruleName'),
      LeftRecursiveDefinition = require('../definition/leftRecursive');

const { Rule } = parsers,
      { reducedRuleNameFromRuleName } = ruleNameUtilities;

class ReducedRule extends Rule {
  isEmpty() {
    const definitionsLength = this.definitions.length,
          empty = (definitionsLength === 0);

    return empty;
  }

  static fromRule(rule) {
    let definitions = rule.getDefinitions();

    const ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          nonLeftRecursiveDefinitions = definitions.filter((definition) => {
            const definitionLeftRecursiveDefinition = (definition instanceof LeftRecursiveDefinition);

            if (!definitionLeftRecursiveDefinition) {
              return true;
            }
          });

    definitions = nonLeftRecursiveDefinitions;  ///

    const name = reducedRuleName,
          NonTerminalNode = ReducedNode,  ///
          reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

    return reducedRule;
  }
}

module.exports = ReducedRule;
