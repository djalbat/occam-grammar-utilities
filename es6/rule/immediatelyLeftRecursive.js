'use strict';

const parsers = require('occam-parsers');

const ImmediatelyLeftRecursiveDefinition = require('../definition/immediatelyLeftRecursive');

const { Rule } = parsers;

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
}

module.exports = ImmediatelyLeftRecursiveRule;
