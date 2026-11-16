"use strict";

import { Rule } from "occam-parsers";

import IntermediateNode from "../node/intermediate";

import { CYCLE_LENGTH_2 } from "../constants";
import { intermediateRuleNameFromRuleName } from "../utilities/ruleName";
import { intermediateDefinitionsFromDefinitions } from "../definition/intermediate";

export default class IntermediateRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IntermediateNode; ///

    return NonTerminalNode;
  }

  static fromRule(rule, context) {
    const ruleName = rule.getName();

    let definitions;

    definitions = rule.getDefinitions();

    const intermediateDefinitions = intermediateDefinitionsFromDefinitions(definitions, context),
          intermediateRuleName = intermediateRuleNameFromRuleName(ruleName),
          name = intermediateRuleName, ///
          opacity = rule.getOpacity();

    definitions = intermediateDefinitions;  ///

    const intermediateRule = new IntermediateRule(name, opacity, definitions);

    return intermediateRule;
  }
}

export function intermediateRulesFromCycleAndCycles(context, intermediateRules = []) {
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectRule = context.getIndirectRule(),
            intermediateRule = IntermediateRule.fromIndirectRuleAndRule(indirectRule, rule, context);

      intermediateRules.push(intermediateRule);

      break;
    }
  }

  return intermediateRules;
}
