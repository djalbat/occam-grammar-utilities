"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";

import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { reducedDefinitionsFromDefinitions } from "../definition/reduced";

export default class ReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReducedNode;  ///

    return NonTerminalNode;
  }

  static fromDirectlyReducedDirectCycle(directlyReducedDirectCycle, context) {
    const rule = context.getRule();

    let definitions;

    definitions = rule.getDefinitions();

    const reducedDefinitions = reducedDefinitionsFromDefinitions(definitions, context),
          reducedDefinitionsLength = reducedDefinitions.length;

    if (reducedDefinitionsLength === 0) {
      const ruleString = rule.asString();

      throw new Error(`The '${ruleString}' rule has no reduced definitions.`);
    }

    const ruleName = context.getRuleName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName, ///
          opacity = null;

    definitions = reducedDefinitions; ///

    const reducedRule = new ReducedRule(name, opacity, definitions);

    return reducedRule;
  }

  static fromDirectlyReducedIndirectCycle(directlyReducedIndirectCycle, context) {
    const rule = context.getRule();

    let definitions;

    definitions = rule.getDefinitions();

    const reducedDefinitions = reducedDefinitionsFromDefinitions(definitions, context),
          reducedDefinitionsLength = reducedDefinitions.length;

    if (reducedDefinitionsLength === 0) {
      const ruleString = rule.asString();

      throw new Error(`The '${ruleString}' rule has no reduced definitions.`);
    }

    const ruleName = context.getRuleName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName, ///
          opacity = null;

    definitions = reducedDefinitions; ///

    const reducedRule = new ReducedRule(name, opacity, definitions);

    return reducedRule;
  }
}

export function reducedRulesFromCycleAndCycles(context, reducedRules = []) {
  const cycle = context.getCycle(),
        cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const directlyReducedDirectCycle = cycle,  ///
            reducedRule = ReducedRule.fromDirectlyReducedDirectCycle(directlyReducedDirectCycle, context);

      reducedRules.push(reducedRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const directlyReducedIndirectCycle = cycle,  ///
            reducedRule = ReducedRule.fromDirectlyReducedIndirectCycle(directlyReducedIndirectCycle, context);

      reducedRules.push(reducedRule);

      break;
    }
  }

  return reducedRules;
}
