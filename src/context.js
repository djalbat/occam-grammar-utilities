"use strict";

import { arrayUtilities } from "necessary";

import { CYCLE_LENGTH_1 } from "./constants";
import { retrieveRecursiveRuleNames } from "./utilities/graph";
import { ruleNameFromCycle, indirectRuleNameFromCycle, leftRecursiveCyclesFromCycles, rightRecursiveCyclesFromCycles } from "./utilities/cycle";

const { filter } = arrayUtilities;

export default class Context {
  constructor(cycles, ruleMap, ruleName, indirectRuleName, leftRecursiveCycle, leftRecursiveCycles, rightRecursiveCycles, incidentalRuleNames) {
    this.cycles = cycles;
    this.ruleMap = ruleMap;
    this.ruleName = ruleName;
    this.indirectRuleName = indirectRuleName;
    this.leftRecursiveCycle = leftRecursiveCycle;
    this.leftRecursiveCycles = leftRecursiveCycles;
    this.rightRecursiveCycles = rightRecursiveCycles;
    this.incidentalRuleNames = incidentalRuleNames;
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

  getLeftRecursiveCycle() {
    return this.leftRecursiveCycle;
  }

  getLeftRecursiveCycles() {
    return this.leftRecursiveCycles;
  }

  getRightRecursiveCycles() {
    return this.rightRecursiveCycles;
  }

  getIncidentalRuleNames() {
    return this.incidentalRuleNames;
  }

  getRule() {
    const ruleName = this.getRuleName(),
          rule = this.ruleMap[ruleName];

    return rule;
  }

  getRuleNames() {
    const ruleNames = [
      ...this.incidentalRuleNames,
    ];

    if (this.indirectRuleName !== null) {
      ruleNames.unshift(this.indirectRuleName);
    }

    ruleNames.unshift(this.ruleName);

    return ruleNames;
  }

  getCycleLength() {
    const leftRecursiveCycleLength = this.leftRecursiveCycle.getLength();

    return leftRecursiveCycleLength;
  }

  getIndirectRule() {
    let indirectRule = null;

    const indirectRuleName = this.getIndirectRuleName();

    if (indirectRuleName !== null) {
      indirectRule = this.ruleMap[indirectRuleName];
    }

    return indirectRule;
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

  static fromLeftRecursiveCycleCyclesGraphAndRuleMap(leftRecursiveCycle, cycles, graph, ruleMap) {
    const cycle = leftRecursiveCycle, ///
          ruleName = ruleNameFromCycle(cycle),
          indirectRuleName = indirectRuleNameFromCycle(cycle),
          incidentalRuleNames = incidentalRuleNamesFromGraphAndRuleName(graph, ruleName),
          leftRecursiveCycles = leftRecursiveCyclesFromCycles(cycles),
          rightRecursiveCycles = rightRecursiveCyclesFromCycles(cycles),
          context = new Context(cycles, ruleMap, ruleName, indirectRuleName, leftRecursiveCycle, leftRecursiveCycles, rightRecursiveCycles, incidentalRuleNames);

    return context;
  }
}

function incidentalRuleNamesFromGraphAndRuleName(graph, ruleName) {
  const recursiveRuleNames = retrieveRecursiveRuleNames(ruleName, graph),
        incidentalRuleNames = [
          ...recursiveRuleNames
        ];

  filter(incidentalRuleNames, (incidentalRuleName) => {
    const incidentalRuleNameRuleName = (incidentalRuleName === ruleName);

    if (!incidentalRuleNameRuleName) {
      return true;
    }
  });

  return incidentalRuleNames;
}
