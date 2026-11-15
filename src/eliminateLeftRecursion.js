"use strict";

import { rulesUtilities } from "occam-parsers";

import { graphFromRules } from "./utilities/graph";
import { cyclesFromGraph } from "./utilities/cycle";
import { rewriteRules, replaceRules } from "./utilities/rules";
import { leftRecursiveCyclesFromCycles } from "./utilities/cycle";

const { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const startRule = startRuleFromRules(rules),
        ruleMap = ruleMapFromRules(rules),
        graph = graphFromRules(rules),
        cycles = cyclesFromGraph(graph),
        leftRecursiveCycles = leftRecursiveCyclesFromCycles(cycles);

  leftRecursiveCycles.forEach((leftRecursiveCycle) => {
    rewriteRules(leftRecursiveCycle, cycles, graph, ruleMap);
  });

  leftRecursiveCycles.forEach((leftRecursiveCycle) => {
    replaceRules(leftRecursiveCycle, cycles, graph, ruleMap);
  });

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}
