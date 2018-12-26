'use strict';

const parsers = require('occam-parsers');

const ImplicitlyLeftRecursiveDefinition = require('../definition/implicitlyLeftRecursive'),
      ImmediatelyLeftRecursiveDefinition = require('../definition/immediatelyLeftRecursive');

const { Rule, Definition } = parsers;

class ImmediatelyLeftRecursiveRule extends Rule {
  getImmediatelyLeftRecursiveDefinitions() {
    const name = this.getName(),
          definitions = this.getDefinitions(),
          ruleName = name,  ///
          immediatelyLeftRecursiveDefinitions = definitions.filter(function(definition) {
            const immediatelyLeftRecursiveDefinition = ImmediatelyLeftRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

            if (immediatelyLeftRecursiveDefinition !== null) {
              return true;
            }
          });

    return immediatelyLeftRecursiveDefinitions;
  }

  getNonImmediatelyLeftRecursiveDefinitions() {
    const name = this.getName(),
          definitions = this.getDefinitions(),
          ruleName = name,  ///
          nonImmediatelyLeftRecursiveDefinitions = definitions.filter(function(definition) {
            const immediatelyLeftRecursiveDefinition = ImmediatelyLeftRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

            if (immediatelyLeftRecursiveDefinition === null) {
              return true;
            }
          });

    return nonImmediatelyLeftRecursiveDefinitions;
  }

  static fromRule(rule) {
    let immediatelyLeftRecursiveRule = null;

    const ruleName = rule.getName(),
          ruleDefinitions = rule.getDefinitions(),
          someRuleDefinitionImmediatelyLeftRecursive = ruleDefinitions.some(function(ruleDefinition) {
            const definition = ruleDefinition, ///
                  immediatelyLeftRecursiveDefinition = ImmediatelyLeftRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

            if (immediatelyLeftRecursiveDefinition !== null) {
              return true;
            }
          });

    if (someRuleDefinitionImmediatelyLeftRecursive) {
      const name = rule.getName(),
            definitions = rule.getDefinitions(),
            NonTerminalNode = rule.getNonTerminalNode();

      immediatelyLeftRecursiveRule = new ImmediatelyLeftRecursiveRule(name, definitions, NonTerminalNode);
    }

    return immediatelyLeftRecursiveRule;
  }

  static fromImplicitlyLeftRecursiveRuleAndPreviousRules(implicitlyLeftRecursiveRule, previousRules) {
    let definitions = implicitlyLeftRecursiveRule.getDefinitions();

    previousRules.forEach(function(previousRule) {
      definitions = definitionsFromDefinitionsAndPreviousRule(definitions, previousRule); ///
    });

    const name = implicitlyLeftRecursiveRule.getName(),
          NonTerminalNode = implicitlyLeftRecursiveRule.getNonTerminalNode(),
          immediatelyLeftRecursiveRule = new ImmediatelyLeftRecursiveRule(name, definitions, NonTerminalNode);

    return immediatelyLeftRecursiveRule;
  }
}

module.exports = ImmediatelyLeftRecursiveRule;

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
