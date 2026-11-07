"use strict";

import { rulesUtilities } from "occam-parsers";

import Edge from "../edge";
import Graph from "../graph";

import { RECURSIVE_LABEL, LEFT_RECURSIVE_LABEL } from "../labels";
import { recursiveRuleNamesMapFromRuleMap, leftRecursiveRuleNamesMapFromRuleMap } from "./ruleMap";

const { ruleMapFromRules, startRuleFromRules } = rulesUtilities;

export function graphFromRules(rules) {
  const edges = edgesFromRules(rules),
        startRule = startRuleFromRules(rules),
        startRuleName = startRule.getName(),
        startVertex = startRuleName,  ///
        graph = Graph.fromEdgesAndStartVertex(edges, startVertex);

  return graph;
}

function edgesFromRule(rule, edges, ruleMap, recursiveRuleNamesMap, leftRecursiveRuleNamesMap) {
  const ruleName = rule.getName(),
        recursiveRuleNames = recursiveRuleNamesMap[ruleName],
        leftRecursiveRuleNames = leftRecursiveRuleNamesMap[ruleName]; ///

  recursiveRuleNames.forEach((recursiveRuleName) => {
    const edge = edgeFromRuleNameRecursiveRuleNameAndLeftRecursiveRuleNames(ruleName, recursiveRuleName, leftRecursiveRuleNames),
          matches = edgesMatchEdge(edges, edge);

    if (!matches) {
      edges.push(edge);

      const ruleName = recursiveRuleName, ///
            rule = ruleMap[ruleName];

      edgesFromRule(rule, edges, ruleMap, recursiveRuleNamesMap, leftRecursiveRuleNamesMap);
    }
  });
}

function edgesMatchEdge(edges, edge) {
  const edgeA = edge, ///
        matches = edges.some((edge) => {
          const edgeB = edge, ///
                edgeAMatchesEdgeB = edgeA.match(edgeB);

          if (edgeAMatchesEdgeB) {
            return true;
          }
        });

  return matches;
}

function edgesFromRules(rules) {
  const startRule = startRuleFromRules(rules),
        ruleMap = ruleMapFromRules(rules),
        rule = startRule, ///
        edges = [], ///
        recursiveRuleNamesMap = recursiveRuleNamesMapFromRuleMap(ruleMap),
        leftRecursiveRuleNamesMap = leftRecursiveRuleNamesMapFromRuleMap(ruleMap);

  edgesFromRule(rule, edges, ruleMap, recursiveRuleNamesMap, leftRecursiveRuleNamesMap);

  return edges;
}

function edgeFromRuleNameRecursiveRuleNameAndLeftRecursiveRuleNames(ruleName, recursiveRuleName, leftRecursiveRuleNames) {
  const leftRecursiveRuleNamesIncludesRecursiveRuleName = leftRecursiveRuleNames.includes(recursiveRuleName),
        label = leftRecursiveRuleNamesIncludesRecursiveRuleName ?
                  LEFT_RECURSIVE_LABEL :
                    RECURSIVE_LABEL,
        sourceVertex = ruleName,  ///
        targetVertex = recursiveRuleName, ///
        edge = Edge.fromLabelSourceVertexAndTargetVertex(label, sourceVertex, targetVertex);

  return edge;
}