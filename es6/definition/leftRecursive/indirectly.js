"use strict";

import { arrayUtilities } from "necessary";

import ReducedRule from "../../rule/reduced";
import RepeatedRule from "../../rule/repeated";
import RewrittenRule from "../../rule/rewritten";
import RepeatedDefinition from "../../definition/repeated";
import RewrittenDefinition from "../../definition/rewritten";
import LeftRecursiveDefinition from "../../definition/leftRecursive";
import ImplicitlyLeftRecursiveDefinition from "../../definition/leftRecursive/implicitly";

import { INDIRECTLY_LEFT_RECURSIVE_TYPE } from "../../types";
import { findRule, reducedRuleFromRule, repeatedRuleFromRule, rewrittenRuleFromRule } from "../../utilities/rule";
import { isDefinitionUnary, isDefinitionComplex, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

const { first } = arrayUtilities;

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
      const definitionString = definition.asString(),
            implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
            implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();

      throw new Error(`The '${implicitlyLeftRecursiveDefinitionString}' implicitly left recursive definition of the '${leftRecursiveRuleName}' rule has no sibling non-left recursive definitions and therefore the '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule cannot be rewritten.`);
    }

    const repeatedRule = repeatedRuleFromRule(leftRecursiveRule, rules, RepeatedRule),
          repeatedDefinition = RepeatedDefinition.fromDefinition(definition);

    repeatedRule.addDefinition(repeatedDefinition);

    rewrittenRuleFromRule(leftRecursiveRule, rules, RewrittenRule);

    const rewrittenDefinition = RewrittenDefinition.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
          replacementDefinition = this; ///

    rule.replaceDefinition(replacementDefinition, rewrittenDefinition);
  }

  static fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
    let indirectlyLeftRecursiveDefinition = null;

    const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = (leftRecursiveRuleNamesLength > 0);

    if (definitionLeftRecursive) {
      leftRecursiveRuleNames.some((leftRecursiveRuleName) => {
        const ruleNameLeftRecursiveRuleName = (ruleName === leftRecursiveRuleName);

        if (!ruleNameLeftRecursiveRuleName) {
          const implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions);

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

            const type = INDIRECTLY_LEFT_RECURSIVE_TYPE,
                  parts = [],
                  recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

            indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);

            return true;
          }
        }
      });
    }

    return indirectlyLeftRecursiveDefinition;
  }
}

module.exports = IndirectlyLeftRecursiveDefinition;
