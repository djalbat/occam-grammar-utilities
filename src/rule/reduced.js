"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";
import ReducedDefinition from "../definition/reduced";

import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { ruleNameFromCycle, indirectRuleNameFromCycle } from "../utilities/cycle";

export default class ReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = ReducedNode;  ///

    return NonTerminalNode;
  }

  static fromRuleNameAndCycles(ruleName, cycles, ruleMap) {
    const rule = ruleMap[ruleName];

    let definitions;

    definitions = rule.getDefinitions();

    const reducedDefinitions = filterDefinitions(definitions, ruleName, cycles, ruleMap),
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

  static fromIndirectRuleNameAndCycles(indirectRuleName, cycles, ruleMap) {
    const indirectRule = ruleMap[indirectRuleName];

    let definitions;

    definitions = indirectRule.getDefinitions();

    const ruleName = indirectRuleName,  ///
          reducedDefinitions = filterDefinitions(definitions, ruleName, cycles, ruleMap),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName, ///
          opacity = null;

    definitions = reducedDefinitions; ///

    const reducedRule = new ReducedRule(name, opacity, definitions);

    return reducedRule;
  }
}

export function reducedRulesFromCycleAndCycles(cycle, cycles, ruleMap) {
  const reducedRules = [],
        cycleLength = cycle.getLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const ruleName = ruleNameFromCycle(cycle),
            reducedRule = ReducedRule.fromRuleNameAndCycles(ruleName, cycles, ruleMap);

      reducedRules.push(reducedRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const ruleName = ruleNameFromCycle(cycle),
            reducedRule = ReducedRule.fromRuleNameAndCycles(ruleName, cycles, ruleMap);

      reducedRules.push(reducedRule);

      const indirectRuleName = indirectRuleNameFromCycle(cycle),
            indirectRule = ruleMap[indirectRuleName],
            indirectRuleReducible = isIndirectRuleReducible(indirectRule, cycles, ruleMap);

      if (indirectRuleReducible) {
        const reducedRule = ReducedRule.fromIndirectRuleNameAndCycles(indirectRuleName, cycles, ruleMap);

        reducedRules.push(reducedRule);
      }

      break;
    }
  }

  return reducedRules;
}

function filterDefinitions(definitions, ruleName, cycles, ruleMap) {
  const reducedDefinitions = definitions.reduce((reducedDefinitions, definition) => {
    const reducedDefinition = ReducedDefinition.fromDefinitionRuleNameAndCycles(definition, ruleName, cycles, ruleMap);

    if (reducedDefinition !== null) {
      reducedDefinitions.push(reducedDefinition);
    }

    return reducedDefinitions;
  }, []);

  return reducedDefinitions;
}

function isIndirectRuleReducible(indirectRule, cycles, ruleMap) {
  const indirectRuleName = indirectRule.getName(),
        definitions = indirectRule.getDefinitions(),
        ruleName = indirectRuleName,  ///
        reducedDefinitions = filterDefinitions(definitions, ruleName, cycles, ruleMap),
        reducedDefinitionsLength = reducedDefinitions.length,
        indirectRuleReducible = (reducedDefinitionsLength > 0);

  return indirectRuleReducible;
}