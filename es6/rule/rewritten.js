'use strict';

const parsers = require('occam-parsers');

const types = require('../types'),
      ruleNameUtilities = require('../utilities/ruleName'),
      RuleNameDefinition = require('../definition/ruleName'),
      RecursiveDefinition = require('../definition/recursive');

const { Rule } = parsers,
      { reducedRuleNameFromRuleName } = ruleNameUtilities,
      { DIRECTLY_LEFT_RECURSIVE_TYPE, INDIRECTLY_LEFT_RECURSIVE_TYPE, IMPLICITLY_LEFT_RECURSIVE_TYPE } = types;

class RewrittenRule extends Rule {
  static fromRule(rule) {
    let definitions = rule.getDefinitions();

    const ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName);

    definitions = definitions.filter((definition) => {
      let keep = false;

      const definitionRecursiveDefinition = (definition instanceof RecursiveDefinition);

      if (definitionRecursiveDefinition) {
        const recursiveDefinition = definition, ///
              type = recursiveDefinition.getType();

        keep = (type === DIRECTLY_LEFT_RECURSIVE_TYPE) ||
               (type === INDIRECTLY_LEFT_RECURSIVE_TYPE) ||
               (type === IMPLICITLY_LEFT_RECURSIVE_TYPE);
      }

      return keep;
    });

    definitions = [
      ...definitions,
      reducedRuleNameDefinition
    ];

    const name = ruleName,  ///
          NonTerminalNode = rule.getNonTerminalNode(),
          rewrittenRule = new RewrittenRule(name, definitions, NonTerminalNode);

    return rewrittenRule;
  }
}

module.exports = RewrittenRule;
