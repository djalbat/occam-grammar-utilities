"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RepeatedNode from "../node/repeated";
import RepeatedDefinition from "../definition/repeated";

import { ruleNamesFromCycle } from "../utilities/cycle";
import { isDefinitionRepeatable } from "../utilities/definition";
import { repeatedRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";

const { first, second, compress } = arrayUtilities;

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
              indirectRuleName = secondRuleName;

        debugger

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
  definitions = definitions.filter((definition) => {
    const definitionLeftRepeatable = isDefinitionRepeatable(definition, ruleName, cycles, ruleMap);

    if (definitionLeftRepeatable) {
      const ruleName = ruleNameFromDefinition(definition);

      if (ruleName === indirectRuleName) {
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
function ruleNameFromDefinition(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        ruleNamePart = firstPart, ///
        ruleName = ruleNamePart.getRuleName();

  return ruleName;
}
