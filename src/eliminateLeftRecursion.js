"use strict";

import { rulesUtilities } from "occam-parsers";

import DirectedGraph from "./directedGraph";
import eliminateDirectLeftRecursion from "./eliminateDirectLeftRecursion";
import eliminateIndirectLeftRecursion from "./eliminateIndirectLeftRecursion";

import { edgesFromStartRuleAndRuleMap } from "./utilities/directedGraph";

const { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRules(rules),
        startRuleName = startRule.getName(),
        edges = edgesFromStartRuleAndRuleMap(startRule, ruleMap),
        startVertex = startRuleName,  ///
        directedGraph = DirectedGraph.fromEdgesAndStartVertex(edges, startVertex),
        context = {
          ruleMap,
          directedGraph
        };

  eliminateIndirectLeftRecursion(context);

  eliminateDirectLeftRecursion(context);

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}
