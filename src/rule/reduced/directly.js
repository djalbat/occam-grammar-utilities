"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../../node/reduced";

import { reducedRuleNameFromRuleName } from "../../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../../constants";
import { directlyReducedDefinitionsFromDefinitions } from "../../definition/reduced/directly";

export default class DicrectlyReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReducedNode;  ///

    return NonTerminalNode;
  }

  static fromRule(rule, context) {
    let definitions;

    definitions = rule.getDefinitions();

    const directlyReducedDefinitions = directlyReducedDefinitionsFromDefinitions(definitions, context),
          ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName, ///
          opacity = rule.getOpacity();

    definitions = directlyReducedDefinitions; ///

    const reducedRule = new DicrectlyReducedRule(name, opacity, definitions);

    return reducedRule;
  }
}

export function directlyReducedRulesFromCycleAndCycles(context, directlyReducedRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            directlyReducedRule = DicrectlyReducedRule.fromRule(rule, context);

      directlyReducedRules.push(directlyReducedRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            directlyReducedRule = DicrectlyReducedRule.fromRule(rule, context);

      directlyReducedRules.push(directlyReducedRule);

      break;
    }
  }

  return directlyReducedRules;
}
