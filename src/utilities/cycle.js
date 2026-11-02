"use strict";

import { arrayUtilities } from "necessary";

import { CYCLE_LENGTH_2 } from "../constants";
import { isDefinitionRepeatable, indirectRuleNameFromDefinition, isDefinitionIndirectlyRepeated } from "../utilities/definition";

const { first, second, push } = arrayUtilities;

export function ruleNameFromCycle(cycle) {
  const ruleNames = ruleNamesFromCycle(cycle),
        firstRuleName = first(ruleNames),
        ruleName = firstRuleName; ///

  return ruleName;
}

export function ruleNamesFromCycle(cycle, ruleNames = []) {
  const vertexes = cycle.getVertexes(),
        cycleRuleNames = vertexes; ///

  push(ruleNames, cycleRuleNames);

  return ruleNames;
}

export function indirectRuleNameFromCycle(cycle) {
  const ruleNames = ruleNamesFromCycle(cycle),
        secondRuleName = second(ruleNames),
        indirectRuleName = secondRuleName; ///

  return indirectRuleName;
}

export function filterDefinitions(definitions, context) {
  const ruleName = context.getRuleName();

  definitions = definitions.filter((definition) => {
    const definitionLeftRepeatable = isDefinitionRepeatable(definition, ruleName, context);

    if (definitionLeftRepeatable) {
      return true;
    }
  });

  const cycleLength = context.getCycleLength();

  if (cycleLength === CYCLE_LENGTH_2) {
    const indirectRuleName = context.getIndirectRuleName(),
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

export function isCycleIndirectlyRepeated(context) {
  let cycleIndirectlyRepeated = false;

  const rule = context.getRule();

  let definitions;

  definitions = rule.getDefinitions();

  definitions = filterDefinitions(definitions, context); ///

  const definitionsIndirectlyRepeated = definitions.every((definition) => {
    const definitionIndirectlyRepeated = isDefinitionIndirectlyRepeated(definition);

    if (definitionIndirectlyRepeated) {
      return true;
    }
  });

  if (definitionsIndirectlyRepeated) {
    cycleIndirectlyRepeated = true;
  }

  return cycleIndirectlyRepeated;
}
