"use strict";

import { CYCLE_LENGTH_1 } from "./constants";
import { ruleNameFromCycle, indirectRuleNameFromCycle } from "./utilities/cycle";

export default class Context {
  constructor(cycle, cycles, ruleMap, removedRules, replacementRules) {
    this.cycle = cycle;
    this.cycles = cycles;
    this.ruleMap = ruleMap;
    this.removedRules = removedRules;
    this.replacementRules = replacementRules;
  }

  getCycle() {
    return this.cycle;
  }

  getCycles() {
    return this.cycles;
  }

  getRuleMap() {
    return this.ruleMap;
  }

  getRemovedRules() {
    return this.removedRules;
  }

  getReplacementRules() {
    return this.replacementRules;
  }

  isCycleDirect() {
    const cycleLength = this.getCycleLength(),
          cycleDirect = (cycleLength === CYCLE_LENGTH_1);

    return cycleDirect;
  }

  isCycleIndirect() {
    const cycleDirect = this.isCycleDirect(),
          cycleIndirect = !cycleDirect;

    return cycleIndirect;
  }

  getRule() {
    const ruleName = this.getRuleName(),
          rule = this.ruleMap[ruleName];

    return rule;
  }

  getRuleName() {
    const ruleName = ruleNameFromCycle(this.cycle);

    return ruleName;
  }

  getCycleLength() {
    const cycleLength = this.cycle.getLength();

    return cycleLength;
  }

  getIndirectRule() {
    let indirectRule = null;

    const indirectRuleName = this.getIndirectRuleName();

    if (indirectRuleName !== null) {
      indirectRule = this.ruleMap[indirectRuleName];
    }

    return indirectRule;
  }

  getIndirectRuleName() {
    let indirectRuleName = null;

    const cycleIndirect = this.isCycleIndirect();

    if (cycleIndirect) {
      indirectRuleName = indirectRuleNameFromCycle(this.cycle);
    }

    return indirectRuleName;
  }

  permuteCycle() {
    this.cycle = this.cycle.permuted();
  }

  static fromCycle(cycle, context) {
    const cycles = context.getCycles(),
          ruleMap = context.getRuleMap(),
          removedRules = context.getRemovedRules(),
          replacementRules = context.getReplacementRules();

    context = new Context(cycle, cycles, ruleMap, removedRules, replacementRules);  ///

    return context;
  }

  static fromCyclesAndRuleMap(cycles, ruleMap) {
    const cycle = null,
          removedRules = [],
          replacementRules = [],
          context = new Context(cycle, cycles, ruleMap, removedRules, replacementRules);

    return context;
  }
}
