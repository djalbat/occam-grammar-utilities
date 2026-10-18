"use strict";

import { arrayUtilities } from "necessary";

const { push } = arrayUtilities;

export function ruleNameFromCycle(cycle) {
  const firstVertex = cycle.getFirstVertex(),
        ruleName = firstVertex; ///

  return ruleName;
}

export function ruleNamesFromCycle(cycle, ruleNames = []) {
  const vertexes = cycle.getVertexes(),
        cycleRuleNames = vertexes; ///

  push(ruleNames, cycleRuleNames);

  return ruleNames;
}
