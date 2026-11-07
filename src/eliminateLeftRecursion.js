"use strict";

import { arrayUtilities } from "necessary";
import { rulesUtilities } from "occam-parsers";

import Context from "./context";

import { graphFromRules } from "./utilities/graph";
import { LEFT_RECURSIVE_LABEL } from "./labels";
import { rewriteRules, replaceOrRemoveRules, rewriteSecondaryRules } from "./utilities/rules";

const { filter } = arrayUtilities,
      { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const startRule = startRuleFromRules(rules),
        ruleMap = ruleMapFromRules(rules),
        graph = graphFromRules(rules),
        cycles = cyclesFromGrapah(graph);

  let context = Context.fromCyclesAndRuleMap(cycles, ruleMap);

  cycles.forEach((cycle) => {
    context = Context.fromCycle(cycle, context);

    rewriteRules(context);
  });

  replaceOrRemoveRules(context);

  rewriteSecondaryRules(context);

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}

function cyclesFromGrapah(graph) {
  const cycles = graph.findCycles();

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

