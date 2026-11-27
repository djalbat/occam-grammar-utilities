"use strict";

import { arrayUtilities } from "necessary";

import { isPartRuleNamePart } from "../utilities/part";
import { rewriteRuleNameParts } from "../utilities/rewrite";
import { INDIFFERENT_MATCH_METHOD } from "../constants";
import { leftRecursiveRuleNamesFromDefinition } from "../utilities/leftRecursion";
import { rightRecursiveRuleNamesFromDefinition } from "../utilities/rightRecursion";
import { edgesFromRuleNameAndRecursiveRuleNames } from "../utilities/graph";

const { first, last, tail } = arrayUtilities;

export function partsfromDefinition(definition, context) {
  let parts;

  const recursiveRuleNames = context.getRecursiveRuleNames(),
        ruleNames = recursiveRuleNames; ///

  parts = definition.getParts();

  parts = rewriteRuleNameParts(parts, ruleNames); ///

  return parts;
}

export function tailPartsfromDefinition(definition, context) {
  let tailParts;

  const recursiveRuleNames = context.getRecursiveRuleNames(),
        ruleNames = recursiveRuleNames, ///
        parts = definition.getParts();

  tailParts = tail(parts);

  tailParts = rewriteRuleNameParts(tailParts, ruleNames); ///

  return tailParts;
}

export function isDefinitionSingular(definition, ruleName, context) {
  let definitionSingular = false;

  const leftRecursiveCycle = context.getLeftRecursiveCycle(),
        definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName, leftRecursiveCycle, context);

  if (definitionLeftRecursive) {
    const parts = definition.getParts(),
          partsLength = parts.length;

    if (partsLength === 1) {
      definitionSingular = true;
    }
  }

  return definitionSingular;
}

export function isDefinitionReducible(definition, ruleName, context) {
  const strict = false,
        leftRecursiveCycles = context.getLeftRecursiveCycles(),
        definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName, leftRecursiveCycles, strict, context),
        definitionReducible = !definitionLeftRecursive;

  return definitionReducible;
}

export function isDefinitionRepeatable(definition, ruleName, context) {
  let definitionRepeatable = false;

  const leftRecursiveCycle = context.getLeftRecursiveCycle(),
        definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName, leftRecursiveCycle, context);

  if (definitionLeftRecursive) {
    const parts = definition.getParts(),
          partsLength = parts.length;

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

  if (definitionRightRecursive) {
    const parts = definition.getParts(),
          lastPart = last(parts),
          lastPartRuleNamePart = isPartRuleNamePart(lastPart);

    if (!lastPartRuleNamePart) {
      const lastPartString = lastPart.asString(),
            definitionString = definition.asString();

      throw new Error(`The '${lastPartString}' last part of the '${definitionString}' right recursive definition is not a rule name part.`);
    }
  }

  return definitionRightRecursive;
}

export default {
  partsfromDefinition,
  tailPartsfromDefinition,
  isDefinitionSingular,
  isDefinitionReducible,
  isDefinitionRepeatable
};

function isDefinitionLeftRecursive(definition, ruleName, leftRecursiveCycleOrCycles, strict, context) {
  if (context === undefined) {
    context = strict; ///

    strict = true;
  }

  const ruleMap = context.getRuleMap(),
        leftRecursiveCycles = guaranteeCycles(leftRecursiveCycleOrCycles),
        leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition, ruleMap),
        recursiveRuleNames = leftRecursiveRuleNames,  ///
        cycles = leftRecursiveCycles, ///
        edges = edgesFromRuleNameAndRecursiveRuleNames(ruleName, recursiveRuleNames),
        edgesMatchCycles = matchEdgesAndCycles(edges, cycles),
        definitionLeftRecursive = edgesMatchCycles; ///

  if (strict) {
    if (definitionLeftRecursive) {
      const parts = definition.getParts(),
            firstPart = first(parts),
            firstPartRuleNamePart = isPartRuleNamePart(firstPart);

      if (!firstPartRuleNamePart) {
        const firstPartString = firstPart.asString(),
              definitionString = definition.asString();

        throw new Error(`The '${firstPartString}' first part of the '${definitionString}' left recursive definition is not a rule name part.`);
      }
    }
  }

  return definitionLeftRecursive;
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

function guaranteeCycles(cycleOrCycles) {
  const cycles = Array.isArray(cycleOrCycles) ?
                   cycleOrCycles :
                     [cycleOrCycles];

  return cycles;
}
