"use strict";

import Edge from "../edge";

import { recursiveRuleNamesFromRule, leftRecursiveRuleNamesFromRule } from "./rule";

export function edgesFromStartRuleAndRuleMap(startRule, ruleMap) {
  const rule = startRule, ///
        edges = [],
        vertexes = [];

  edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap);

  return edges;
}

export function greatestCycleFromCycles(cycles) {
  const greatestCycle = cycles.reduce((greatestCycle, cycle) => {
    if (greatestCycle === null) {
      greatestCycle = cycle;  ///
    } else {
      const cycleLength = cycle.length,
        greatestCycleLength = greatestCycle.length;

      if (cycleLength > greatestCycleLength) {
        greatestCycle = cycle;  ///
      }
    }

    return greatestCycle;
  }, null);

  return greatestCycle;
}

export function ruleNamesFromCycles(cycles) {
  const ruleNames = [];

  cycles.forEach((cycle) => {
    const cyclicRuleNames = cycle;  ///

    cyclicRuleNames.forEach((cyclicRuleName) => {
      const ruleNamesIncludesCyclicRuleName = ruleNames.includes(cyclicRuleName);

      if (!ruleNamesIncludesCyclicRuleName) {
        const ruleName = cyclicRuleName;  ///

        ruleNames.push(ruleName);
      }
    });
  });

  return ruleNames;
}

function edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap) {
  const ruleName = rule.getName(),
        vertex = ruleName,  ///
        vertexesIncludesVertex = vertexes.includes(vertex);

  if (vertexesIncludesVertex) {
    return;
  }

  vertexes = [
    ...vertexes,
    vertex
  ];

  const recursiveRuleNames = recursiveRuleNamesFromRule(rule),
        leftRecursiveRuleNames = leftRecursiveRuleNamesFromRule(rule);

  recursiveRuleNames.forEach((recursiveRuleName) => {
    const leftRecursiveRuleNamesIncludesRecursiveRuleName = leftRecursiveRuleNames.includes(recursiveRuleName);

    if (leftRecursiveRuleNamesIncludesRecursiveRuleName) {
      const leftRecursiveRuleName = recursiveRuleName,  ///
            sourceVertex = ruleName,  ///
            targetVertex = leftRecursiveRuleName, ///
            edge = Edge.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex);

      edges.push(edge);
    }

    const recursiveRule = ruleMap[recursiveRuleName] || null;

    if (recursiveRule !== null) {
      const rule = recursiveRule; ///

      edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap);
    }
  });
}
