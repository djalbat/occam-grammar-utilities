"use strict";

import { Rule } from "occam-parsers";

import RepeatedNode from "../node/repeated";
import RepeatedDefinition from "../definition/repeated";
import IntermediateRepeatedDefinition from "../definition/repeated/intermediate";

import { isDefinitionRepeatable } from "../utilities/definition";
import { isRuleIndirectlyRepeated } from "../rule/repeated/indirectly";
import { repeatedRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { indirectRuleNameFromDefinition } from "../definition//repeated/intermediate";
import { ruleNameFromCycle, indirectRuleNameFromCycle } from "../utilities/cycle";

export default class RepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RepeatedNode; ///

    return NonTerminalNode;
  }

  static fromCycleAndCycles(cycle, cycles, ruleMap) {
    const ruleName = ruleNameFromCycle(cycle),
          rule = ruleMap[ruleName],
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          intermediateRepeatedDefinitions = intermediateRepeatedDefinitionsFromCycleAndCycles(cycle, cycles, ruleMap),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity(),
          definitions = intermediateRepeatedDefinitions,  ///
          repeatedRule = new RepeatedRule(name, opacity, definitions);

    return repeatedRule;
  }

  static fromRuleNameCycleAndCycles(ruleName, cycle, cycles, ruleMap) {
    const repeatedDefinitions = repeatedDefinitionsFromCycleAndCycles(cycle, cycles, ruleMap),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          rule = ruleMap[ruleName],
          name = repeatedRuleName, ///
          opacity = rule.getOpacity(),
          definitions = repeatedDefinitions,  ///
          repeatedRule = new RepeatedRule(name, opacity, definitions);

    return repeatedRule;
  }
}

export function filterDefinitions(definitions, cycle, cycles, ruleMap) {
  const ruleName = ruleNameFromCycle(cycle);

  definitions = definitions.filter((definition) => {
    const definitionLeftRepeatable = isDefinitionRepeatable(definition, ruleName, cycles, ruleMap);

    if (definitionLeftRepeatable) {
      return true;
    }
  });

  const cycleLength = cycle.getLength();

  if (cycleLength === CYCLE_LENGTH_2) {
    const indirectRuleName = indirectRuleNameFromCycle(cycle),
          indirectRuleNameA = indirectRuleName; ///

    definitions = definitions.filter((definition) => {
      const indirectRuleName = indirectRuleNameFromDefinition(definition),
            indirectRuleNameB = indirectRuleName; ///

      if (indirectRuleNameA === indirectRuleNameB) {
        return true;
      }
    });
  }

  const definitionsLength = definitions.length;

  if (definitionsLength === 0) {
    const ruleString = ruleName;  ///

    throw new Error(`The '${ruleString}' rule has no repeated definitions.`);
  }

  return definitions;
}

export function repeatedRulesFromCycleAndcycles(cycle, cycles, ruleMap, repeatedRules = []) {
  const cycleLength = cycle.getLength(),
        ruleName = ruleNameFromCycle(cycle);

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const repeatedRule = RepeatedRule.fromRuleNameCycleAndCycles(ruleName, cycle, cycles, ruleMap);

      repeatedRules.push(repeatedRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const ruleIndirectlyRepeated = isRuleIndirectlyRepeated(cycle, cycles, ruleMap);

      if (!ruleIndirectlyRepeated) {
        const repeatedRule = RepeatedRule.fromCycleAndCycles(cycle, cycles, ruleMap);

        repeatedRules.push(repeatedRule);
      }

      break;
    }
  }

  return repeatedRules;
}

export function repeatedDefinitionsFromCycleAndCycles(cycle, cycles, ruleMap) {
  const ruleName = ruleNameFromCycle(cycle),
        rule = ruleMap[ruleName];

  let definitions;

  definitions = rule.getDefinitions();

  definitions = filterDefinitions(definitions, cycle, cycles, ruleMap); ///

  const repeatedDefinitions = definitions.map((definition) => {
    const repeatedDefinition = RepeatedDefinition.fromDefinitionAndCycle(definition, cycle, ruleMap);

    return repeatedDefinition;
  });

  return repeatedDefinitions;
}

function intermediateRepeatedDefinitionsFromCycleAndCycles(cycle, cycles, ruleMap) {
  const ruleName = ruleNameFromCycle(cycle),
        rule = ruleMap[ruleName];

  let definitions;

  definitions = rule.getDefinitions();

  definitions = filterDefinitions(definitions, cycle, cycles, ruleMap); ///

  definitions = definitions.filter((definition) => {
    const parts = definition.getParts(),
          partsLength = parts.length;

    if (partsLength > 1) {
      return true;
    }
  });

  const definitionsLength = definitions.length,
        intermediateRepeatedDefinitions = definitions.map((definition, index) => {
          const number = index + 1,
                intermediateRepeatedDefinition = (definitionsLength === 1) ?
                                                   IntermediateRepeatedDefinition.fromDefinitionAndRuleName(definition, ruleName, ruleMap) :
                                                     IntermediateRepeatedDefinition.fromDefinitionRuleNameAndNumber(definition, ruleName, number, ruleMap);

          return intermediateRepeatedDefinition;
        });

  return intermediateRepeatedDefinitions;
}
