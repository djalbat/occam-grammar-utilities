"use strict";

import { retrieveRecursiveRuleNames } from "./utilities/graph";
import { ruleNameFromCycle, indirectRuleNameFromCycle, leftRecursiveCyclesFromCycles, rightRecursiveCyclesFromCycles } from "./utilities/cycle";

export default class Context {
  constructor(cycles, ruleMap, ruleName, indirectRuleName, recursiveRuleNames, leftRecursiveCycle, leftRecursiveCycles, rightRecursiveCycles) {
    this.cycles = cycles;
    this.ruleMap = ruleMap;
    this.ruleName = ruleName;
    this.indirectRuleName = indirectRuleName;
    this.recursiveRuleNames = recursiveRuleNames;
    this.leftRecursiveCycle = leftRecursiveCycle;
    this.leftRecursiveCycles = leftRecursiveCycles;
    this.rightRecursiveCycles = rightRecursiveCycles;
  }

  getCycles() {
    return this.cycles;
  }

  getRuleMap() {
    return this.ruleMap;
  }

  getRuleName() {
    return this.ruleName;
  }

  getIndirectRuleName() {
    return this.indirectRuleName;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
  }

  getLeftRecursiveCycle() {
    return this.leftRecursiveCycle;
  }

  getLeftRecursiveCycles() {
    return this.leftRecursiveCycles;
  }

  getRightRecursiveCycles() {
    return this.rightRecursiveCycles;
  }

  getLeftRecursiveCycleLength() {
    const leftRecursiveCycleLength = this.leftRecursiveCycle.getLength();

    return leftRecursiveCycleLength;
  }

  getRule() {
    const ruleName = this.getRuleName(),
          rule = this.ruleMap[ruleName];

    return rule;
  }

  getIndirectRule() {
    let indirectRule = null;

    const indirectRuleName = this.getIndirectRuleName();

    if (indirectRuleName !== null) {
      indirectRule = this.ruleMap[indirectRuleName];
    }

    return indirectRule;
  }

  static fromLeftRecursiveCycleCyclesGraphAndRuleMap(leftRecursiveCycle, cycles, graph, ruleMap) {
    const cycle = leftRecursiveCycle, ///
          ruleName = ruleNameFromCycle(cycle),
          indirectRuleName = indirectRuleNameFromCycle(cycle),
          recursiveRuleNames = retrieveRecursiveRuleNames(ruleName, graph),
          leftRecursiveCycles = leftRecursiveCyclesFromCycles(cycles),
          rightRecursiveCycles = rightRecursiveCyclesFromCycles(cycles),
          context = new Context(cycles, ruleMap, ruleName, indirectRuleName, recursiveRuleNames, leftRecursiveCycle, leftRecursiveCycles, rightRecursiveCycles);

    return context;
  }
}
