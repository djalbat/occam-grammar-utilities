"use strict";

import { arrayUtilities } from "necessary";

import { rewriteRuleNameParts } from "../utilities/rewrite";
import { INDIFFERENT_MATCH_METHOD } from "../constants";
import { leftRecursiveCyclesFromCycles } from "../utilities/cycle";
import { edgeFromRuleNameAndRecursiveRuleName } from "../utilities/graph";
import { leftRecursiveRuleNamesFromDefinition } from "../utilities/leftRecursion";
import { rightRecursiveRuleNamesFromDefinition } from "../utilities/rightRecursion";

const { first, tail } = arrayUtilities;

export function partsfromDefinition(definition, context) {
  let parts;

  const ruleNames = context.getRuleNames();

  parts = definition.getParts();

  parts = rewriteRuleNameParts(parts, ruleNames); ///

  return parts;
}

export function tailPartsfromDefinition(definition, context) {
  let tailParts;

  const parts = definition.getParts(),
        ruleNames = context.getRuleNames();

  tailParts = tail(parts);

  tailParts = rewriteRuleNameParts(tailParts, ruleNames); ///

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

export function isDefinitionSingular(definition, ruleName, context) {
  let definitionSingular = false;

  const ruleMap = context.getRuleMap(),
        leftRecursiveCycle = context.getLeftRecursiveCycle(),
        definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName, leftRecursiveCycle, ruleMap);

  if (definitionLeftRecursive) {
    const parts = definition.getParts(),
          firstPart = first(parts),
          firstPartRuleNamePart = firstPart.isRuleNamePart();

    if (!firstPartRuleNamePart) {
      const firstPartString = firstPart.asString(),
            definitionString = definition.asString();

      throw new Error(`The '${firstPartString}' first part of the '${definitionString}' definition is not a rule name part.`);
    }

    const partsLength = parts.length;

    if (partsLength === 1) {
      definitionSingular = true;
    }
  }

  return definitionSingular;
}

export function isDefinitionReducible(definition, ruleName, context) {
  const ruleMap = context.getRuleMap(),
        leftRecursiveCycles = context.getLeftRecursiveCycles(),
        definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName, leftRecursiveCycles, ruleMap),
        definitionReducible = !definitionLeftRecursive;

  return definitionReducible;
}

export function isDefinitionRepeatable(definition, ruleName, context) {
  let definitionRepeatable = false;

  const ruleMap = context.getRuleMap(),
        leftRecursiveCycle = context.getLeftRecursiveCycle(),
        definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName, leftRecursiveCycle, ruleMap);

  if (definitionLeftRecursive) {
    const parts = definition.getParts(),
          firstPart = first(parts),
          firstPartRuleNamePart = firstPart.isRuleNamePart();

    if (!firstPartRuleNamePart) {
      const firstPartString = firstPart.asString(),
            definitionString = definition.asString();

      throw new Error(`The '${firstPartString}' first part of the '${definitionString}' definition is not a rule name part.`);
    }

    const partsLength = parts.length;

    if (partsLength > 1) {
      definitionRepeatable = true;
    }
  }

  return definitionRepeatable;
}

export function isDefinitionRightRecursive(definition, ruleName, context) {
  const ruleMap = context.getRuleMap(),
        rightRecursiveCycles = context.getRightRecursiveCycles(),
        rightRecursiveRuleNames = rightRecursiveRuleNamesFromDefinition(definition, ruleMap),
        recursiveRuleNames = rightRecursiveRuleNames, ///
        cycles = rightRecursiveCycles,  ///
        edges = edgesFromRuleNameAndRecursiveRuleNames(ruleName, recursiveRuleNames),
        edgesMatchCycles = matchEdgesAndCycles(edges, cycles),
        definitionRightRecursive = edgesMatchCycles; ///

  return definitionRightRecursive;
}

export default {
  partsfromDefinition,
  tailPartsfromDefinition,
  ruleNameFromRepeatableDefinition,
  isDefinitionConsuming,
  isDefinitionSingular,
  isDefinitionReducible,
  isDefinitionRepeatable
};

function isDefinitionLeftRecursive(definition, ruleName, leftRecursiveCycleOrCycles, ruleMap) {
  const leftRecursiveCycles = guaranteeCycles(leftRecursiveCycleOrCycles),
        leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition, ruleMap),
        recursiveRuleNames = leftRecursiveRuleNames,  ///
        cycles = leftRecursiveCycles, ///
        edges = edgesFromRuleNameAndRecursiveRuleNames(ruleName, recursiveRuleNames),
        edgesMatchCycles = matchEdgesAndCycles(edges, cycles),
        definitionLeftRecursive = edgesMatchCycles; ///

  return definitionLeftRecursive;
}

function guaranteeCycles(cycleOrCycles) {
  const cycles = Array.isArray(cycleOrCycles) ?
                   cycleOrCycles :
                     [cycleOrCycles];

  return cycles;
}

function matchEdgesAndCycles(edges, cycles) {
  const matchMethod = INDIFFERENT_MATCH_METHOD,
        edgesMatchCycles = cycles.some((cycle) => {
          const edgesMatchCycle = edges.some((edge) => {
            const edgeMatchesCycle = cycle.matchEdge(edge, matchMethod);

            if (edgeMatchesCycle) {
              return true;
            }
          });

          if (edgesMatchCycle) {
            return true;
          }
        });

  return edgesMatchCycles;
}

function edgesFromRuleNameAndRecursiveRuleNames(ruleName, recursiveRuleNames) {
  const edges = recursiveRuleNames.map((recursiveRuleName) => {
    const edge = edgeFromRuleNameAndRecursiveRuleName(ruleName, recursiveRuleName);

    return edge;
  });

  return edges;
}
