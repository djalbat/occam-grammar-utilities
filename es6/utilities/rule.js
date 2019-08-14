'use strict';

const arrayUtilities = require('../utilities/array'),
      NonRecursiveRule = require('../rule/nonRecursive'),
      RightRecursiveRule = require('../rule/rightRecursive'),
      definitionUtilities = require('../utilities/definition'),
      NonRecursiveDefinition = require('../definition/nonRecursive'),
      RecursiveRuleNameDefinition = require('../definition/recursiveRuleName');

const { push, iterateWithDelete } = arrayUtilities,
      { isDefinitionLeftRecursive } = definitionUtilities;

function eliminateLeftRecursionFromRule(rule, rules) {
  const name = rule.getName(),
        ruleName = name,  ///
        definitions = rule.getDefinitions(),
        nonTerminalNode = rule.getNonTerminalNode(),
        rightRecursiveRules = [];

  iterateWithDelete(definitions, (definition, count) => {
    const definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName);

    if (definitionLeftRecursive) {
      const rightRecursiveRule = RightRecursiveRule.fromRuleNameDefinitionAndNonTerminalNodeAndCount(ruleName, definition, nonTerminalNode, count);

      rightRecursiveRules.push(rightRecursiveRule);

      return true;
    }
  });

  const nonRecursiveRule = NonRecursiveRule.fromRule(rule),
        nonRecursiveDefinition = NonRecursiveDefinition.fromNonRecursiveRule(nonRecursiveRule),
        rightRecursiveRuleNameDefinitions = rightRecursiveRules.map((rightRecursiveRule) => {
          const rightRecursiveRuleNameDefinition = RecursiveRuleNameDefinition.fromNonRecursiveRuleAndRecursiveRule(nonRecursiveRule, rightRecursiveRule);

          return rightRecursiveRuleNameDefinition;
        });

  rule.setDefinitions([
    ...rightRecursiveRuleNameDefinitions,
    nonRecursiveDefinition
  ]);

  rules.push(nonRecursiveRule);

  push(rules, rightRecursiveRules);
}

module.exports = {
  eliminateLeftRecursionFromRule
};
