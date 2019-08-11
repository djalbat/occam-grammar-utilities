'use strict';

const parsers = require('occam-parsers');

const RightRecursiveRule = require('../rule/rightRecursive');

const { Rule, Definition } = parsers;

class NonImmediatelyLeftRecursiveRule extends Rule {
  static fromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule) {
    const ruleName = immediatelyLeftRecursiveRule.getName(),
          ruleNonTerminalNode = immediatelyLeftRecursiveRule.getNonTerminalNode(),
          name = ruleName,  ///
          definitions = definitionsFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule),
          NonTerminalNode = ruleNonTerminalNode,  ///
          nonImmediatelyLeftRecursiveRule = new NonImmediatelyLeftRecursiveRule(name, definitions, NonTerminalNode);

    return nonImmediatelyLeftRecursiveRule;
  }
}

module.exports = NonImmediatelyLeftRecursiveRule;

function definitionsFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule) {
  let definitions;

  const rightRecursiveRuleNamePart = RightRecursiveRule.ruleNamePartFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule),
        nonImmediatelyLeftRecursiveDefinitions = immediatelyLeftRecursiveRule.getNonImmediatelyLeftRecursiveDefinitions(),
        nonImmediatelyLeftRecursiveDefinitionsLength = nonImmediatelyLeftRecursiveDefinitions.length;

  if (nonImmediatelyLeftRecursiveDefinitionsLength === 0) {
    const parts = [rightRecursiveRuleNamePart],
          definition = new Definition(parts);

    definitions = [definition];
  } else {
    definitions = nonImmediatelyLeftRecursiveDefinitions.map(function(nonImmediatelyLeftRecursiveDefinition) {
      const nonImmediatelyLeftRecursiveDefinitionParts = nonImmediatelyLeftRecursiveDefinition.getParts(),
            parts = [].concat(nonImmediatelyLeftRecursiveDefinitionParts).concat(rightRecursiveRuleNamePart),
            definition = new Definition(parts);

      return definition;
    });
  }

  return definitions;
}
