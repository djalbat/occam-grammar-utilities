"use strict";

import { arrayUtilities } from "necessary";

const { match, compress } = arrayUtilities;

import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

export function isCycleIrreducible(cycle, ruleMap) {
  const ruleNames = ruleNamesFromCycle(cycle),
        reducedRules = ruleNames.reduce((reducedRules, ruleName) => {
          const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
                reducedRule = ruleMap[reducedRuleName] || null;

          if (reducedRule !== null) {
            reducedRules.push(reducedRule);
          }

          return reducedRules;
        }, []),
        reducedRulesLength = reducedRules.length,
        cycleIrreducible = (reducedRulesLength === 0); ///

  return cycleIrreducible;
}

export function ruleNamesFromCycle(cycle) {
  const cycleVertexes = cycle.getVertexes(),
        ruleNames = cycleVertexes;  ///

  return ruleNames;
}

export function ruleNamesFromCycles(cycles) {
  const ruleNames = [];

  cycles.forEach((cycle) => {
    const cycleVertexes = cycle.getVertexes(),
          cyclicRuleNames = cycleVertexes;  ///

    cyclicRuleNames.forEach((cyclicRuleName) => {
      const ruleNamesIncludesCyclicRuleName = ruleNames.includes(cyclicRuleName);

      if (!ruleNamesIncludesCyclicRuleName) {
        const ruleName = cyclicRuleName;  ///

        ruleNames.push(ruleName);
      }
    });
  });

  return ruleNames;
}

export function pathFromRuleNameAndCycle(ruleName, cycle) {
  let ruleNames = ruleNamesFromCycle(cycle),
    start,
    end;

  const index = ruleNames.indexOf(ruleName);

  start = 0;

  end = index;  ///

  const leadingRuleNames = ruleNames.slice(start, end);

  start = index;  ///

  const trailingRuleNames = ruleNames.slice(start),
    path = [
      ...trailingRuleNames,
      ...leadingRuleNames
    ];

  return path;
}

export function pathsFromRuleNameAndCycles(ruleName, cycles) {
  const paths = [];

  cycles.forEach((cycle) => {
    const ruleNames = ruleNamesFromCycle(cycle),
          ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

    if (ruleNamesIncludesRuleName) {
      let path = pathFromRuleNameAndCycle(ruleName, cycle);

      let length = path.length;

      while (length > 1) {
        paths.unshift(path);

        path = path.slice();  ///

        path.pop();

        length = path.length;
      }
    }
  });

  compress(paths, (pathA, pathB) => {
    const ruleNamesA = pathA, ///
          ruleNamesB = pathB, ///
          ruleNamesMatch = match(ruleNamesA, ruleNamesB, (ruleNameA, ruleNameB) => {
            const ruleNameAMatchesRuleNameB = (ruleNameA === ruleNameB);

            if (ruleNameAMatchesRuleNameB) {
              return true;
            }
          });

    if (ruleNamesMatch) {
      return true;
    }
  });

  return paths;
}

export function ruleCyclesFromRuleNameAndCycles(ruleName, cycles) {
  const ruleCycles = cycles.reduce((ruleCycles, cycle) => {
    const ruleNames = ruleNamesFromCycle(cycle),
          ruleNamesIncludeRuleName = ruleNames.includes(ruleName);

    if (ruleNamesIncludeRuleName) {
      const ruleCycle = cycle;  ///

      ruleCycles.push(ruleCycle);
    }

    return ruleCycles;
  }, []);

  return ruleCycles;
}
