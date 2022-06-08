"use strict";

import ReducedRule from "../../../rule/reduced";
import RewrittenRule from "../../../rule/rewritten";
import ReducedDefinition from "../../../definition/reduced";
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
          rewrittenDefinition = RewrittenDefinition.fromDefinitionRuleNameAndImplicitlyLeftRecursiveDefinition(definition, ruleName, implicitlyLeftRecursiveDefinition);

    rewrittenRule.replaceDefinition(definition, rewrittenDefinition);

    const implicitRule = ruleMap[implicitRuleName],
          implicitRewrittenRule = rewrittenRuleFromRule(implicitRule, ruleMap, RewrittenRule),  ///
          implicitReducedDefinition = ReducedDefinition.fromRuleName(implicitRuleName); ///

    implicitRewrittenRule.addDefinition(implicitReducedDefinition);

    const reducedRule = reducedRuleFromRule(rule, ruleMap, ReducedRule),
          indirectReducedDefinition = ReducedDefinition.fromDefinition(definition);  ///

    reducedRule.addDefinition(indirectReducedDefinition);

    reducedRuleFromRule(implicitRule, ruleMap, ReducedRule);
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
            const type = INDIRECTLY_LEFT_RECURSIVE_TYPE,
                  parts = definition.getParts(),
                  recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

            indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
          }
        }
      });
    }

    return indirectlyLeftRecursiveDefinition;
  }
}
