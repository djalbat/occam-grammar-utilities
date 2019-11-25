'use strict';

const necessary = require('necessary');

const types = require('../../types'),
      DeltaPart = require('../../part/delta'),
      ReducedRule = require('../../rule/reduced'),
      RepeatedRule = require('../../rule/repeated'),
      RewrittenRule = require('../../rule/rewritten'),
      ruleUtilities = require('../../utilities/rule'),
      RepeatedDefinition = require('../../definition/repeated'),
      RewrittenDefinition = require('../../definition/rewritten'),
      definitionUtilities = require('../../utilities/definition'),
      LeftRecursiveDefinition = require('../../definition/leftRecursive'),
      ImplicitlyLeftRecursiveDefinition = require('../../definition/leftRecursive/implicitly');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { INDIRECTLY_LEFT_RECURSIVE_TYPE } = types,
      { findRule, reducedRuleFromRule, repeatedRuleFromRule, rewrittenRuleFromRule } = ruleUtilities,
      { isDefinitionUnary, isDefinitionComplex, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } = definitionUtilities;

class IndirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  constructor(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
    super(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);

    this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
  }

  getImplicitlyLeftRecursiveDefinition() {
    return this.implicitlyLeftRecursiveDefinition;
  }

  rewrite(rules) {
    const definition = this.getDefinition(),
          ruleName = this.getRuleName(),
          rule = findRule(ruleName, rules);

    const leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          leftRecursiveRuleName = firstLeftRecursiveRuleName, ///
          leftRecursiveRule = findRule(leftRecursiveRuleName, rules);

    const reducedRule = reducedRuleFromRule(leftRecursiveRule, rules, ReducedRule),
          reducedRuleEmpty = reducedRule.isEmpty();

    if (reducedRuleEmpty) {
      throw new Error(`The '${leftRecursiveRuleName}' rule has non-left recursive definitions and therefore cannot be rewritten.`);
    }

    const repeatedRule = repeatedRuleFromRule(leftRecursiveRule, rules, RepeatedRule),
          repeatedDefinition = RepeatedDefinition.fromDefinition(definition);

    repeatedRule.addDefinition(repeatedDefinition);

    const rewrittenRule = rewrittenRuleFromRule(leftRecursiveRule, rules, RewrittenRule),
          rewrittenDefinition = RewrittenDefinition.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
          replacementDefinition = this; ///

    rule.replaceDefinition(replacementDefinition, rewrittenDefinition);

    // const implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
    //       definition = implicitlyLeftRecursiveDefinition.getDefinition(),
    //       implicitlyLeftRecursiveRuleName = leftRecursiveRuleName,  ///
    //       implicitlyLeftRecursiveRule = findRule(implicitlyLeftRecursiveRuleName, rules),
    //       reducedLeftRecursiveRule = reducedRuleFromRule(implicitlyLeftRecursiveRule, rules);
    //
    // implicitlyLeftRecursiveRule.addDefinition(definition, -1);
    //
    // reducedLeftRecursiveRule.removeDefinition(definition);
    //
    // const reducedLeftRecursiveRuleName = reducedLeftRecursiveRule.getName(),
    //       reducedLeftRecursiveRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedLeftRecursiveRuleName);
    //
    // implicitlyLeftRecursiveRule.addDefinition(reducedLeftRecursiveRuleNameDefinition);
    //
    // const reducedLeftRecursiveRuleEmpty = reducedLeftRecursiveRule.isEmpty();

    // if (reducedLeftRecursiveRuleEmpty) {
    //   const implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveRule.getName();
    //
    //   throw new Error(`The '${implicitlyLeftRecursiveRuleName}' rule has no non-recursive definitions and therefore cannot be rewritten.`);
    // }
  }

  static fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
    let indirectlyLeftRecursiveDefinition = null;

    const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = (leftRecursiveRuleNamesLength > 0);

    if (definitionLeftRecursive) {
      const firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
            leftRecursiveRuleName = firstLeftRecursiveRuleName, ///
            ruleNameLeftRecursiveRuleName = (ruleName === leftRecursiveRuleName);

      if (!ruleNameLeftRecursiveRuleName) {
        const implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromLeftRecursiveRuleNameAndRecursiveDefinitions(leftRecursiveRuleName, recursiveDefinitions);

        if (implicitlyLeftRecursiveDefinition !== null) {
          const definitionUnary = isDefinitionUnary(definition);

          if (definitionUnary) {
            const definitionString = definition.asString();

            throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
          }

          const definitionComplex = isDefinitionComplex(definition);

          if (definitionComplex) {
            const definitionString = definition.asString();

            throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
          }

          const deltaPart = new DeltaPart(),
                type = INDIRECTLY_LEFT_RECURSIVE_TYPE,
                parts = [
                  deltaPart
                ],
                recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

          indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
        }
      }
    }

    return indirectlyLeftRecursiveDefinition;
  }
}

module.exports = IndirectlyLeftRecursiveDefinition;
