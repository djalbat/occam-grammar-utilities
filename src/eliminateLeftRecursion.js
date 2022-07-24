"use strict";

import rulesUtilities from "./utilities/rules";
import eliminateDirectLeftRecursion from "./eliminateDirectLeftRecursion";
import eliminateIndirectLeftRecursion from "./eliminateIndirectLeftRecursion";
import retrieveLeftRecursiveDefinitions from "./retrieveLeftRecursiveDefinitions";

const { ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

export default function eliminateLeftRecursion(rules) {
  const startRule = startRuleFromRules(rules),
        ruleMap = ruleMapFromRules(rules),
        rule = startRule, ///
        recursiveDefinitions = [],
        leftRecursiveDefinitions = [];

  retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);

  eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap);

  eliminateDirectLeftRecursion(leftRecursiveDefinitions, ruleMap);

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap); ///

  return rules;
}
