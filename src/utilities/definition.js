"use strict";

import { first, tail } from "../utilities/array";
import { edgesMatchEdge } from "../edge";
import { ruleNamesFromCycle } from "../utilities/cycle";
import { leftRecursiveRuleNamesFromDefinition } from "../utilities/leftRecursion";
import { edgesFromRuleNames, edgeFromRuleNameAndLeftRecursiveRuleName } from "../utilities/edge";

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

    const ruleNamePart = firstPart, ///
          ruleNamePartRuleName = ruleNamePart.getRuleName();

    if (ruleNamePartRuleName !== ruleName) {
      const definitionString = definition.asString();

      throw new Error(`The '${ruleNamePartRuleName}' rule name of the '${definitionString}' definition's first part is not '${ruleName}'.`);
    }

    const tailParts = tail(parts),
          tailPartsLength = tailParts.length;

    if (tailPartsLength === 0) {
      const definitionString = definition.asString();

      throw new Error(`The '${definitionString}' definition has no tail parts.`);
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
