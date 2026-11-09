"use strict";

import { CYCLE_LENGTH_1 } from "./constants";
import { retrieveRecursiveRuleNames } from "./utilities/graph";
import { ruleNameFromCycle, indirectRuleNameFromCycle } from "./utilities/cycle";

export default class Context {
  constructor(cycle, cycles, ruleMap, ruleName, indirectRuleName, recursiveRuleNames) {
    this.cycle = cycle;
    this.cycles = cycles;
    this.ruleMap = ruleMap;
    this.ruleName = ruleName;
    this.indirectRuleName = indirectRuleName;
    this.recursiveRuleNames = recursiveRuleNames;
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

  getRuleName() {
    return this.ruleName;
  }

  getIndirectRuleName() {
    return this.indirectRuleName;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
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

  static fromCycleCyclesGraphAndRuleMap(cycle, cycles, graph, ruleMap) {
    const ruleName = ruleNameFromCycle(cycle),
          indirectRuleName = indirectRuleNameFromCycle(cycle),
          recursiveRuleNames = retrieveRecursiveRuleNames(ruleName, graph),
          context = new Context(cycle, cycles, ruleMap, ruleName, indirectRuleName, recursiveRuleNames);  ///

    return context;
  }
}
