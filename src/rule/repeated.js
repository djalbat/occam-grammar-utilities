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

  static fromRuleNameAndCycles(ruleName, cycles, ruleMap) {
    const rule = ruleMap[ruleName],
          indirectRuleName = ruleName,  ///
          repeatedDefinitions = repeatedDefinitionsFromRuleIndirectRuleNameAndCycles(rule, indirectRuleName, cycles, ruleMap),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity(),
          definitions = repeatedDefinitions,  ///
          repeatedRule = new RepeatedRule(name, opacity, definitions);

    return repeatedRule;
  }

  static fromRuleNameAndIndirectRuleName(ruleName, indirectRuleName, cycles, ruleMap) {
    const rule = ruleMap[ruleName],
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          intermediateRepeatedDefinitions = intermediateRepeatedDefinitionsFromRuleIndirectRuleNameAndCycles(rule, indirectRuleName, cycles, ruleMap),
          name = repeatedRuleName, ///
          opacity = rule.getOpacity(),
          definitions = intermediateRepeatedDefinitions,  ///
          repeatedRule = new RepeatedRule(name, opacity, definitions);

    return repeatedRule;
  }
}

export function repeatedRulesFromCycleAndcycles(cycle, cycles, ruleMap) {
  const repeatedRules = [],
        cycleLength = cycle.getLength(),
        ruleName = ruleNameFromCycle(cycle);

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const repeatedRule = RepeatedRule.fromRuleNameAndCycles(ruleName, cycles, ruleMap);

      repeatedRules.push(repeatedRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const rule = ruleMap[ruleName],
            ruleIndirectlyRepeated = isRuleIndirectlyRepeated(rule, cycle, cycles, ruleMap);

      if (!ruleIndirectlyRepeated) {
        const indirectRuleName = indirectRuleNameFromCycle(cycle),
              repeatedRule = RepeatedRule.fromRuleNameAndIndirectRuleName(ruleName, indirectRuleName, cycles, ruleMap);

        repeatedRules.push(repeatedRule);
      }

      break;
    }
  }

  return repeatedRules;
}

export function repeatedDefinitionsFromRuleIndirectRuleNameAndCycles(rule, indirectRuleName, cycles, ruleMap) {
  const ruleName = rule.getName(),
        ruleNames = [
          ruleName,
          indirectRuleName
        ];

  let definitions;

  definitions = rule.getDefinitions();

  definitions = filterDefinitions(definitions, ruleName, indirectRuleName, cycles, ruleMap);

  const repeatedDefinitions = definitions.map((definition) => {
    const repeatedDefinition = RepeatedDefinition.fromDefinitionAndRuleNames(definition, ruleNames, ruleMap);

    return repeatedDefinition;
  });

  return repeatedDefinitions;
}

export function filterDefinitions(definitions, ruleName, indirectRuleName, cycles, ruleMap) {
  const indirectRuleNameA = indirectRuleName; ///

  definitions = definitions.filter((definition) => {
    const definitionLeftRepeatable = isDefinitionRepeatable(definition, ruleName, cycles, ruleMap);

    if (definitionLeftRepeatable) {
      const indirectRuleName = indirectRuleNameFromDefinition(definition),
            indirectRuleNameB = indirectRuleName; ///

      if (indirectRuleNameA === indirectRuleNameB) {
        return true;
      }
    }
  });

  const definitionsLength = definitions.length;

  if (definitionsLength === 0) {
    const ruleString = ruleName;  ///

    throw new Error(`The '${ruleString}' rule has no repeated definitions.`);
  }

  return definitions;
}

function intermediateRepeatedDefinitionsFromRuleIndirectRuleNameAndCycles(rule, indirectRuleName, cycles, ruleMap) {
  const ruleName = rule.getName();

  let definitions;

  definitions = rule.getDefinitions();

  definitions = filterDefinitions(definitions, ruleName, indirectRuleName, cycles, ruleMap);

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
