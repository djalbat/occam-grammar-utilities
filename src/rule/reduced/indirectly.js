"use strict";

import { Rule } from "occam-parsers";

import IndirectlyReducedNode from "../../node/reduced/indirectly";
import IndirectlyReducedDefinition from "../../definition/reduced/indirectly";

import { CYCLE_LENGTH_2 } from "../../constants";
import { ruleNameFromCycle, indirectRuleNameFromCycle } from "../../utilities/cycle";
import { indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName } from "../../utilities/ruleName";

export default class IndirectlyReducedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyReducedNode;  ///

    return NonTerminalNode;
  }

  static fromCycleAndCycles(cycle, cycles, ruleMap) {
    const indirectRuleName = indirectRuleNameFromCycle(cycle),
          indirectRule = ruleMap[indirectRuleName];

    let definitions;

    definitions = indirectRule.getDefinitions();

    const indirectlyReducedDefinitions = filterDefinitions(definitions, cycle, cycles, ruleMap),
          ruleName = ruleNameFromCycle(cycle),
          indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
          name = indirectlyReducedRuleName, ///
          opacity = null;

    definitions = indirectlyReducedDefinitions; ///

    const indirectlyReducedRule = new IndirectlyReducedRule(name, opacity, definitions);

    return indirectlyReducedRule;
  }
}

export function isIndirectRuleReducible(cycle, cycles, ruleMap) {
  const indirectRuleName = indirectRuleNameFromCycle(cycle),
        indirectRule = ruleMap[indirectRuleName],
        definitions = indirectRule.getDefinitions(),
        indirectlyReducedDefinitions = filterDefinitions(definitions, cycle, cycles, ruleMap),
        indirectlyReducedDefinitionsLength = indirectlyReducedDefinitions.length,
        indirectRuleReducible = (indirectlyReducedDefinitionsLength > 0);

  return indirectRuleReducible;
}

export function indirectlyReducedRulesFromCycleAndCycles(cycle, cycles, ruleMap, indirectlyReducedRules = []) {
  const cycleLength = cycle.getLength();

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const indirectRuleReducible = isIndirectRuleReducible(cycle, cycles, ruleMap);

      if (indirectRuleReducible) {
        const indirectlyReducedRule = IndirectlyReducedRule.fromCycleAndCycles(cycle, cycles, ruleMap);

        indirectlyReducedRules.push(indirectlyReducedRule);
      }

      break;
    }
  }

  return indirectlyReducedRules;
}

function filterDefinitions(definitions, cycle, cycles, ruleMap) {
  const indirectlyReducedDefinitions = definitions.reduce((indirectlyReducedDefinitions, definition) => {
          const indirectlyReducedDefinition = IndirectlyReducedDefinition.fromDefinitionCycleAndCycles(definition, cycle, cycles, ruleMap);

          if (indirectlyReducedDefinition !== null) {
            indirectlyReducedDefinitions.push(indirectlyReducedDefinition);
          }

          return indirectlyReducedDefinitions;
        }, []);

  return indirectlyReducedDefinitions;
}