"use strict";

import { arrayUtilities } from "necessary";

import { edgesMatchEdge } from "../edge";
import { ruleNamesFromCycle } from "../utilities/cycle";
import { leftRecursiveRuleNamesFromDefinition } from "../utilities/leftRecursion";
import { edgesFromRuleNames, edgeFromRuleNameAndLeftRecursiveRuleName } from "../utilities/edge";

const { first } = arrayUtilities;

export function isDefinitionReducible(definition, ruleName, cycles, ruleMap) {
  const leftRecursiveRuleNames = [];

  leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

  const definitionReducible = leftRecursiveRuleNames.every((leftRecursiveRuleName) => {
    const cyclesIncludeRuleNameAndLeftRecursiveRuleName = cycles.some((cycle) => {
      const cycleIncludesRuleNameAndLeftRecursiveRuleName = doesCycleIncludeRuleNameAndLeftRecursiveRuleName(cycle, ruleName, leftRecursiveRuleName);

      if (cycleIncludesRuleNameAndLeftRecursiveRuleName) {
        return true;
      }
    });

    if (!cyclesIncludeRuleNameAndLeftRecursiveRuleName) {
      return true;
    }
  });

  return definitionReducible;
}

export function isDefinitionRepeatable(definition, ruleName, cycles, ruleMap) {
  const definitionReducible = isDefinitionReducible(definition, ruleName, cycles, ruleMap),
        definitionRepeatable = !definitionReducible;

  if (definitionRepeatable) {
    const parts = definition.getParts(),
          firstPart = first(parts),
          firstPartRuleNamePart = firstPart.isRuleNamePart();

    if (!firstPartRuleNamePart) {
      const firstPartString = firstPart.asString(),
            definitionString = definition.asString();

      throw new Error(`The '${firstPartString}' first part of the '${definitionString}' definition is not a rule name part.`);
    }
  }

  return definitionRepeatable;
}

function doesCycleIncludeRuleNameAndLeftRecursiveRuleName(cycle, ruleName, leftRecursiveRuleName) {
  const ruleNames = ruleNamesFromCycle(cycle),
        edge = edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
        edges = edgesFromRuleNames(ruleNames),
        matches = edgesMatchEdge(edges, edge),
        cycleIncludesRuleNameAndLeftRecursiveRuleName = matches;  ///

  return cycleIncludesRuleNameAndLeftRecursiveRuleName;
}
