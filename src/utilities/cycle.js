"use strict";

import { arrayUtilities } from "necessary";

import { CYCLE_LENGTH_2, LEFT_RECURSIVE_LABEL, RIGHT_RECURSIVE_LABEL } from "../constants";

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
  let indirectRuleName = null;

  const ruleNames = ruleNamesFromCycle(cycle),
        ruleNamesLength = ruleNames.length;

  if (ruleNamesLength === CYCLE_LENGTH_2) {
    const secondRuleName = second(ruleNames);

    indirectRuleName = secondRuleName; ///
  }

  return indirectRuleName;
}

export function cyclesFromGraph(graph) {
  const cycles = graph.findCycles();

  cycles.forEach((cycle) => {
    const cycleLeftRecursive = isCycleLeftRecursive(cycle),
          cycleRightRecursive = isCycleRightRecursive(cycle);

    let label;

    if (cycleLeftRecursive) {
      label = LEFT_RECURSIVE_LABEL;

      cycle.addLabel(label);
    }

    if (cycleRightRecursive) {
      label = RIGHT_RECURSIVE_LABEL;

      cycle.addLabel(label);
    }
  });

  return cycles;
}

export function leftRecursiveCyclesFromCycles(cycles) {
  const leftRecursiveCycles = cycles.filter((cycle) => {
    const cycleLeftRecusrive = cycle.isLeftRecursive();

    if (cycleLeftRecusrive) {
      return true;
    }
  });

  return leftRecursiveCycles;
}

export function rightRecursiveCyclesFromCycles(cycles) {
  const rightRecursiveCycles = cycles.filter((cycle) => {
    const cycleLeftRecusrive = cycle.isRightRecursive();

    if (cycleLeftRecusrive) {
      return true;
    }
  });

  return rightRecursiveCycles;
}

function isCycleLeftRecursive(cycle) {
  const cycleLeftRecursive = cycle.everyEdge((edge) => {
    const label = LEFT_RECURSIVE_LABEL,
      labelMatches = edge.matchLabel(label),
      edgeLeftRecursive = labelMatches;  ///

    if (edgeLeftRecursive) {
      return true;
    }
  });

  return cycleLeftRecursive;
}

function isCycleRightRecursive(cycle) {
  const cycleRightRecursive = cycle.everyEdge((edge) => {
    const label = RIGHT_RECURSIVE_LABEL,
          labelMatches = edge.matchLabel(label),
          edgeRightRecursive = labelMatches;  ///

    if (edgeRightRecursive) {
      return true;
    }
  });

  return cycleRightRecursive;
}

