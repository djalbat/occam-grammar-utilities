"use strict";

import Edge from "../edge";

import { edgesMatchEdge } from "../directedGraph";
import { recursiveRuleNamesFromRule } from "../utilities/recursive";
import { RECURSIVE_LABEL, LEFT_RECURSIVE_LABEL } from "../labels";

export function edgesFromRuleNames(ruleNames) {
  const length = ruleNames.length,
        edges = ruleNames.map((ruleName, index) => {
          const nextIndex = (index + 1) % length,
                nextRuleName = ruleNames[nextIndex],
                leftRecursiveRuleName = nextRuleName, ///
                edge = edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName);

          return edge;
        });

  return edges;
}

export function edgesFromStartRule(startRule, ruleMap, ruleNamesMap) {
  const rule = startRule, ///
        edges = [],
        vertexes = [];

  edgesFromRule(rule, edges, vertexes, ruleMap, ruleNamesMap);

  return edges;
}

export function edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const label = LEFT_RECURSIVE_LABEL,
        sourceVertex = ruleName,  ///
        targetVertex = leftRecursiveRuleName, ///
        edge = Edge.fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex);

  return edge;
}

function edgesFromRule(rule, edges, vertexes, ruleMap, ruleNamesMap) {
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

  const ruleNames = ruleNamesMap[ruleName],
        recursiveRuleNames = recursiveRuleNamesFromRule(rule),
        leftRecursiveRuleNames = ruleNames; ///

  recursiveRuleNames.forEach((recursiveRuleName) => {
    const leftRecursiveRuleNamesIncludesRecursiveRuleName = leftRecursiveRuleNames.includes(recursiveRuleName),
          leftRecursiveRuleName = recursiveRuleName,  ///
          label = leftRecursiveRuleNamesIncludesRecursiveRuleName ?
                    LEFT_RECURSIVE_LABEL :
                      RECURSIVE_LABEL,
          sourceVertex = ruleName,  ///
          targetVertex = leftRecursiveRuleName, ///
          edge = Edge.fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex),
          matches = edgesMatchEdge(edges, edge);

    if (!matches) {
      edges.push(edge);
    }

    const recursiveRule = ruleMap[recursiveRuleName] || null;

    if (recursiveRule !== null) {
      const rule = recursiveRule; ///

      edgesFromRule(rule, edges, vertexes, ruleMap, ruleNamesMap);
    }
  });
}

