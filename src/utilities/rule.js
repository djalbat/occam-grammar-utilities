"use strict";

import { recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "./definition";

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
