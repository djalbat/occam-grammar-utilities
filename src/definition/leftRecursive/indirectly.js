"use strict";

import ReducedRule from "../../rule/reduced";
import RewrittenRule from "../../rule/rewritten";
import RewrittenDefinition from "../../definition/rewritten";
import LeftRecursiveDefinition from "../../definition/leftRecursive";
import ImplicitlyLeftRecursiveDefinition from "../../definition/leftRecursive/implicitly";

import { INDIRECTLY_LEFT_RECURSIVE_TYPE } from "../../types";
import { reducedRuleFromRule, rewrittenRuleFromRule } from "../../utilities/rule";
import { isDefinitionUnary, isDefinitionComplex, isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

export default class IndirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  constructor(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
    super(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);

    this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
  }

  getImplicitlyLeftRecursiveDefinition() {
    return this.implicitlyLeftRecursiveDefinition;
  }

  rewrite(ruleMap) {
    const ruleName = this.getRuleName(),
          definition = this.getDefinition(),
          implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
          implicitlyLeftRecursiveDefinitionRuleName = implicitlyLeftRecursiveDefinition.getRuleName(),
          implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveDefinitionRuleName,  ///
          indirectlyLeftRecursiveRuleName = ruleName, ///
          implicitlyLeftRecursiveRule = ruleMap[implicitlyLeftRecursiveRuleName],
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
    // const repeatedRule = repeatedRuleFromRule(leftRecursiveRule, ruleMap, RepeatedRule),
    //       repeatedDefinition = definitionUnary ?
    //                              RepeatedDefinition.fromImplicitlyLeftRecursiveDefinition(this.implicitlyLeftRecursiveDefinition) :
    //                                RepeatedDefinition.fromDefinition(definition);
    //
    // repeatedRule.addDefinition(repeatedDefinition);
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
            //
            // const definitionUnary = isDefinitionUnary(definition),
            //       indirectlyLeftRecursiveDefinitionUnary = definitionUnary, ///
            //       implicitlyLeftRecursiveDefinitionUnary = isDefinitionUnary(implicitlyLeftRecursiveDefinition);
            //
            // if (indirectlyLeftRecursiveDefinitionUnary && implicitlyLeftRecursiveDefinitionUnary) {
            //     const definitionString = definition.asString(),
            //           indirectlyLeftRecursiveDefinitionString = definitionString, ///
            //           implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();
            //
            //     throw new Error(`Both the '${indirectlyLeftRecursiveDefinitionString}' indirectly left recursive definition of the '${ruleName}' rule and the corresponding '${implicitlyLeftRecursiveDefinitionString}' implicitly left recursive definition of the '${leftRecursiveRuleName}' rule are unary and therefore neither can be rewritten.`);
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
