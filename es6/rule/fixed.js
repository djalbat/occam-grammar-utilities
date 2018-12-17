'use strict';

const parsers = require('occam-parsers');

const UnitDefinition = require('../definition/unit'),
      NonUnitDefinition = require('../definition/nonUnit');

const { Rule } = parsers;

class FixedRule extends Rule {
  static fromRuleAndRuleNames(rule, ruleNames) {
    const ruleName = rule.getName(),
          ruleNonTerminalNode = rule.getNonTerminalNode(),
          name = ruleName, ///
          definitions = definitionsFromRuleAndRuleNames(rule, ruleNames),
          NonTerminalNode = ruleNonTerminalNode, ///
          fixedRule = new FixedRule(name, definitions, NonTerminalNode);

    return fixedRule;
  }
}

module.exports = FixedRule;

function definitionsFromRuleAndRuleNames(rule, ruleNames) {
  const ruleDefinitions = rule.getDefinitions(),
      definitions = ruleDefinitions.reduce(function(definitions, ruleDefinition) {
        let definition = null;

        const nonUnitDefinition = NonUnitDefinition.fromDefinition(ruleDefinition);

        if (nonUnitDefinition !== null) {
          definition = nonUnitDefinition; ///
        } else {
          const unitDefinition = UnitDefinition.fromDefinition(ruleDefinition),
                unitDefinitionIncludedInRuleNames = unitDefinition.isIncludedInRuleNames(ruleNames);

          if (!unitDefinitionIncludedInRuleNames) {
            definition = unitDefinition;  ///
          }
        }

        if (definition !== null) {
          definitions.push(definition);
        }

        return definitions;
      }, []);

  return definitions;
}
