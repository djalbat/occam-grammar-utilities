"use strict";

import { arrayUtilities } from "necessary";
import { rulesUtilities } from "occam-parsers";

import DirectedGraph from "./directedGraph";
import createReducedRules from "./createReducedRules";
import rewriteLeftRecursiveRules from "./rewriteLeftRecursiveRules";
import createDirectlyRepeatedRules from "./createDirectlyRepeatedRules";
import createIndirectlyRepeatedRules from "./createIndirectlyRepeatedRules";

import { LEFT_RECURSIVE_LABEL } from "./labels";
import { edgesFromStartRuleAndRuleMap } from "./utilities/directedGraph";

const { filter } = arrayUtilities,
      { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRules(rules),
        cycles = cyclesFromRuleMapAndStartRule(ruleMap, startRule);

  createReducedRules(cycles, ruleMap);

  createIndirectlyRepeatedRules(cycles, ruleMap);

  createDirectlyRepeatedRules(cycles, ruleMap);

  rewriteLeftRecursiveRules(cycles, ruleMap);

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}

function directedGraphFromRuleMapAndStartRule(ruleMap, startRule) {
  const startRuleName = startRule.getName(),
        edges = edgesFromStartRuleAndRuleMap(startRule, ruleMap),
        startVertex = startRuleName,  ///
        directedGraph = DirectedGraph.fromEdgesAndStartVertex(edges, startVertex);

  return directedGraph;
}

function cyclesFromRuleMapAndStartRule(ruleMap, startRule) {
  const directedGraph = directedGraphFromRuleMapAndStartRule(ruleMap, startRule),
        cycles = directedGraph.findCycles();

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
