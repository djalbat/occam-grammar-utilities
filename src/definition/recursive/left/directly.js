"use strict";

import ReducedRule from "../../../rule/reduced";
import RewrittenRule from "../../../rule/rewritten";
import RewrittenDefinition from "../../../definition/rewritten";
import LeftRecursiveDefinition from "../../../definition/recursive/left";

import { DIRECTLY_LEFT_RECURSIVE_TYPE } from "../../../types";
import { reducedRuleFromRule, rewrittenRuleFromRule } from "../../../utilities/rule";
import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../../utilities/definition";

export default class DirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  rewrite(ruleMap) {
    const unary = this.isUnary(),
          complex = this.isComplex(),
          ruleName = this.getRuleName(),
          definition = this.getDefinition(),
          definitionUnary = unary,  ///
          definitionComplex = complex;  ///

    if (definitionUnary) {
      const definitionString = definition.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
    }

    if (definitionComplex) {
      const definitionString = definition.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
    }

    const rule = ruleMap[ruleName],
          rewrittenRule = rewrittenRuleFromRule(rule, ruleMap, RewrittenRule),
          rewrittenDefinition = RewrittenDefinition.fromDefinition(definition);

    rewrittenRule.replaceDefinition(definition, rewrittenDefinition);

    reducedRuleFromRule(rule, ruleMap, ReducedRule);
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let directlyLeftRecursiveDefinition = null;

    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition);

      leftRecursiveRuleNames.some((leftRecursiveRuleName) => {
        const ruleNameLeftRecursiveRuleName = (ruleName === leftRecursiveRuleName);

        if (ruleNameLeftRecursiveRuleName) {
          const parts = null, ///
                type = DIRECTLY_LEFT_RECURSIVE_TYPE,
                recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

          directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);

          return true;
        }
      });
    }

    return directlyLeftRecursiveDefinition;
  }
}
