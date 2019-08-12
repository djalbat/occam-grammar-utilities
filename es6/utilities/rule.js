'use strict';

const arrayUtilities = require('../utilities/array'),
      RightRecursiveRule = require('../rule/rightRecursive'),
      definitionUtilities = require('../utilities/definition'),
      NonLeftRecursiveDefinition = require('../definition/nonLeftRecursive');

const { push, unshift, iterateWithDelete } = arrayUtilities,
      { isDefinitionLeftRecursive } = definitionUtilities;

function eliminateLeftRecursionFromRule(rule, rules) {
  const name = rule.getName(),
        ruleName = name,  ///
        definitions = rule.getDefinitions(),
        nonTerminalNode = rule.getNonTerminalNode(),
        rightRecursiveRules = [];

  iterateWithDelete(definitions, (definition) => {
    const definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName);

    if (definitionLeftRecursive) {
      const rightRecursiveRule = RightRecursiveRule.fromRuleNameDefinitionAndNonTerminalNode(ruleName, definition, nonTerminalNode);

      rightRecursiveRules.push(rightRecursiveRule);

      return true;
    }
  });

  const nonLeftRecursiveDefinitions = [];

  definitions.forEach((definition) => {
    rightRecursiveRules.forEach((rightRecursiveRule) => {
      const nonLeftRecursiveDefinition = NonLeftRecursiveDefinition.fromDefinitionAndRightRecursiveRule(definition, rightRecursiveRule);

      nonLeftRecursiveDefinitions.push(nonLeftRecursiveDefinition);
    });
  });

  unshift(definitions, nonLeftRecursiveDefinitions);

  push(rules, rightRecursiveRules);
}

module.exports = {
  eliminateLeftRecursionFromRule
};
