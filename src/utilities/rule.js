"use strict";

import DirectlyLeftRecursiveDefinition from "../definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "../definition/recursive/left/indirectly";
import ImplicitlyLeftRecursiveDefinition from "../definition/recursive/left/implicitly";

import { isInstanceOf } from "../utilities/class";

export function substituteDefinition(rule, definition, leftRecursiveRuleName) {

}

export function isRuleDirectlyLeftRecursive(rule) {
  const definitions = rule.getDefinitions(),
        ruleDirectlyLeftRecursive = definitions.some((definition) => {
          const definitionDirectlyLeftRecursiveDefinition = isInstanceOf(definition, DirectlyLeftRecursiveDefinition);

          if (definitionDirectlyLeftRecursiveDefinition) {
            return true;
          }
        });

  return ruleDirectlyLeftRecursive;
}

export function ruleFromLeftRecursiveDefinition(leftRecursiveDefinition, ruleMap) {
  const ruleName = leftRecursiveDefinition.getRuleName(),
        rule = ruleMap[ruleName];

  return rule;
}
