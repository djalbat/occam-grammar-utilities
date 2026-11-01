"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";
import ReducedDefinition from "../definition/reduced";

import { ruleNameFromCycle } from "../utilities/cycle";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";

export default class ReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReducedNode;  ///

    return NonTerminalNode;
  }

  static fromCycleAndCycles(cycle, cycles, ruleMap) {
    const ruleName = ruleNameFromCycle(cycle),
          rule = ruleMap[ruleName];

    let definitions;

    definitions = rule.getDefinitions();

    const reducedDefinitions = filterDefinitions(definitions, cycle, cycles, ruleMap),
          reducedDefinitionsLength = reducedDefinitions.length;

    if (reducedDefinitionsLength === 0) {
      const ruleString = rule.asString();

      throw new Error(`The '${ruleString}' rule has no reduced definitions.`);
    }

    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName, ///
          opacity = null;

    definitions = reducedDefinitions; ///

    const reducedRule = new ReducedRule(name, opacity, definitions);

    return reducedRule;
  }

  static fromRuleNameCycleAndCycles(ruleName, cycle, cycles, ruleMap) {
    const rule = ruleMap[ruleName];

    let definitions;

    definitions = rule.getDefinitions();

    const reducedDefinitions = filterDefinitions(definitions, cycle, cycles, ruleMap),
          reducedDefinitionsLength = reducedDefinitions.length;

    if (reducedDefinitionsLength === 0) {
      const ruleString = rule.asString();

      throw new Error(`The '${ruleString}' rule has no reduced definitions.`);
    }

    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName, ///
          opacity = null;

    definitions = reducedDefinitions; ///

    const reducedRule = new ReducedRule(name, opacity, definitions);

    return reducedRule;
  }
}

export function reducedRulesFromCycleAndCycles(cycle, cycles, ruleMap, reducedRules = []) {
  const cycleLength = cycle.getLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const ruleName = ruleNameFromCycle(cycle),
            reducedRule = ReducedRule.fromRuleNameCycleAndCycles(ruleName, cycle, cycles, ruleMap);

      reducedRules.push(reducedRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const reducedRule = ReducedRule.fromCycleAndCycles(cycle, cycles, ruleMap);

      reducedRules.push(reducedRule);

      break;
    }
  }

  return reducedRules;
}

function filterDefinitions(definitions, cycle, cycles, ruleMap) {
  const reducedDefinitions = definitions.reduce((reducedDefinitions, definition) => {
    const reducedDefinition = ReducedDefinition.fromDefinitionCycleAndCycles(definition, cycle, cycles, ruleMap);

    if (reducedDefinition !== null) {
      reducedDefinitions.push(reducedDefinition);
    }

    return reducedDefinitions;
  }, []);

  return reducedDefinitions;
}
