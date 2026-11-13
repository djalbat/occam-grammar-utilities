"use strict";

import { recursiveRuleNamesFromRule } from "../utilities/recursion";
import { leftRecursiveRuleNamesFromRule } from "../utilities/leftRecursion";
import { rightRecursiveRuleNamesFromRule } from "../utilities/rightRecursion";

export function recursiveRuleNamesMapFromRuleMap(ruleMap) {
  const recursiveRuleNamesMap = {},
        ruleNames = Object.keys(ruleMap);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          recursiveRuleNames = [];

    recursiveRuleNamesFromRule(rule, ruleMap, recursiveRuleNames);

    const ruleNames = recursiveRuleNames; ///

    recursiveRuleNamesMap[ruleName] = ruleNames;
  });

  return recursiveRuleNamesMap;
}

export function leftRecursiveRuleNamesMapFromRuleMap(ruleMap) {
  const leftRecursiveRuleNamesMap = {},
        ruleNames = Object.keys(ruleMap);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          leftRecursiveRuleNames = [];

    leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames);

    const ruleNames = leftRecursiveRuleNames; ///

    leftRecursiveRuleNamesMap[ruleName] = ruleNames;
  });

  return leftRecursiveRuleNamesMap;
}

export function rightRecursiveRuleNamesMapFromRuleMap(ruleMap) {
  const rightRecursiveRuleNamesMap = {},
        ruleNames = Object.keys(ruleMap);

  ruleNames.forEach((ruleName) => {
    const rule = ruleMap[ruleName],
          rightRecursiveRuleNames = [];

    rightRecursiveRuleNamesFromRule(rule, ruleMap, rightRecursiveRuleNames);

    const ruleNames = rightRecursiveRuleNames; ///

    rightRecursiveRuleNamesMap[ruleName] = ruleNames;
  });

  return rightRecursiveRuleNamesMap;
}
