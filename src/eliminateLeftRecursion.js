"use strict";

import { arrayUtilities } from "necessary";
import { rulesUtilities } from "occam-parsers";

import DirectedGraph from "./directedGraph";
import createReducedRules from "./createReducedRules";
import rewriteLeftRecursiveRules from "./rewriteLeftRecursiveRules";
import createDirectlyRepeatedRules from "./createDirectlyRepeatedRules";
import createIndirectlyRepeatedRules from "./createIndirectlyRepeatedRules";

import { edgesFromStartRule } from "./utilities/directedGraph";
import { LEFT_RECURSIVE_LABEL } from "./labels";
import { leftRecursiveRuleNamesFromRule } from "./utilities/leftRecursive";

const { filter } = arrayUtilities,
      { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRules(rules),
        ruleNamesMap = ruleNamesMapFromNothing(ruleMap),
        cycles = cyclesFromStartRule(startRule, ruleMap, ruleNamesMap);

  createReducedRules(cycles, ruleMap);

  createIndirectlyRepeatedRules(cycles, ruleMap);

  createDirectlyRepeatedRules(cycles, ruleMap);

  rewriteLeftRecursiveRules(cycles, ruleMap, ruleNamesMap);

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}

function directedGraphFromStartRule(startRule, ruleMap, ruleNamesMap) {
  const startRuleName = startRule.getName(),
        edges = edgesFromStartRule(startRule, ruleMap, ruleNamesMap),
        startVertex = startRuleName,  ///
        directedGraph = DirectedGraph.fromEdgesAndStartVertex(edges, startVertex);

  return directedGraph;
}

function ruleNamesMapFromNothing(ruleMap) {
  const ruleNamesMap = {},
        ruleNames = Object.keys(ruleMap);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromRule(rule, ruleMap),
          ruleNames = leftRecursiveRuleNames; ///

    ruleNamesMap[ruleName] = ruleNames;
  });

  return ruleNamesMap;
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

function cyclesFromStartRule(startRule, ruleMap, ruleNamesMap) {
  const directedGraph = directedGraphFromStartRule(startRule, ruleMap, ruleNamesMap),
        cycles = directedGraph.findCycles();

  filter(cycles, (cycle) => {
    const cycleLeftRecursive = isCycleLeftRecursive(cycle);

    if (cycleLeftRecursive) {
      return true;
    }
  });

  return cycles;
}

