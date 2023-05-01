"use strict";

import { rulesUtilities } from "occam-parsers";

import DirectedGraph from "./directedGraph";
import createReducedRules from "./createReducedRules";
import rewriteLeftRecursiveRules from "./rewriteLeftRecursiveRules";
import createDirectlyRepeatedRules from "./createDirectlyRepeatedRules";
import createIndirectlyRepeatedRules from "./createIndirectlyRepeatedRules";

import { edgesFromStartRuleAndRuleMap } from "./utilities/directedGraph";

const { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRules(rules),
        directedGraph = directedGraphFromRuleMapAndStartRule(ruleMap, startRule);

  createReducedRules(ruleMap, directedGraph);

  createDirectlyRepeatedRules(ruleMap, directedGraph);

  createIndirectlyRepeatedRules(ruleMap, directedGraph);

  rewriteLeftRecursiveRules(ruleMap, directedGraph);

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