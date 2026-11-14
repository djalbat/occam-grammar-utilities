"use strict";

import { rulesUtilities } from "occam-parsers";

import { graphFromRules } from "./utilities/graph";
import { cyclesFromGraph } from "./utilities/cycle";
import { leftRecursiveCyclesFromCycles } from "./utilities/cycle";
import { rewriteRules, removeOrReplaceRules } from "./utilities/rules";

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
    removeOrReplaceRules(leftRecursiveCycle, cycles, graph, ruleMap);
  });

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}
