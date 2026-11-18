"use strict";

import { Rule } from "occam-parsers";

import RepeatedNode from "../../node/repeated";

import { CYCLE_LENGTH_1 } from "../../constants";
import { repeatedRuleNameFromRuleName } from "../../utilities/ruleName";
import { directlyRepeatedDefinitionsFromDefinitionsAndRuleName } from "../../definition/repeated/directly";

export default class DirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RepeatedNode; ///

    return NonTerminalNode;
  }

  static fromRule(rule, context) {
    const ruleName = rule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    const directlyRepeatedDefinitions = directlyRepeatedDefinitionsFromDefinitionsAndRuleName(definitions, ruleName, context),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity();

    definitions = directlyRepeatedDefinitions;  ///

    const directlyRepeatedRule = new DirectlyRepeatedRule(name, opacity, definitions);

    return directlyRepeatedRule;
  }
}

export function directlyRepeatedRulesFromCycleAndCycles(context, directlyRepeatedRules = []) {
  const leftRecursiveCycleLength = context.getLeftRecursiveCycleLength();

  switch (leftRecursiveCycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            directlyRepeatedRule = DirectlyRepeatedRule.fromRule(rule, context);

      directlyRepeatedRules.push(directlyRepeatedRule);

      break;
    }
  }

  return directlyRepeatedRules;
}
