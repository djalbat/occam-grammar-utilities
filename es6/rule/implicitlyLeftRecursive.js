'use strict';

const parsers = require('occam-parsers');

const ImplicitlyLeftRecursiveDefinition = require('../definition/implicitlyLeftRecursive');

const { Rule } = parsers;

class ImplicitlyLeftRecursiveRule extends Rule {
  static fromRuleAndPreviousRules(rule, previousRules) {
    let implicitlyLeftRecursiveRule = null;

    const implicitlyLeftRecursiveDefinitions = implicitlyLeftRecursiveDefinitionsFromRuleAndPreviousRules(rule, previousRules),
          implicitlyLeftRecursiveDefinitionsLength = implicitlyLeftRecursiveDefinitions.length,
          ruleImplicitlyLeftRecursive = (implicitlyLeftRecursiveDefinitionsLength > 0);

    if (ruleImplicitlyLeftRecursive) {
      const name = rule.getName(),
            definitions = rule.getDefinitions(),
            NonTerminalNode = rule.getNonTerminalNode();

      implicitlyLeftRecursiveRule = new ImplicitlyLeftRecursiveRule(name, definitions, NonTerminalNode);
    }

    return implicitlyLeftRecursiveRule;
  }
}

module.exports = ImplicitlyLeftRecursiveRule;

function implicitlyLeftRecursiveDefinitionsFromRuleAndPreviousRules(rule, previousRules) {
  const definitions = rule.getDefinitions(),
        implicitlyLeftRecursiveDefinitions = definitions.reduce(function(implicitlyLeftRecursiveDefinitions, definition) {
          const implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromDefinitionAndPreviousRules(definition, previousRules);
  
          if (implicitlyLeftRecursiveDefinition !== null) {
            implicitlyLeftRecursiveDefinitions.push(implicitlyLeftRecursiveDefinition);
          }
  
          return implicitlyLeftRecursiveDefinitions;
        }, []);

  return implicitlyLeftRecursiveDefinitions;
}
