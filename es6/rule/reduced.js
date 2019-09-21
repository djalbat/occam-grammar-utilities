'use strict';

const parsers = require('occam-parsers');

const ReducedNode = require('../node/reduced'),
      arrayUtilities = require('../utilities/array'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Rule } = parsers,
      { filter } = arrayUtilities,
      { reducedRuleNameFromRuleName } = ruleNameUtilities;

class ReducedRule extends Rule {
  static fromIndirectlyLeftRecursiveRuleAndIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition) {
    const ruleName = indirectlyLeftRecursiveRule.getName(),
          definitions = indirectlyLeftRecursiveRule.getDefinitions();

    filter(definitions, (definition) => {
      const indirectlyLeftRecursiveDefinitionMatchesDefinition = indirectlyLeftRecursiveDefinition.matchDefinition(definition);

      if (!indirectlyLeftRecursiveDefinitionMatchesDefinition) {
        return true;
      }
    });

    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName,  ///
          NonTerminalNode = ReducedNode, ///
          reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

    return reducedRule;
  }

  static fromReducedRuleNameAndDefinitions(reducedRuleName, definitions) {
    const name = reducedRuleName,  ///
          NonTerminalNode = ReducedNode, ///
          reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

    return reducedRule;
  }
}

module.exports = ReducedRule;
