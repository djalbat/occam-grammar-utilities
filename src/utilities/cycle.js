"use strict";

import { arrayUtilities } from "necessary";

import { CYCLE_LENGTH_2 } from "../constants";
import { isDefinitionDirectlyRepeatable, indirectRuleNameFromDefinition, isDefinitionIndirectlyReducible } from "../utilities/definition";

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
  definitions = definitions.filter((definition) => {
    const definitionDirectlyRepeatable = isDefinitionDirectlyRepeatable(definition, context);

    if (definitionDirectlyRepeatable) {
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
    const ruleName = context.getRuleName(),
          ruleString = ruleName;  ///

    throw new Error(`The '${ruleString}' rule has no repeated definitions.`);
  }

  return definitions;
}

export function isCycleIndirectlyReducible(context) {
  const indirectRule = context.getIndirectRule(),
        definitions = indirectRule.getDefinitions(),
        cycleIndirectlyReducible = definitions.some((definition) => {
          const definitionIndirectlyReducible = isDefinitionIndirectlyReducible(definition, context);

          if (definitionIndirectlyReducible) {
            return true;
          }
        });

  return cycleIndirectlyReducible;
}

export function isCycleIndirectlyRepeatable(context) {
  let cycleIndirectlyRepeatable = false;

  const rule = context.getRule();

  let definitions;

  definitions = rule.getDefinitions();

  definitions = filterDefinitions(definitions, context); ///

  const definitionsIndirectlyRepeatable = definitions.every((definition) => {
    const parts = definition.getParts(),
          partsLength = parts.length,
          definitionIndirectlyRepeatable = (partsLength === 1);

    if (definitionIndirectlyRepeatable) {
      return true;
    }
  });

  if (definitionsIndirectlyRepeatable) {
    cycleIndirectlyRepeatable = true;
  }

  return cycleIndirectlyRepeatable;
}
