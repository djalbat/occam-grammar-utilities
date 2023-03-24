"use strict";

import { rulesUtilities } from "occam-parsers";

import RuleNameGraph from "./ruleNameGraph";
import eliminateDirectLeftRecursion from "./eliminateDirectLeftRecursion";
import eliminateIndirectLeftRecursion from "./eliminateIndirectLeftRecursion";

const { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRules(rules),
        ruleNameGraph = RuleNameGraph.fromRuleMapAndStartRule(ruleMap, startRule),
        context = {
          ruleMap,
          ruleNameGraph
        };

  eliminateIndirectLeftRecursion(context);

  eliminateDirectLeftRecursion(context);

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}
