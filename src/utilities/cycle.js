"use strict";

import { arrayUtilities } from "necessary";

import { CYCLE_LENGTH_2, LEFT_RECURSIVE_LABEL } from "../constants";

const { first, second, push, filter } = arrayUtilities;

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
  let indirectRuleName = null;

  const ruleNames = ruleNamesFromCycle(cycle),
        ruleNamesLength = ruleNames.length;

  if (ruleNamesLength === CYCLE_LENGTH_2) {
    const secondRuleName = second(ruleNames);

    indirectRuleName = secondRuleName; ///
  }

  return indirectRuleName;
}

export function cyclesFromGrapah(graph) {
  const cycles = graph.findCycles();

  filter(cycles, (cycle) => {
    const cycleLeftRecursive = isCycleLeftRecursive(cycle);

    if (cycleLeftRecursive) {
      return true;
    }
  });

  return cycles;
}

function isCycleLeftRecursive(cycle) {
  const cycleLeftRecursive = cycle.everyEdge((edge) => {
    const label = edge.getLabel(),
          labelLeftRecursiveLabel = (label === LEFT_RECURSIVE_LABEL),
          edgeLeftRecursive = labelLeftRecursiveLabel;  ///

    if (edgeLeftRecursive) {
      return true;
    }
  });

  return cycleLeftRecursive;
}

