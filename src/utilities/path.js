"use strict";

import { arrayUtilities } from "necessary";

import { ruleNamesFromCycle } from "../utilities/ruleNames";

const { match, compress } = arrayUtilities;

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
