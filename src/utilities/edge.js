"use strict";

import Edge from "../edge";

import { edgesMatchEdge } from "../edge";
import { recursiveRuleNamesFromRule } from "../utilities/recursion";
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
        edges = [];

  edgesFromRule(rule, edges, ruleMap, ruleNamesMap);

  return edges;
}

export function edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const label = LEFT_RECURSIVE_LABEL,
        sourceVertex = ruleName,  ///
        targetVertex = leftRecursiveRuleName, ///
        edge = Edge.fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex);

  return edge;
}

function edgesFromRule(rule, edges, ruleMap, ruleNamesMap) {
  const ruleName = rule.getName(),
        ruleNames = ruleNamesMap[ruleName],
        recursiveRuleNames = recursiveRuleNamesFromRule(rule, ruleMap),
        leftRecursiveRuleNames = ruleNames; ///

  recursiveRuleNames.forEach((recursiveRuleName) => {
    const edge = edgeFromRuleNameRecursiveRuleNameAndLeftRecursiveRuleNames(ruleName, recursiveRuleName, leftRecursiveRuleNames),
          matches = edgesMatchEdge(edges, edge);

    if (!matches) {
      edges.push(edge);

      const ruleName = recursiveRuleName, ///
            rule = ruleMap[ruleName];

      edgesFromRule(rule, edges, ruleMap, ruleNamesMap);
    }
  });
}

function edgeFromRuleNameRecursiveRuleNameAndLeftRecursiveRuleNames(ruleName, recursiveRuleName, leftRecursiveRuleNames) {
  const leftRecursiveRuleNamesIncludesRecursiveRuleName = leftRecursiveRuleNames.includes(recursiveRuleName),
        leftRecursiveRuleName = recursiveRuleName,  ///
        label = leftRecursiveRuleNamesIncludesRecursiveRuleName ?
                  LEFT_RECURSIVE_LABEL :
                    RECURSIVE_LABEL,
        sourceVertex = ruleName,  ///
        targetVertex = leftRecursiveRuleName, ///
        edge = Edge.fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex);

  return edge;
}