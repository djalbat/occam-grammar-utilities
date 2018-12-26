'use strict';

const parsers = require('occam-parsers');

const { Rule, Definition, NonTerminalNode, parts } = parsers,
    { EpsilonPart, RuleNamePart } = parts;

class RightRecursiveRule extends Rule {
  static ruleNamePartFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule) {
    const name = nameFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule),
          noWhitespace = false, ///
          ruleNamePart = new RuleNamePart(name, noWhitespace);

    return ruleNamePart;
  }

  static fromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule) {
    const name = nameFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule),
          definitions = definitionsFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule),
          Node = NonTerminalNode, ///
          rightRecursiveRule = new RightRecursiveRule(name, definitions, Node);

    return rightRecursiveRule;
  }
}

module.exports = RightRecursiveRule;

function definitionsFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule) {
  const rightRecursiveDefinitions = rightRecursiveDefinitionsFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule),
        epsilonPart = new EpsilonPart(),
        epsilonParts = [
          epsilonPart
        ],
        epsilonPartDefinition = new Definition(epsilonParts),
        definitions = [].concat(rightRecursiveDefinitions).concat(epsilonPartDefinition);

  return definitions;
}

function rightRecursiveDefinitionsFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule) {
  const immediatelyLeftRecursiveDefinitions = immediatelyLeftRecursiveRule.getImmediatelyLeftRecursiveDefinitions(),
        ruleNamePart = RightRecursiveRule.ruleNamePartFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule),
        rightRecursiveDefinitions = immediatelyLeftRecursiveDefinitions.map(function(immediatelyLeftRecursiveDefinition) {
          const immediatelyLeftRecursiveDefinitionAllButFirstParts = immediatelyLeftRecursiveDefinition.getAllButFirstParts(),
                rightRecursiveDefinitionParts = [].concat(immediatelyLeftRecursiveDefinitionAllButFirstParts).concat(ruleNamePart),
                rightRecursiveDefinition = new Definition(rightRecursiveDefinitionParts);
  
          return rightRecursiveDefinition;
        });

  return rightRecursiveDefinitions;
}

function nameFromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule) {
  const leftRecursiveRuleName = immediatelyLeftRecursiveRule.getName(),
        name = `${leftRecursiveRuleName}~`;

  return name;
}
