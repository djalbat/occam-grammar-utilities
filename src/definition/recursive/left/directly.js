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
          ruleName = this.getRuleName(),
          definition = this.getDefinition();

    if (unary) {
      const definitionString = definition.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
    }

    const rule = ruleMap[ruleName],
          reducedRule = reducedRuleFromRule(rule, ruleMap, ReducedRule),
          rewrittenRule = rewrittenRuleFromRule(rule, ruleMap, RewrittenRule),
          leftRecursiveRuleName = ruleName, ///
          rewrittenDefinition = RewrittenDefinition.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName);

    reducedRule.removeDefinition(definition);

    rewrittenRule.replaceDefinition(definition, rewrittenDefinition);
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let directlyLeftRecursiveDefinition = null;

    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition);

      leftRecursiveRuleNames.some((leftRecursiveRuleName) => {
        const ruleNameLeftRecursiveRuleName = (ruleName === leftRecursiveRuleName);

        if (ruleNameLeftRecursiveRuleName) {
          // const definitionComplex = isDefinitionComplex(definition);
          //
          // if (definitionComplex) {
          //   const definitionString = definition.asString();
          //
          //   throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
          // }

          const parts = [],
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
