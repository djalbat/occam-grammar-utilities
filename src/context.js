"use strict";

import { arrayUtilities } from "necessary";

import { CYCLE_LENGTH_1 } from "./constants";
import { retrieveRecursiveRuleNames } from "./utilities/graph";
import { ruleNameFromCycle, indirectRuleNameFromCycle, leftRecursiveCyclesFromCycles, rightRecursiveCyclesFromCycles } from "./utilities/cycle";

const { filter } = arrayUtilities;

export default class Context {
  constructor(cycle, cycles, ruleMap, ruleName, indirectRuleName, incidentalRuleNames) {
    this.cycle = cycle;
    this.cycles = cycles;
    this.ruleMap = ruleMap;
    this.ruleName = ruleName;
    this.indirectRuleName = indirectRuleName;
    this.incidentalRuleNames = incidentalRuleNames;
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

  getIncidentalRuleNames() {
    return this.incidentalRuleNames;
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

  getLeftRecursiveCycle() {
    const leftRecursiveCycle = this.cycle;  ///

    return leftRecursiveCycle;
  }

  getLeftRecursiveCycles() {
    const leftRecursiveCycles = leftRecursiveCyclesFromCycles(this.cycles);

    return leftRecursiveCycles;
  }

  getRightRecursiveCycles() {
    const rightRecursiveCycles = rightRecursiveCyclesFromCycles(this.cycles);

    return rightRecursiveCycles;
  }

  static fromLeftRecursiveCycleCyclesGraphAndRuleMap(leftRecursiveCycle, cycles, graph, ruleMap) {
    const cycle = leftRecursiveCycle, ///
          ruleName = ruleNameFromCycle(cycle),
          indirectRuleName = indirectRuleNameFromCycle(cycle),
          incidentalRuleNames = incidentalRuleNamesFromGraphRuleNameAndIndirectRuleName(graph, ruleName, indirectRuleName),
          context = new Context(cycle, cycles, ruleMap, ruleName, indirectRuleName, incidentalRuleNames);  ///

    return context;
  }
}

function incidentalRuleNamesFromGraphRuleNameAndIndirectRuleName(graph, ruleName, indirectRuleName) {
  const recursiveRuleNames = retrieveRecursiveRuleNames(ruleName, graph),
        incidentalRuleNames = [
          ...recursiveRuleNames
        ];

  filter(incidentalRuleNames, (incidentalRuleName) => {
    const incidentalRuleNameRuleName = (incidentalRuleName === ruleName),
          incidentalRuleNameIndirectRuleName = (incidentalRuleName === indirectRuleName);

    if (!incidentalRuleNameRuleName && !incidentalRuleNameIndirectRuleName) {
      return true;
    }
  });

  return incidentalRuleNames;
}
