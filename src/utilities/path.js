"use strict";

import { arrayUtilities } from "necessary";

import { ruleNamesFromCycle } from "../utilities/cycle";

const { match, filter, compress } = arrayUtilities;

export function arePathsEqual(pathA, pathB) {
  const ruleNamesA = pathA, ///
        ruleNamesB = pathB, ///
        ruleNamesMatch = match(ruleNamesA, ruleNamesB, (ruleNameA, ruleNameB) => {
          if (ruleNameA === ruleNameB) {
            return true;
          }
        }),
        pathsEqual = ruleNamesMatch;  ///

  return pathsEqual;
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
  const paths = cycles.map((cycle) => {
    const path = pathFromRuleNameAndCycle(ruleName, cycle);

    return path;
  });

  filter(paths, (path) => {
    const ruleNames = path, ///
          ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

    if (ruleNamesIncludesRuleName) {
      return true;
    }
  });

  let length;

  paths.forEach((path) => {
    length = path.length;

    while (length > 2) {
      path = path.slice();  ///

      path.pop();

      paths.push(path);

      length = path.length;
    }
  });

  compress(paths, (pathA, pathB) => {
    const pathsEqual = arePathsEqual(pathA, pathB);

    if (pathsEqual) {
      return true;
    }
  });

  return paths;
}
