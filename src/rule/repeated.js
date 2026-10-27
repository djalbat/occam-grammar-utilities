"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RepeatedNode from "../node/repeated";
import RepeatedDefinition from "../definition/repeated";
import IntermediateRepeatedDefinition from "../definition/repeated/intermediate";

import { ruleNamesFromCycle } from "../utilities/cycle";
import { isDefinitionRepeatable } from "../utilities/definition";
import { repeatedRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { indirectRuleNameFromDefinition } from "../definition//repeated/intermediate";

const { first, second } = arrayUtilities;

export default class RepeatedRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RepeatedNode; ///

    return NonTerminalNode;
  }

  static fromCycleAndCycles(cycle, cycles, ruleMap) {
    const ruleNames = ruleNamesFromCycle(cycle),
          firstRuleName = first(ruleNames),
          ruleName = firstRuleName, ///
          rule = ruleMap[ruleName],
          cycleLength = cycle.getLength(),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName);

    let definitions;

    switch (cycleLength) {
      case CYCLE_LENGTH_1: {
        const indirectRuleName = firstRuleName,  ///
              repeatedDefinitions = repeatedDefinitionsFromRuleIndirectRuleNameAndCycles(rule, indirectRuleName, cycles, ruleMap);

        definitions = repeatedDefinitions;  ///

        break;
      }

      case CYCLE_LENGTH_2: {
        const secondRuleName = second(ruleNames),
              indirectRuleName = secondRuleName,  ///
              intermediateRepeatedDefinitions = intermediateRepeatedDefinitionsFromRuleIndirectRuleNameAndCycles(rule, indirectRuleName, cycles, ruleMap);

        definitions = intermediateRepeatedDefinitions;  ///

        break;
      }
    }

    const name = repeatedRuleName, ///
          opacity = rule.getOpacity(),
          repeatedRule = new RepeatedRule(name, opacity, definitions);

    return repeatedRule;
  }
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
