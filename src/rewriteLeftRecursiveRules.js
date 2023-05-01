"use strict";

import RewrittenDefinition from "./definition/rewritten";

import { ruleNamesFromCycles } from "./utilities/directedGraph";

export default function rewriteLeftRecursiveRules(ruleMap, directedGraph) {
  const cycles = directedGraph.findCycles(),
        ruleNames = ruleNamesFromCycles(cycles);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName];

    rule.removeAllDefinitions();

    const rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName),
          definition = rewrittenDefinition; ///

    rule.addDefinition(definition);
  });
}

