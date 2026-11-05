"use strict";

import { arrayUtilities } from "necessary";

import { rewriteRuleNameParts } from "../utilities/rewrite";
import { leftRecursiveRuleNamesFromDefinition } from "../utilities/leftRecursion";
import { edgeFromRuleNameAndLeftRecursiveRuleName } from "../utilities/edge";

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

export function isDefinitionSingular(definition, ruleName, context) {
  let definitionSingular = false;

  const cycle = context.getCycle(),
        ruleMap = context.getRuleMap(),
        definitionCyclical = isDefinitionCyclical(definition, ruleName, cycle, ruleMap);

  if (definitionCyclical) {
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
  const cycles = context.getCycles(),
        ruleMap = context.getRuleMap(),
        definitionCyclical = isDefinitionCyclical(definition, ruleName, cycles, ruleMap),
        definitionReducible = !definitionCyclical;

  return definitionReducible;
}

export function isDefinitionRepeatable(definition, ruleName, context) {
  let definitionRepeatable = false;

  const cycle = context.getCycle(),
        ruleMap = context.getRuleMap(),
        definitionCyclical = isDefinitionCyclical(definition, ruleName, cycle, ruleMap);

  if (definitionCyclical) {
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

function isDefinitionCyclical(definition, ruleName, cycleOrCycles, ruleMap) {
  const cycles = guaranteeCycles(cycleOrCycles),
        leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition, ruleMap),
        definitionCyclical = leftRecursiveRuleNames.some((leftRecursiveRuleName) => {
          const edge = edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
                edgeMatchesCycles = cycles.some((cycle) => {
                  const edgeMatchesCycle = cycle.matchEdge(edge);

                  if (edgeMatchesCycle) {
                    return true;
                  }
                });

          if (edgeMatchesCycles) {
            return true;
          }
        });

  return definitionCyclical;
}

function guaranteeCycles(cycleOrCycles) {
  const cycles = Array.isArray(cycleOrCycles) ?
                   cycleOrCycles :
                     [cycleOrCycles];

  return cycles;
}
