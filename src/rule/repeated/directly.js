"use strict";

import { Rule } from "occam-parsers";

import DirectlyRepeatedNode from "../../node/repeated/directly";
import IndirectlyRepeatedRule from "../../rule/repeated/indirectly";

import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../../constants";
import { directlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";
import { directlyRepeatedDefinitionsFromDefinitionsAndRuleName } from "../../definition/repeated/directly";

export default class DirectlyRepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = DirectlyRepeatedNode; ///

    return NonTerminalNode;
  }

  static fromRule(rule, context) {
    const ruleName = rule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    const directlyRepeatedDefinitions = directlyRepeatedDefinitionsFromDefinitionsAndRuleName(definitions, ruleName, context),
          directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          name = directlyRepeatedRuleName, ///
          opacity = rule.getOpacity();

    definitions = directlyRepeatedDefinitions;  ///

    const directlyRepeatedRule = new DirectlyRepeatedRule(name, opacity, definitions);

    return directlyRepeatedRule;
  }
}

export function directlyRepeatedRulesFromCycleAndCycles(context, directlyRepeatedRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            directlyRepeatedRule = DirectlyRepeatedRule.fromRule(rule, context);

      directlyRepeatedRules.push(directlyRepeatedRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRule(rule, context),
            directlyRepeatedRule = indirectlyRepeatedRule;  ///

      directlyRepeatedRules.push(directlyRepeatedRule);

      break;
    }
  }

  return directlyRepeatedRules;
}
