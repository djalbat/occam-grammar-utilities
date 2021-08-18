"use strict";

import ReducedRule from "../../rule/reduced";
import RepeatedRule from "../../rule/repeated";
import RewrittenRule from "../../rule/rewritten";
import RepeatedDefinition from "../../definition/repeated";
import RewrittenDefinition from "../../definition/rewritten";
import LeftRecursiveDefinition from "../../definition/leftRecursive";

import { DIRECTLY_LEFT_RECURSIVE_TYPE } from "../../types";
import { reducedRuleFromRule, repeatedRuleFromRule, rewrittenRuleFromRule } from "../../utilities/rule";
import { isDefinitionUnary, isDefinitionComplex, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

export default class DirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  rewrite(ruleMap) {
    const definition = this.getDefinition(),
          ruleName = this.getRuleName(),
          rule = ruleMap[ruleName] || null;

    const reducedRule = reducedRuleFromRule(rule, ruleMap, ReducedRule),
          reducedRuleEmpty = reducedRule.isEmpty();

    if (reducedRuleEmpty) {
      const definitionString = definition.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule has no sibling non-left recursive definitions and therefore cannot be rewritten.`);
    }

    const leftRecursiveRuleName = ruleName; ///

    const repeatedRule = repeatedRuleFromRule(rule, ruleMap, RepeatedRule),
          repeatedDefinition = RepeatedDefinition.fromDefinition(definition);

    repeatedRule.addDefinition(repeatedDefinition);

    const rewrittenRule = rewrittenRuleFromRule(rule, ruleMap, RewrittenRule),
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

          const type = DIRECTLY_LEFT_RECURSIVE_TYPE,
                parts = [],
                recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

          directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);

          return true;
        }
      });
    }

    return directlyLeftRecursiveDefinition;
  }
}
