"use strict";

import { rulesUtilities } from "occam-parsers";

import DirectedGraph from "./directedGraph";
import eliminateDirectLeftRecursion from "./eliminateDirectLeftRecursion";
import eliminateIndirectLeftRecursion from "./eliminateIndirectLeftRecursion";

import { edgesFromStartRuleAndRuleMap } from "./utilities/ruleMap";

const { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRules(rules),
        edges = edgesFromStartRuleAndRuleMap(startRule, ruleMap),
        directedGraph = DirectedGraph.fromEdges(edges),
        startRuleName = startRule.getName(),
        startVertex = startRuleName,  ///
        context = {
          ruleMap,
          directedGraph
        };

  directedGraph.removeNonCyclicEdges(startVertex);

  eliminateIndirectLeftRecursion(context);

  eliminateDirectLeftRecursion(context);

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}
