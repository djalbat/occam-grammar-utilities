'use strict';

const types = require('../../types'),
      DeltaPart = require('../../part/delta'),
      ReducedRule = require('../../rule/reduced'),
      RepeatedRule = require('../../rule/repeated'),
      RewrittenRule = require('../../rule/rewritten'),
      ruleUtilities = require('../../utilities/rule'),
      RepeatedDefinition = require('../../definition/repeated'),
      RewrittenDefinition = require('../../definition/rewritten'),
      definitionUtilities = require('../../utilities/definition'),
      LeftRecursiveDefinition = require('../../definition/leftRecursive');

const { DIRECTLY_LEFT_RECURSIVE_TYPE } = types,
      { findRule, reducedRuleFromRule, repeatedRuleFromRule, rewrittenRuleFromRule } = ruleUtilities,
      { isDefinitionUnary, isDefinitionComplex, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } = definitionUtilities;

class DirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  rewrite(rules) {
    const definition = this.getDefinition(),
          ruleName = this.getRuleName(),
          rule = findRule(ruleName, rules);

    const reducedRule = reducedRuleFromRule(rule, rules, ReducedRule),
          reducedRuleEmpty = reducedRule.isEmpty();

    if (reducedRuleEmpty) {
      const definitionString = definition.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule has no sibling non-left recursive definitions and therefore cannot be rewritten.`);
    }

    const leftRecursiveRuleName = ruleName; ///

    const repeatedRule = repeatedRuleFromRule(rule, rules, RepeatedRule),
          repeatedDefinition = RepeatedDefinition.fromDefinition(definition);

    repeatedRule.addDefinition(repeatedDefinition);

    const rewrittenRule = rewrittenRuleFromRule(rule, rules, RewrittenRule),
          rewrittenDefinition = RewrittenDefinition.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
          replacementDefinition = this; ///

    rewrittenRule.replaceDefinition(replacementDefinition, rewrittenDefinition);
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let directlyLeftRecursiveDefinition = null;

    const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = (leftRecursiveRuleNamesLength > 0);

    if (definitionLeftRecursive) {
      leftRecursiveRuleNames.some((leftRecursiveRuleName) => {
        const ruleNameLeftRecursiveRuleName = (ruleName === leftRecursiveRuleName);

        if (ruleNameLeftRecursiveRuleName) {
          const definitionUnary = isDefinitionUnary(definition);

          if (definitionUnary) {
            const definitionString = definition.asString();

            throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
          }

          const definitionComplex = isDefinitionComplex(definition);

          if (definitionComplex) {
            const definitionString = definition.asString();

            throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
          }

          const deltaPart = new DeltaPart(),
                type = DIRECTLY_LEFT_RECURSIVE_TYPE,
                parts = [
                  deltaPart
                ],
                recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

          directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);

          return true;
        }
      });
    }

    return directlyLeftRecursiveDefinition;
  }
}

module.exports = DirectlyLeftRecursiveDefinition;
