"use strict";

import { rulesUtilities } from "occam-parsers";

import { graphFromRules } from "./utilities/graph";
import { cyclesFromGrapah } from "./utilities/cycle";
import { rewriteRules, removeOrReplaceRules } from "./utilities/rules";

const { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const startRule = startRuleFromRules(rules),
        ruleMap = ruleMapFromRules(rules),
        graph = graphFromRules(rules),
        cycles = cyclesFromGrapah(graph);

  cycles.forEach((cycle, index) => {
    rewriteRules(cycle, cycles, graph, ruleMap);
  });

  cycles.forEach((cycle, index) => {
    removeOrReplaceRules(cycle, cycles, graph, ruleMap);
  });

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}
