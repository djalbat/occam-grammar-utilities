"use strict";

import RuleNamesEdge from "./ruleNamesEdge";

import { recursiveRuleNamesFromRule, leftRecursiveRuleNamesFromRule } from "./utilities/rule";

export default class RuleNameGraph {
  constructor(ruleNamesEdges) {
    this.ruleNamesEdges = ruleNamesEdges;
  }

  getRuleNamesEdges() {
    return this.ruleNamesEdges;
  }

  static fromRuleMapAndStartRule(ruleMap, startRule) {
    const rule = startRule, ///
          ruleNames = [],
          ruleNamesEdges = [];

    addRuleNamesEdges(rule, ruleNames, ruleNamesEdges, ruleMap);

    const ruleNameGraph = new RuleNameGraph(ruleNamesEdges);

    return ruleNameGraph;
  }
}

function addRuleNamesEdges(rule, ruleNames, ruleNamesEdges, ruleMap) {
  const ruleName = rule.getName(),
        ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

  if (ruleNamesIncludesRuleName) {
    return;
  }

  ruleNames = [
    ...ruleNames,
    ruleName
  ];

  const recursiveRuleNames = recursiveRuleNamesFromRule(rule),
        leftRecursiveRuleNames = leftRecursiveRuleNamesFromRule(rule);

  recursiveRuleNames.forEach((recursiveRuleName) => {
    const leftRecursiveRuleNamesIncludesRecursiveRuleName = leftRecursiveRuleNames.includes(recursiveRuleName);

    if (leftRecursiveRuleNamesIncludesRecursiveRuleName) {
      const leftRecursiveRuleName = recursiveRuleName,  ///
            sourceRuleName = ruleName,  ///
            targetRuleName = leftRecursiveRuleName, ///
            ruleNamesEdge = RuleNamesEdge.fromSourceRuleNameAndTargetRuleName(sourceRuleName, targetRuleName);

      ruleNamesEdges.push(ruleNamesEdge);
    }

    const recursiveRule = ruleMap[recursiveRuleName] || null;

    if (recursiveRule !== null) {
      const rule = recursiveRule; ///

      addRuleNamesEdges(rule, ruleNames, ruleNamesEdges, ruleMap);
    }
  });
}
