"use strict";

import { compress } from "../utilities/array";

export function pathsFromRuleNameAndCycles(ruleName, cycles) {
  const paths = [];

  cycles.forEach((cycle) => {
    const cycleLength = cycle.length;

    for (let length = 1; length <= cycleLength; length++) {
      const path = pathFromRuleNameAndCycle(ruleName, cycle, length);

      paths.push(path);
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

export function pathFromRuleNameAndCycle(ruleName, cycle, length = Infinity) {
  let path;

  let ruleNames = cycle,
      start,
      end;

  const index = cycle.indexOf(ruleName);

  start = 0;

  end = index;  ///

  const leadingRuleNames = ruleNames.slice(start, end);

  start = index;  ///

  const trailingRuleNames = ruleNames.slice(start);

  path = [
    ...trailingRuleNames,
    ...leadingRuleNames
  ];

  start = 0;

  end = length; ///

  path = path.slice(start, end);

  return path;
}

function arePathsEqual(pathA, pathB) {
  let pathsEqual = false;

  const pathALength = pathA.length,
        pathBLength = pathB.length;

  if (pathALength === pathBLength) {
    const ruleNamesA = pathA, ///
          ruleNamesB = pathB; ///

    pathsEqual = ruleNamesA.forEach((ruleNameA, index) => {
      const ruleNameB = ruleNamesB[index];

      if (ruleNameA === ruleNameB) {
        return true;
      }
    });
  }

  return pathsEqual;
}
