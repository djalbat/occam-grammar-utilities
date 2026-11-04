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

  static fromDirectlyRepeatedRule(directlyRepeatedRule, context) {
    const rule = directlyRepeatedRule;  ///

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

  static fromIndirectlyRepeatedRule(indirectlyRepeatedRule, context) {
    const rule = indirectlyRepeatedRule;  ///

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
  const cycleLength = context.getCycleLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const rule = context.getRule(),
            directlyRepeatedRule = rule,  ///
            reducedRule = ReducedRule.fromDirectlyRepeatedRule(directlyRepeatedRule, context);

      reducedRules.push(reducedRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            indirectlyRepeatedRule = rule,  ///
            reducedRule = ReducedRule.fromIndirectlyRepeatedRule(indirectlyRepeatedRule, context);

      reducedRules.push(reducedRule);

      break;
    }
  }

  return reducedRules;
}
