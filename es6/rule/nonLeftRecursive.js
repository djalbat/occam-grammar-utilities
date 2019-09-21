'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array'),
      ruleNameUtilities = require('../utilities/ruleName'),
      NonLeftRecursiveNode = require('../node/nonLeftRecursive');

const { Rule } = parsers,
      { filter } = arrayUtilities,
      { nonLeftRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonLeftRecursiveRule extends Rule {
  static fromIndirectlyLeftRecursiveRuleAndIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition) {
    const ruleName = indirectlyLeftRecursiveRule.getName(),
          definitions = indirectlyLeftRecursiveRule.getDefinitions();

    filter(definitions, (definition) => {
      const indirectlyLeftRecursiveDefinitionMatchesDefinition = indirectlyLeftRecursiveDefinition.matchDefinition(definition);

      if (!indirectlyLeftRecursiveDefinitionMatchesDefinition) {
        return true;
      }
    });

    const nonLeftRecursiveRuleName = nonLeftRecursiveRuleNameFromRuleName(ruleName),
          name = nonLeftRecursiveRuleName,  ///
          NonTerminalNode = NonLeftRecursiveNode, ///
          nonLeftRecursiveRule = new NonLeftRecursiveRule(name, definitions, NonTerminalNode);

    return nonLeftRecursiveRule;
  }

  static fromNonLeftRecursiveRuleNameAndDefinitions(nonLeftRecursiveRuleName, definitions) {
    const name = nonLeftRecursiveRuleName,  ///
          NonTerminalNode = NonLeftRecursiveNode, ///
          nonLeftRecursiveRule = new NonLeftRecursiveRule(name, definitions, NonTerminalNode);

    return nonLeftRecursiveRule;
  }
}

module.exports = NonLeftRecursiveRule;
