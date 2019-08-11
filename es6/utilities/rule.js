'use strict';

const arrayUtilities = require('../utilities/array'),
      RightRecursiveRule = require('../rule/rightRecursive'),
      definitionUtilities = require('../utilities/definition'),
      RightRecursiveRuleNamePart = require('../part/rightRecursiveRuleName');

const { push, iterateWithDelete } = arrayUtilities,
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

  definitions.forEach((definition) => {
    rightRecursiveRules.forEach((rightRecursiveRule) => {
      const rightRecursiveRuleNamePart = RightRecursiveRuleNamePart.fromRightRecursiveRule(rightRecursiveRule);

      definition.addPart(rightRecursiveRuleNamePart);
    });
  });

  push(rules, rightRecursiveRules);
}

module.exports = {
  eliminateLeftRecursionFromRule
};
