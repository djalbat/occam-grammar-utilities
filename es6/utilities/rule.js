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
  const ruleLeftRecursive = isRuleLeftRecursive(rule);

  if (!ruleLeftRecursive) {
    return;
  }

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

function isRuleLeftRecursive(rule) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions(),
        ruleLeftRecursive = definitions.some((definition) => {
          const definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName);

          if (definitionLeftRecursive) {
            return true;
          }
        });

  return ruleLeftRecursive;
}
