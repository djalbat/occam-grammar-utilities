"use strict";

import { rulesUtilities } from "occam-parsers";

import Edge from "../edge";
import Graph from "../graph";

import { LEFT_RECURSIVE_LABEL, RIGHT_RECURSIVE_LABEL } from "../constants";
import { recursiveRuleNamesMapFromRuleMap, leftRecursiveRuleNamesMapFromRuleMap, rightRecursiveRuleNamesMapFromRuleMap } from "../utilities/ruleMap";

const { ruleMapFromRules, startRuleFromRules } = rulesUtilities;

export function graphFromRules(rules) {
  const edges = edgesFromRules(rules),
        startRule = startRuleFromRules(rules),
        startRuleName = startRule.getName(),
        startVertex = startRuleName,  ///
        graph = Graph.fromEdgesAndStartVertex(edges, startVertex);

  return graph;
}

export function retrieveRecursiveRuleNames(ruleName, graph) {
  const vertex = ruleName, ///,
        vertexes = graph.depthFirstVertexSearch(vertex),
        recursiveRuleNames = vertexes; ///

  return recursiveRuleNames;
}

export function edgeFromLabelsRuleNameAndRecursiveRuleName(labels, ruleName, recursiveRuleName) {
  const sourceVertex = ruleName,  ///
        targetVertex = recursiveRuleName, ///
        edge = Edge.fromLabelsSourceVertexAndTargetVertex(labels, sourceVertex, targetVertex);

  return edge;
}

function edgesFromRule(rule, edges, ruleMap, recursiveRuleNamesMap, leftRecursiveRuleNamesMap, rightRecursiveRuleNamesMap) {
  const ruleName = rule.getName(),
        recursiveRuleNames = recursiveRuleNamesMap[ruleName],
        leftRecursiveRuleNames = leftRecursiveRuleNamesMap[ruleName],
        rightRecursiveRuleNames = rightRecursiveRuleNamesMap[ruleName];

  recursiveRuleNames.forEach((recursiveRuleName) => {
    const edge = edgeFromRuleNameRecursiveRuleNameAndLeftRecursiveRuleNames(ruleName, recursiveRuleName, leftRecursiveRuleNames, rightRecursiveRuleNames),
          matches = edgesMatchEdge(edges, edge);

    if (!matches) {
      edges.push(edge);

      const ruleName = recursiveRuleName, ///
            rule = ruleMap[ruleName];

      edgesFromRule(rule, edges, ruleMap, recursiveRuleNamesMap, leftRecursiveRuleNamesMap, rightRecursiveRuleNamesMap);
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
        leftRecursiveRuleNamesMap = leftRecursiveRuleNamesMapFromRuleMap(ruleMap),
        rightRecursiveRuleNamesMap = rightRecursiveRuleNamesMapFromRuleMap(ruleMap);

  edgesFromRule(rule, edges, ruleMap, recursiveRuleNamesMap, leftRecursiveRuleNamesMap, rightRecursiveRuleNamesMap);

  return edges;
}

function edgeFromRuleNameRecursiveRuleNameAndLeftRecursiveRuleNames(ruleName, recursiveRuleName, leftRecursiveRuleNames, rightRecursiveRuleNames) {
  const labels = [],
        leftRecursive = leftRecursiveRuleNames.includes(recursiveRuleName), ///
        rightRecursive = rightRecursiveRuleNames.includes(recursiveRuleName); ///

  if (leftRecursive) {
    labels.push(LEFT_RECURSIVE_LABEL);
  }

  if (rightRecursive) {
    labels.push(RIGHT_RECURSIVE_LABEL);
  }

  const edge = edgeFromLabelsRuleNameAndRecursiveRuleName(labels, ruleName, recursiveRuleName);

  return edge;
}
