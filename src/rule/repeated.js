"use strict";

import { Rule } from "occam-parsers";

import RepeatedNode from "../node/repeated";
import RepeatedDefinition from "../definition/repeated";
import IntermediateRepeatedDefinition from "../definition/repeated/intermediate";

import { isDefinitionRepeatable } from "../utilities/definition";
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
    let repeatedRule = null;

    const ruleName = ruleNameFromCycle(cycle),
          rule = ruleMap[ruleName],
          cycleLength = cycle.getLength(),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName);

    let definitions;

    switch (cycleLength) {
      case CYCLE_LENGTH_1: {
        const indirectRuleName = ruleName,  ///
              repeatedDefinitions = repeatedDefinitionsFromRuleIndirectRuleNameAndCycles(rule, indirectRuleName, cycles, ruleMap);

        definitions = repeatedDefinitions;  ///

        break;
      }

      case CYCLE_LENGTH_2: {
        const indirectRuleName = indirectRuleNameFromCycle(cycle),
              intermediateRepeatedDefinitions = intermediateRepeatedDefinitionsFromRuleIndirectRuleNameAndCycles(rule, indirectRuleName, cycles, ruleMap);

        definitions = intermediateRepeatedDefinitions;  ///

        break;
      }
    }

    const definitionsLength = definitions.length;

    if (definitionsLength >0) {
      const name = repeatedRuleName, ///
            opacity = rule.getOpacity();

      repeatedRule = new RepeatedRule(name, opacity, definitions);
    }

    return repeatedRule;
  }
}

export function repeatedRulesFromCycleAndcycles(cycle, cycles, ruleMap) {
  const repeatedRules = [],
        repeatedRule = RepeatedRule.fromCycleAndCycles(cycle, cycles, ruleMap);

  if (repeatedRule !== null) {
    repeatedRules.push(repeatedRule);
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
