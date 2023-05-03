"use strict";

import { specialSymbols } from "occam-lexers";

import { first } from "../utilities/array";
import { recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "./definition";

const { epsilon } = specialSymbols;

export function isRuleEmpty(rule) {
  let ruleEmpty = false;

  const definitions = rule.getDefinitions(),
        definitionsLength = definitions.length;

  if (definitionsLength === 1) {
    const firstDefinition= first(definitions),
          definition = firstDefinition, ///
          parts = definition.getParts(),
          partsLength = parts.length;

    if (partsLength === 1) {
      const firstPart = first(parts),
            part = firstPart, ///
            partString = part.asString(),
            partStringEpsilon = (partString === epsilon);

      if (partStringEpsilon) {
        ruleEmpty = true;
      }
    }
  }

  return ruleEmpty;
}

export function recursiveRuleNamesFromRule(rule, recursiveRuleNames = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    recursiveRuleNamesFromDefinition(definition, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

export function leftRecursiveRuleNamesFromRule(rule, leftRecursiveRuleNames = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    leftRecursiveRuleNamesFromDefinition(definition, leftRecursiveRuleNames);
  });

  return leftRecursiveRuleNames;
}
