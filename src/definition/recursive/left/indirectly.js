"use strict";

import ReducedRule from "../../../rule/reduced";
import RewrittenRule from "../../../rule/rewritten";
import RewrittenDefinition from "../../../definition/rewritten";
import LeftRecursiveDefinition from "../../../definition/recursive/left";
import ImplicitlyLeftRecursiveDefinition from "../../../definition/recursive/left/implicitly";

import { INDIRECTLY_LEFT_RECURSIVE_TYPE } from "../../../types";
import { reducedRuleFromRule, rewrittenRuleFromRule } from "../../../utilities/rule";
import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../../utilities/definition";

export default class IndirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  constructor(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
    super(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);

    this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
  }

  getImplicitlyLeftRecursiveDefinition() {
    return this.implicitlyLeftRecursiveDefinition;
  }

  rewrite(ruleMap) {
    const unary = this.isUnary(),
          ruleName = this.getRuleName(),
          definition = this.getDefinition(),
          implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
          implicitlyLeftRecursiveDefinitionUnary = implicitlyLeftRecursiveDefinition.isUnary(),
          implicitlyLeftRecursiveDefinitionRuleName = implicitlyLeftRecursiveDefinition.getRuleName(),
          implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveDefinitionRuleName,  ///
          indirectlyLeftRecursiveRuleName = ruleName; ///

    if (unary && implicitlyLeftRecursiveDefinitionUnary) {
      const definitionString = definition.asString();

      throw new Error(`Both the '${definitionString}' indirectly left recursive definition of the '${indirectlyLeftRecursiveRuleName}' rule and the corresponding implicitly left recursive definition of the '${implicitlyLeftRecursiveRuleName}' rule are unary and therefore the former cannot be rewritten.`);
    }

    const implicitlyLeftRecursiveRule = ruleMap[implicitlyLeftRecursiveRuleName],
          indirectlyLeftRecursiveRule = ruleMap[indirectlyLeftRecursiveRuleName],
          reducedImplicitlyLeftRecursiveRule = reducedRuleFromRule(implicitlyLeftRecursiveRule, ruleMap, ReducedRule),
          rewrittenIndirectlyLeftRecursiveRule = rewrittenRuleFromRule(indirectlyLeftRecursiveRule, ruleMap, RewrittenRule),
          leftRecursiveRuleName = implicitlyLeftRecursiveRuleName, ///
          rewrittenDefinition = RewrittenDefinition.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName);

    reducedImplicitlyLeftRecursiveRule.removeDefinition(definition);

    rewrittenIndirectlyLeftRecursiveRule.replaceDefinition(definition, rewrittenDefinition);

    // const ruleName = this.getRuleName(),
    //       rule = ruleMap[ruleName],
    //       definition = this.getDefinition(),
    //       definitionUnary = isDefinitionUnary(definition),
    //       leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
    //       firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
    //       leftRecursiveRuleName = firstLeftRecursiveRuleName, ///
    //       leftRecursiveRule = ruleMap[leftRecursiveRuleName];
    //
    // const reducedRule = reducedRuleFromRule(leftRecursiveRule, ruleMap, ReducedRule),
    //       reducedRuleEmpty = reducedRule.isEmpty();
    //
    // if (reducedRuleEmpty) {
    //   const definitionString = definition.asString(),
    //         implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
    //         implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();
    //
    //   throw new Error(`The '${implicitlyLeftRecursiveDefinitionString}' implicitly left recursive definition of the '${leftRecursiveRuleName}' rule has no sibling non-left recursive definitions and therefore the '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule cannot be rewritten.`);
    // }
    //
    // const rewrittenRule = rewrittenRuleFromRule(leftRecursiveRule, ruleMap, RewrittenRule),
    //       replacedDefinition = this, ///
    //       rewrittenDefinition = definitionUnary ?
    //                               RewrittenDefinition.fromDefinitionLeftRecursiveRuleNameAndImplicitlyLeftRecursiveDefinition(definition, leftRecursiveRuleName, this.implicitlyLeftRecursiveDefinition) :
    //                                 RewrittenDefinition.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
    //       replacementDefinition = rewrittenDefinition;  ///
    //
    // rule.replaceDefinition(replacedDefinition, replacementDefinition);
    //
    // if (definitionUnary) {
    //   const unaryImplicitlyLeftRecursiveDefinition = UnaryDefinition.fromDefinition(this.implicitlyLeftRecursiveDefinition),
    //         replacedDefinition = this.implicitlyLeftRecursiveDefinition,  ///
    //         replacementDefinition = unaryImplicitlyLeftRecursiveDefinition; ///
    //
    //   rewrittenRule.replaceDefinition(replacedDefinition, replacementDefinition);
    // }
  }

  static fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
    let indirectlyLeftRecursiveDefinition = null;

    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition);

      leftRecursiveRuleNames.some((leftRecursiveRuleName) => {
        const ruleNameLeftRecursiveRuleName = (ruleName === leftRecursiveRuleName);

        if (!ruleNameLeftRecursiveRuleName) {
          const implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions);

          if (implicitlyLeftRecursiveDefinition !== null) {
            // const definitionComplex = isDefinitionComplex(definition);
            //
            // if (definitionComplex) {
            //   const definitionString = definition.asString();
            //
            //   throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
            // }

            const parts = [],
                  type = INDIRECTLY_LEFT_RECURSIVE_TYPE,
                  recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

            indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
          }
        }
      });
    }

    return indirectlyLeftRecursiveDefinition;
  }
}
