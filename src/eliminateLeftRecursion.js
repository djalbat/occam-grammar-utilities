"use strict";

import { rulesUtilities } from "occam-parsers";

import { rewriteRules } from "./utilities/rules";
import { graphFromRules } from "./utilities/graph";
import { cyclesFromGrapah } from "./utilities/cycle";

const { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const startRule = startRuleFromRules(rules),
        ruleMap = ruleMapFromRules(rules),
        graph = graphFromRules(rules),
        cycles = cyclesFromGrapah(graph);

  cycles.forEach((cycle) => {
    rewriteRules(cycle, cycles, graph, ruleMap);
  });

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}
