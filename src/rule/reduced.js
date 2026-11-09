"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";
import RewrittenDefinition from "../definition/rewritten";

import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { reducedDefinitionsFromDefinitions } from "../definition/reduced";

export default class ReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReducedNode;  ///

    return NonTerminalNode;
  }

  rewriteRuleNameParts(ruleNames, context) {
    let definitions;

    definitions = this.getDefinitions();

    definitions = definitions.map((definition) => { ///
      const rewrittenDefinition = RewrittenDefinition.fromDefinitionAndRuleNames(definition, ruleNames, context);

      definition = rewrittenDefinition; ///

      return definition;
    });

    this.setDefinitions(definitions);
  }

  static fromRule(rule, context) {
    let definitions;

    definitions = rule.getDefinitions();

    const reducedDefinitions = reducedDefinitionsFromDefinitions(definitions, context),
          ruleName = rule.getName(),
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
            reducedRule = ReducedRule.fromRule(rule, context);

      reducedRules.push(reducedRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const rule = context.getRule(),
            reducedRule = ReducedRule.fromRule(rule, context);

      reducedRules.push(reducedRule);

      break;
    }
  }

  return reducedRules;
}
