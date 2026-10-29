"use strict";

import { arrayUtilities } from "necessary";

const { first, second, push } = arrayUtilities;

export function ruleNamesFromCycle(cycle, ruleNames = []) {
  const vertexes = cycle.getVertexes(),
        cycleRuleNames = vertexes; ///

  push(ruleNames, cycleRuleNames);

  return ruleNames;
}

export function ruleNameFromCycle(cycle) {
  const ruleNames = ruleNamesFromCycle(cycle),
    firstRuleName = first(ruleNames),
    ruleName = firstRuleName; ///

  return ruleName;
}

export function indirectRuleNameFromCycle(cycle) {
  const ruleNames = ruleNamesFromCycle(cycle),
        secondRuleName = second(ruleNames),
        indirectRuleName = secondRuleName; ///

  return indirectRuleName;
}
