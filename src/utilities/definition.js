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

export function isDefinitionSingular(definition, ruleName, context) {
  let definitionSingular = false;

  const leftRecursiveRuleNames = [],
        ruleMap = context.getRuleMap();

  leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

  const leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

  if (leftRecursiveRuleNamesIncludesRuleName) {
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
  const leftRecursiveRuleNames = [],
        ruleMap = context.getRuleMap(),
        cycles = context.getCycles();

  leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

  const definitionReducible = leftRecursiveRuleNames.every((leftRecursiveRuleName) => {
    const cyclesIncludeRuleNameAndLeftRecursiveRuleName = cycles.some((cycle) => {
      const ruleNames = ruleNamesFromCycle(cycle),
            edge = edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
            edges = edgesFromRuleNames(ruleNames),
            matches = edgesMatchEdge(edges, edge);

      if (matches) {
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
  let definitionRepeatable = false;

  const leftRecursiveRuleNames = [],
        ruleMap = context.getRuleMap();

  leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

  const leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

  if (leftRecursiveRuleNamesIncludesRuleName) {
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

