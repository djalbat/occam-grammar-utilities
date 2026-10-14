"use strict";

import { rulesUtilities } from "occam-parsers";

import Graph from "./graph";

import { filter } from "./utilities/array";
import { edgesFromStartRule } from "./utilities/edge";
import { LEFT_RECURSIVE_LABEL } from "./labels";
import { leftRecursiveRuleNamesFromRule } from "./utilities/leftRecursion";
import { rewriteRules, createReducedRules, createRepeatedRules } from "./utilities/rules";

const { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRules(rules),
        ruleNamesMap = ruleNamesMapFromNothing(ruleMap),
        cycles = cyclesFromStartRule(startRule, ruleMap, ruleNamesMap);

  createRepeatedRules(cycles, ruleMap);

  createReducedRules(cycles, ruleMap);

  rewriteRules(cycles, ruleMap);

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}

function graphFromStartRule(startRule, ruleMap, ruleNamesMap) {
  const startRuleName = startRule.getName(),
        edges = edgesFromStartRule(startRule, ruleMap, ruleNamesMap),
        startVertex = startRuleName,  ///
        graph = Graph.fromEdgesAndStartVertex(edges, startVertex);

  return graph;
}

function cyclesFromStartRule(startRule, ruleMap, ruleNamesMap) {
  const graph = graphFromStartRule(startRule, ruleMap, ruleNamesMap),
        cycles = graph.findCycles();

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

function ruleNamesMapFromNothing(ruleMap) {
  const ruleNamesMap = {},
        ruleNames = Object.keys(ruleMap);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          leftRecursiveRuleNames = [];

    leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames);

    const ruleNames = leftRecursiveRuleNames; ///

    ruleNamesMap[ruleName] = ruleNames;
  });

  return ruleNamesMap;
}

