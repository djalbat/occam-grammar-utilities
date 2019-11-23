'use strict';

const DeltaPart = require('../../part/delta'),
      ruleUtilities = require('../../utilities/rule'),
      arrayUtilities = require('../../utilities/array'),
      definitionUtilities = require('../../utilities/definition'),
      recursiveDefinitionUtilities = require('../../utilities/recursiveDefinition');

const LeftRecursiveDefinition = require('../../definition/leftRecursive');

const { first } = arrayUtilities,
      { findImplicitlyLeftRecursiveDefinition } = recursiveDefinitionUtilities,
      { findRule, reducedRuleFromRule, repeatedRuleFromRule, rewrittenRuleFromRule } = ruleUtilities,
      { isDefinitionUnary, isDefinitionComplex, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } = definitionUtilities;

class IndirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  constructor(parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
    super(parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);

    this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
  }

  getImplicitlyLeftRecursiveDefinition() {
    return this.implicitlyLeftRecursiveDefinition;
  }

  rewrite(rules) {
    const ruleName = this.getRuleName(),
          rule = findRule(ruleName, rules),
          leftRecursiveDefinition = this,  ///
          replacementDefinition = this, ///
          rewrittenDefinition = RewrittenDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition);

    rule.replaceDefinition(replacementDefinition, rewrittenDefinition);

    const leftRecursiveRuleName = this.getLeftRecursiveRuleName(),
          repeatedDefinition = RepeatedDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition),
          repeatedRule = repeatedRuleFromLeftRecursiveRuleName(leftRecursiveRuleName, rules);

    repeatedRule.addDefinition(repeatedDefinition);

    const implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
          definition = implicitlyLeftRecursiveDefinition.getDefinition(),
          implicitlyLeftRecursiveRuleName = leftRecursiveRuleName,  ///
          implicitlyLeftRecursiveRule = findRule(implicitlyLeftRecursiveRuleName, rules),
          reducedLeftRecursiveRule = reducedRuleFromRule(implicitlyLeftRecursiveRule, rules);

    implicitlyLeftRecursiveRule.addDefinition(definition, -1);

    reducedLeftRecursiveRule.removeDefinition(definition);

    const reducedLeftRecursiveRuleName = reducedLeftRecursiveRule.getName(),
          reducedLeftRecursiveRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedLeftRecursiveRuleName);

    implicitlyLeftRecursiveRule.addDefinition(reducedLeftRecursiveRuleNameDefinition);

    const reducedLeftRecursiveRuleEmpty = reducedLeftRecursiveRule.isEmpty();

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
        const implicitlyLeftRecursiveDefinition = findImplicitlyLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions);

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
                parts = [
                  deltaPart
                ],
                recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

          indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
        }
      }
    }

    return indirectlyLeftRecursiveDefinition;
  }
}

module.exports = IndirectlyLeftRecursiveDefinition;
