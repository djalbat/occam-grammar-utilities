"use strict";

import { arrayUtilities } from "necessary";

const { push, compress } = arrayUtilities;

export function ruleNamesFromCycle(cycle, ruleNames = []) {
  const cycleVertexes = cycle.getVertexes(),
        cycleRuleNames = cycleVertexes; ///

  push(ruleNames, cycleRuleNames);

  return ruleNames;
}

export function ruleNamesFromCycles(cycles, ruleNames = []) {
  cycles.forEach((cycle) => {
    ruleNamesFromCycle(cycle, ruleNames);
  });

  compress(ruleNames, (ruleNameA, ruleNameB) => {
    if (ruleNameA !== ruleNameB) {
      return true;
    }
  });

  return ruleNames;
}
