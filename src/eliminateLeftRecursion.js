"use strict";

import { rulesUtilities } from "occam-parsers";

import { rewriteRules } from "./utilities/rules";
import { graphFromRules } from "./utilities/graph";
import { cyclesFromGraph } from "./utilities/cycle";
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

  const checkForCutParts = true,
        visitedRules = [],
        consuming = startRule.isConsuming(ruleMap, visitedRules, checkForCutParts);

  if (!consuming) {
    const startRuleName = startRule.getName();

    throw new Error(`The '${startRuleName}' start rule is not consuming.`);
  }

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}
