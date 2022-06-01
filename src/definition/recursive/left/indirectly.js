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
          complex = this.isComplex(),
          ruleName = this.getRuleName(),
          definition = this.getDefinition(),
          definitionUnary = unary,  ///
          definitionComplex = complex,  ///
          implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
          implicitDefinition = implicitlyLeftRecursiveDefinition, ///
          implicitDefinitionUnary = implicitDefinition.isUnary(),
          implicitDefinitionRuleName = implicitDefinition.getRuleName(),
          implicitRuleName = implicitDefinitionRuleName;  ///

    if (definitionUnary && implicitDefinitionUnary) {
      const definitionString = definition.asString();

      throw new Error(`Both the '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule and the corresponding implicitly left recursive definition of the '${implicitRuleName}' rule are unary and therefore the former cannot be rewritten.`);
    }

    if (definitionComplex) {
      const definitionString = definition.asString();

      throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
    }

    const rule = ruleMap[ruleName],
          rewrittenRule = rewrittenRuleFromRule(rule, ruleMap, RewrittenRule),
          rewrittenDefinition = RewrittenDefinition.fromDefinitionAndImplicitlyLeftRecursiveDefinition(definition, implicitlyLeftRecursiveDefinition);

    rewrittenRule.replaceDefinition(definition, rewrittenDefinition);

    const implicitRule = ruleMap[implicitRuleName];

    reducedRuleFromRule(rule, ruleMap, ReducedRule);

    reducedRuleFromRule(implicitRule, ruleMap, ReducedRule);

    rewrittenRuleFromRule(implicitRule, ruleMap, RewrittenRule);
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
            const parts = null, ///
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