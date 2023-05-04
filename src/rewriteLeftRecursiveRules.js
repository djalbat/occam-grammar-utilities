"use strict";

import RewrittenDefinition from "./definition/rewritten";

import { ruleNamesFromCycles } from "./utilities/directedGraph";
import { pathsFromRuleNameAndCycles } from "./utilities/path";

export default function rewriteLeftRecursiveRules(ruleMap, directedGraph) {
  const cycles = directedGraph.findCycles(),
        ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName];

    rewriteRecursiveRule(rule, cycles);
  });
}

function rewriteRecursiveRule(rule, cycles) {
  const ruleName = rule.getName();

  rule.removeAllDefinitions();

  const paths = pathsFromRuleNameAndCycles(ruleName, cycles);

  paths.forEach((path) => {
    const rewrittenDefinition = RewrittenDefinition.fromPath(path),
          definition = rewrittenDefinition; ///

    rule.addDefinition(definition);
  });
}
