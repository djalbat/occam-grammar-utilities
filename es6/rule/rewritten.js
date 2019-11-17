'use strict';

const parsers = require('occam-parsers');

const ruleNameUtilities = require('../utilities/ruleName'),
      RuleNameDefinition = require('../definition/ruleName'),
      PlaceHolderDefinition = require('../definition/placeHolder');

const { Rule } = parsers,
      { reducedRuleNameFromRuleName } = ruleNameUtilities;

class RewrittenRule extends Rule {
  static fromRule(rule) {
    let definitions = rule.getDefinitions();

    const ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName),
          placeHolderDefinitions = definitions.filter((definition) => {
            const definitionPlaceHolderDefinition = (definition instanceof PlaceHolderDefinition);

            if (definitionPlaceHolderDefinition) {
              return true;
            }
          });

    definitions = [
      ...placeHolderDefinitions,
      reducedRuleNameDefinition
    ];

    const name = ruleName,  ///
          NonTerminalNode = rule.getNonTerminalNode(),
          rewrittenRule = new RewrittenRule(name, definitions, NonTerminalNode);

    return rewrittenRule;
  }
}

module.exports = RewrittenRule;
