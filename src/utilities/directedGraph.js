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
            edgeB = edge, ///
            edgesIncludesEdge = edges.some((edge) => {  ///
              const edgeA = edge, ///
                    edgeAMatchesEdgeB = edgeA.match(edgeB);

              if (edgeAMatchesEdgeB) {
                return true;
              }
            });

      if (!edgesIncludesEdge) {
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

