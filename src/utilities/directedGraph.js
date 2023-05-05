"use strict";

import Edge from "../edge";

import { edgesMatchEdge } from "../directedGraph";
import { recursiveRuleNamesFromRule, leftRecursiveRuleNamesFromRule } from "./rule";

export function edgesFromRuleNames(ruleNames) {
  const length = ruleNames.length,
        edges = ruleNames.map((ruleName, index) => {
          const sourceVertex = ruleName,  ///
                nextIndex = (index + 1) % length,
                nextRuleName = ruleNames[nextIndex],
                leftRecursiveRuleName = nextRuleName, ///
                edge = edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName);

          return edge;
        });

  return edges;
}

export function edgesFromStartRuleAndRuleMap(startRule, ruleMap) {
  const rule = startRule, ///
        edges = [],
        vertexes = [];

  edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap);

  return edges;
}

export function edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const sourceVertex = ruleName,  ///
        targetVertex = leftRecursiveRuleName, ///
        edge = Edge.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex);

  return edge;
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
            edge = Edge.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex),
            matches = edgesMatchEdge(edges, edge);

      if (!matches) {
        edges.push(edge);
      }
    }

    const recursiveRule = ruleMap[recursiveRuleName] || null;

    if (recursiveRule !== null) {
      const rule = recursiveRule; ///

      edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap);
    }
  });
}

