"use strict";

import Edge from "../edge";

import { edgesMatchEdge } from "../directedGraph";
import { RECURSIVE_LABEL, LEFT_RECURSIVE_LABEL } from "../labels";
import { recursiveRuleNamesFromRule, leftRecursiveRuleNamesFromRule } from "../utilities/rule";

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

export function edgesFromStartRuleAndRuleMap(startRule, ruleMap) {
  const rule = startRule, ///
        edges = [],
        vertexes = [];

  edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap);

  return edges;
}

export function edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const label = LEFT_RECURSIVE_LABEL,
        sourceVertex = ruleName,  ///
        targetVertex = leftRecursiveRuleName, ///
        edge = Edge.fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex);

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

      edgesFromRuleAndRuleMap(rule, edges, vertexes, ruleMap);
    }
  });
}

