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

export function ruleNameFromRepeatableDefinition(repeatableDefinition) {
  const parts = repeatableDefinition.getParts(),
        firstPart = first(parts),
        ruleNamePart = firstPart, ///
        ruleName = ruleNamePart.getRuleName();

  return ruleName;
}

export function isDefinitionConsuming(definition, context) {
  const ruleMap = context.getRuleMap(),
        visitedRules = [],
        checkForCutParts = true;

  definition.isConsuming(ruleMap, visitedRules, checkForCutParts);
}

export function isDefinitionDirectlyReducible(definition, context) {
  const ruleName = context.getRuleName(),
        definitionReducible = isDefinitionReducible(definition, ruleName, context),
        definitionDirectlyReducible = definitionReducible;  ///

  return definitionDirectlyReducible;
}

export function isDefinitionDirectlyRepeatable(definition, context) {
  const ruleName = context.getRuleName(),
        definitionRepeatable = isDefinitionRepeatable(definition, ruleName, context),
        definitionDirectlyRepeatable = definitionRepeatable;

  return definitionDirectlyRepeatable;
}

export function isDefinitionIndirectlyReducible(definition, context) {
  const indirectRuleName = context.getIndirectRuleName(),
        ruleName = indirectRuleName,  ///
        definitionReducible = isDefinitionReducible(definition, ruleName, context),
        definitionIndirectlyReducible = definitionReducible;  ///

  return definitionIndirectlyReducible;
}

export function isDefinitionIndirectlyRepeatable(definition, context) {
  const indirectRuleName = context.getIndirectRuleName(),
        ruleName = indirectRuleName,  ///
        definitionRepeatable = isDefinitionRepeatable(definition, ruleName, context),
        definitionIndirectlyRepeatable = definitionRepeatable;

  return definitionIndirectlyRepeatable;
}

function isDefinitionReducible(definition, ruleName, context) {
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

function isDefinitionRepeatable(definition, ruleName, context) {
  const leftRecursiveRuleNames = [],
        ruleMap = context.getRuleMap(),
        cycle = context.getCycle();

  leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

  const definitionRepeatable = leftRecursiveRuleNames.some((leftRecursiveRuleName) => {
    const cycleIncludesRuleNameAndLeftRecursiveRuleName = doesCycleIncludeRuleNameAndLeftRecursiveRuleName(cycle, ruleName, leftRecursiveRuleName);

    if (cycleIncludesRuleNameAndLeftRecursiveRuleName) {
      return true;
    }
  });

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
