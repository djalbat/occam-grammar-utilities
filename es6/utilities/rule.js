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

  let count = 1;

  iterateWithDelete(definitions, (definition) => {
    const definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName);

    if (definitionLeftRecursive) {
      const leftRecursiveDefinition = definition, ///
            rightRecursiveRuleName = `${ruleName}${count++}~`,
            rightRecursiveRule = RightRecursiveRule.fromLeftRecursiveDefinitionRightRecursiveRuleNameAndnonTerminalNode(leftRecursiveDefinition, rightRecursiveRuleName, nonTerminalNode);

      rightRecursiveRules.push(rightRecursiveRule);

      return true;
    }
  });

  rightRecursiveRules.forEach((rightRecursiveRule) => {
    const nonLeftRecursiveDefinitions = definitions.map((definition) => {
      const nonLeftRecursiveDefinition = NonLeftRecursiveDefinition.fromDefinitionAndRightRecursiveRule(definition, rightRecursiveRule);

      return nonLeftRecursiveDefinition;
    });

    unshift(definitions, nonLeftRecursiveDefinitions);
  });

  push(rules, rightRecursiveRules);
}

module.exports = {
  eliminateLeftRecursionFromRule
};
