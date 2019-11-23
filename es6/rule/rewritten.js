'use strict';

const parsers = require('occam-parsers');

const ruleNameUtilities = require('../utilities/ruleName'),
      RuleNameDefinition = require('../definition/ruleName'),
      LeftRecursiveDefinition = require('../definition/leftRecursive');

const { Rule } = parsers,
      { reducedRuleNameFromRuleName } = ruleNameUtilities;

class RewrittenRule extends Rule {
  static fromRule(rule) {
    let definitions = rule.getDefinitions();

    const ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName),
          leftRecursiveDefinitions = definitions.filter((definition) => {
            const definitionLeftRecursiveDefinition = (definition instanceof LeftRecursiveDefinition);

            if (definitionLeftRecursiveDefinition) {
              return true;
            }
          });

    definitions = [
      ...leftRecursiveDefinitions,
      reducedRuleNameDefinition
    ];

    const name = ruleName,  ///
          NonTerminalNode = rule.getNonTerminalNode(),
          rewrittenRule = new RewrittenRule(name, definitions, NonTerminalNode);

    return rewrittenRule;
  }
}

module.exports = RewrittenRule;
