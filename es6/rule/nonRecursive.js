'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array'),
      NonRecursiveNode = require('../node/nonRecursive'),
      ruleNameUtilities = require('../utilities/ruleName');

const { Rule } = parsers,
      { filter } = arrayUtilities,
      { nonRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonRecursiveRule extends Rule {
  static fromIndirectlyLeftRecursiveRuleAndIndirectlyLeftRecursiveDefintion(indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition) {
    const ruleName = indirectlyLeftRecursiveRule.getName(),
          definitions = indirectlyLeftRecursiveRule.getDefinitions();

    filter(definitions, (definition) => {
      const indirectlyLeftRecursiveDefinitionMatchesDefinition = indirectlyLeftRecursiveDefinition.matchDefinition(definition);

      if (!indirectlyLeftRecursiveDefinitionMatchesDefinition) {
        return true;
      }
    });

    const nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          name = nonRecursiveRuleName,  ///
          NonTerminalNode = NonRecursiveNode, ///
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

    return nonRecursiveRule;
  }

  static fromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule) {
    const ruleName = immediatelyLeftRecursiveRule.getName(),
          definitions = immediatelyLeftRecursiveRule.getDefinitions(),
          nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
          name = nonRecursiveRuleName,  ///
          NonTerminalNode = NonRecursiveNode, ///
          nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

    return nonRecursiveRule;
  }
}

module.exports = NonRecursiveRule;
