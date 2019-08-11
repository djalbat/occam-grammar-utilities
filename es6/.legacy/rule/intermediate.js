'use strict';

const parsers = require('occam-parsers');

const ImplicitlyLeftRecursiveDefinition = require('../definition/implicitlyLeftRecursive');

const { Rule, Definition } = parsers;

class IntermediateRule extends Rule {
  static fromImplicitlyLeftRecursiveRuleAndPreviousRules(implicitlyLeftRecursiveRule, previousRules) {
    let definitions = implicitlyLeftRecursiveRule.getDefinitions();

    previousRules.forEach(function(previousRule) {
      definitions = definitionsFromDefinitionsAndPreviousRule(definitions, previousRule); ///
    });

    const name = implicitlyLeftRecursiveRule.getName(),
          NonTerminalNode = implicitlyLeftRecursiveRule.getNonTerminalNode(),
          intermediateRule = new IntermediateRule(name, definitions, NonTerminalNode);

    return intermediateRule;
  }
}

module.exports = IntermediateRule;

function definitionsFromDefinitionsAndPreviousRule(definitions, previousRule) {
  let newDefinitions = [];

  definitions.forEach(function(definition) {
    const implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinitionAndPreviousRule(definition, previousRule);

    if (implicitlyLeftRecursiveDefinition !== null) {
      const definitions =  definitionsFromImplicitlyLeftRecursiveDefinitionAndPreviousRule(implicitlyLeftRecursiveDefinition, previousRule);

      newDefinitions = newDefinitions.concat(definitions);
    } else {
      const newDefinition = definition; ///

      newDefinitions.push(newDefinition);
    }
  });

  definitions = newDefinitions; ///

  return definitions;
}

function definitionsFromImplicitlyLeftRecursiveDefinitionAndPreviousRule(implicitlyLeftRecursiveDefinition, previousRule) {
  const previousRuleDefinitions = previousRule.getDefinitions(),
        implicitlyLeftRecursiveDefinitionAllButFirstParts = implicitlyLeftRecursiveDefinition.getAllButFirstParts(),
        definitions = previousRuleDefinitions.map(function(previousRuleDefinition) {
          const previousRuleDefinitionParts = previousRuleDefinition.getParts(),
                parts = [].concat(previousRuleDefinitionParts).concat(implicitlyLeftRecursiveDefinitionAllButFirstParts),
                definition = new Definition(parts);
  
          return definition;
        });

  return definitions;
}
