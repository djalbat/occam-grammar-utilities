'use strict';

const parsers = require('occam-parsers');

const RightRecursiveRule = require('../rule/rightRecursive');

const { Rule, Definition } = parsers;

class NonLeftRecursiveRule extends Rule {
  static fromLeftRecursiveRule(leftRecursiveRule) {
    const ruleName = leftRecursiveRule.getName(),
          ruleNonTerminalNode = leftRecursiveRule.getNonTerminalNode(),
          name = ruleName,  ///
          definitions = definitionsFromLeftRecursiveRule(leftRecursiveRule),
          NonTerminalNode = ruleNonTerminalNode,  ///
          nonLeftRecursiveRule = new NonLeftRecursiveRule(name, definitions, NonTerminalNode);

    return nonLeftRecursiveRule;
  }
}

module.exports = NonLeftRecursiveRule;

function definitionsFromLeftRecursiveRule(leftRecursiveRule) {
  let definitions;

  const rightRecursiveRuleNamePart = RightRecursiveRule.ruleNamePartFromLeftRecursiveRule(leftRecursiveRule),
        ruleNonLeftRecursiveDefinitions = leftRecursiveRule.getNonLeftRecursiveDefinitions(),
        ruleNonLeftRecursiveDefinitionsLength = ruleNonLeftRecursiveDefinitions.length;

  if (ruleNonLeftRecursiveDefinitionsLength === 0) {
    const parts = [rightRecursiveRuleNamePart],
          definition = new Definition(parts);

    definitions = [definition];
  } else {
    definitions = ruleNonLeftRecursiveDefinitions.map(function(ruleNonLeftRecursiveDefinition) {
      const ruleNonLeftRecursiveDefinitionParts = ruleNonLeftRecursiveDefinition.getParts(),
            parts = [].concat(ruleNonLeftRecursiveDefinitionParts).concat(rightRecursiveRuleNamePart),
            definition = new Definition(parts);

      return definition;
    });
  }

  return definitions;
}
