"use strict";

import { rulesUtilities } from "occam-parsers";

import eliminateDirectLeftRecursion from "./eliminateDirectLeftRecursion";
import eliminateIndirectLeftRecursion from "./eliminateIndirectLeftRecursion";
import retrieveLeftRecursiveDefinitions from "./retrieveLeftRecursiveDefinitions";

const { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const startRule = startRuleFromRules(rules),
        ruleMap = ruleMapFromRules(rules),
        rule = startRule, ///
        operations = [],
        leftRecursiveDefinitions = [],
        context = {
          ruleMap,
          operations,
          leftRecursiveDefinitions
        };

  retrieveLeftRecursiveDefinitions(rule, context);

  eliminateIndirectLeftRecursion(context);

  eliminateDirectLeftRecursion(context);

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}
