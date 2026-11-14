"use strict";

import { Rule } from "occam-parsers";

import DirectlyReducedNode from "../../node/reduced/directly";

import { CYCLE_LENGTH_1 } from "../../constants";
import { directlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";
import { directlyReducedDefinitionsFromDefinitions } from "../../definition/reduced/directly";

export default class DicrectlyReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = DirectlyReducedNode;  ///

    return NonTerminalNode;
  }

  static fromRule(rule, context) {
    let definitions;

    definitions = rule.getDefinitions();

    const directlyReducedDefinitions = directlyReducedDefinitionsFromDefinitions(definitions, context),
          ruleName = rule.getName(),
          directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
          name = directlyReducedRuleName, ///
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
  }

  return directlyReducedRules;
}
