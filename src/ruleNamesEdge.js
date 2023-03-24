"use strict";

export default class RuleNamesEdge {
  constructor(sourceRuleName, targetRuleName) {
    this.sourceRuleName = sourceRuleName;
    this.targetRuleName = targetRuleName;
  }

  getSourceRuleName() {
    return this.sourceRuleName;
  }

  getTargetRuleName() {
    return this.targetRuleName;
  }

  match(sourceRuleName, targetRuleName) {
    const matches = ((this.sourceRuleName === sourceRuleName) && (this.targetRuleName === targetRuleName));

    return matches;
  }

  static fromSourceRuleNameAndTargetRuleName(sourceRuleName, targetRuleName) {
    const ruleNamesEdge = new RuleNamesEdge(sourceRuleName, targetRuleName);

    return ruleNamesEdge;
  }
}
