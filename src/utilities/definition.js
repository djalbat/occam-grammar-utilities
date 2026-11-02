"use strict";

import { arrayUtilities } from "necessary";

import { edgesMatchEdge } from "../edge";
import { ruleNamesFromCycle } from "../utilities/cycle";
import { rewriteRuleNameParts } from "../utilities/rewrite";
import { leftRecursiveRuleNamesFromDefinition } from "../utilities/leftRecursion";
import { edgesFromRuleNames, edgeFromRuleNameAndLeftRecursiveRuleName } from "../utilities/edge";

const { first, tail } = arrayUtilities;

export function partsfromDefinition(definition, context) {
  let parts;

  const cycle = context.getCycle();

  parts = definition.getParts();

  parts = rewriteRuleNameParts(parts, cycle); ///

  return parts;
}

export function tailPartsfromDefinition(definition, context) {
  let tailParts;

  const cycle = context.getCycle(),
        parts = definition.getParts();

  tailParts = tail(parts);

  tailParts = rewriteRuleNameParts(tailParts, cycle); ///

  return tailParts;
}

export function isDefinitionConsuming(definition, ruleMap) {
  const visitedRules = [],
        checkForCutParts = true;

  definition.isConsuming(ruleMap, visitedRules, checkForCutParts);
}

export function isDefinitionReducible(definition, ruleName, context) {
  const leftRecursiveRuleNames = [],
        ruleMap = context.getRuleMap(),
        cycles = context.getCycles();

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

export function isDefinitionRepeatable(definition, ruleName, context) {
  const definitionReducible = isDefinitionReducible(definition, ruleName, context),
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

export function indirectRuleNameFromDefinition(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        indirectRuleNamePart = firstPart, ///
        indirectRuleName = indirectRuleNamePart.getRuleName();

  return indirectRuleName;
}

export function isDefinitionIndirectlyRepeated(definition) {
  const parts = definition.getParts(),
        partsLength = parts.length,
        definitionIndirectlyRepeated = (partsLength === 1);

  return definitionIndirectlyRepeated;
}

export function isDefinitionIndirectlyReducible(definition, context) {
  const indirectRuleName = context.getIndirectRuleName(),
        ruleName = indirectRuleName,  ///
        definitionReducible = isDefinitionReducible(definition, ruleName, context),
        definitionIndirectlyReducible = definitionReducible;  ///

  return definitionIndirectlyReducible;
}

export function isDefinitionIndirectlyRepeatable(definition, indirectRuleName, context) {
  const ruleName = indirectRuleName,  ///
        definitionReducible = isDefinitionReducible(definition, ruleName, context),
        definitionIndirectlyRepeatable = !definitionReducible;

  if (definitionIndirectlyRepeatable) {
    const parts = definition.getParts(),
          firstPart = first(parts),
          firstPartRuleNamePart = firstPart.isRuleNamePart();

    if (!firstPartRuleNamePart) {
      const firstPartString = firstPart.asString(),
            definitionString = definition.asString();

      throw new Error(`The '${firstPartString}' first part of the '${definitionString}' definition is not a rule name part.`);
    }
  }

  return definitionIndirectlyRepeatable;
}

function doesCycleIncludeRuleNameAndLeftRecursiveRuleName(cycle, ruleName, leftRecursiveRuleName) {
  const ruleNames = ruleNamesFromCycle(cycle),
        edge = edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
        edges = edgesFromRuleNames(ruleNames),
        matches = edgesMatchEdge(edges, edge),
        cycleIncludesRuleNameAndLeftRecursiveRuleName = matches;  ///

  return cycleIncludesRuleNameAndLeftRecursiveRuleName;
}
