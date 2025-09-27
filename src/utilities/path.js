"use strict";

import { arrayUtilities } from "necessary";

import { permuteRuleNames } from "../utilities/ruleNames";
import { ruleNamesFromCycle } from "../utilities/cycle";
import { ruleNamePartFromRuleName } from "../utilities/part";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

const { last, match, compress } = arrayUtilities;

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

export function reducedRuleNameFromPath(path) {
  const ruleNames = path, ///
        lastRuleName = last(ruleNames),
        ruleName = lastRuleName, ///
        reducedRuleName = reducedRuleNameFromRuleName(ruleName);

  return reducedRuleName;
}

export function pathsFromRuleNameAndCycles(ruleName, cycles, ruleMap, ruleNamesMap) {
  const paths = cycles.reduce((paths, cycle) => {
    const ruleNames = ruleNamesFromCycle(cycle),
          ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

    if (ruleNamesIncludesRuleName) {
      const permutedRuleNames = permuteRuleNames(ruleNames, ruleName),
            path = permutedRuleNames; ///

      paths.push(path);
    }

    return paths;
  }, []);

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

  ruleName = null;

  paths.sort((pathA, pathB) => {
    const difference = differenceFromPaths(pathA, pathB, ruleName, ruleMap, ruleNamesMap);

    return difference;
  });

  return paths;
}

export function reducedRuleNamePartFromPath(path) {
  const reducedRuleName = reducedRuleNameFromPath(path),
        reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName);

  return reducedRuleNamePart;
}

function differenceFromPaths(pathA, pathB, ruleName, ruleMap, ruleNamesMap) {
  let difference;

  const pathALength = pathA.length,
        pathBLength = pathB.length;

  if ((pathALength === 0) && (pathBLength === 0)) {
    difference = 0;
  } else if (pathALength === 0) {
    difference = +1;
  } else if (pathBLength === 0) {
    difference = -1;
  } else {
    const ruleNamesA = pathA.slice(),
          ruleNamesB = pathB.slice(),
          ruleNameA = ruleNamesA.shift(),
          ruleNameB = ruleNamesB.shift();

    if (ruleNameA === ruleNameB) {
      pathA = ruleNamesA; ///

      pathB = ruleNamesB; ///

      ruleName = ruleNameA; ///

      difference = differenceFromPaths(pathA, pathB, ruleName, ruleMap, ruleNamesMap);
    } else {
      const ruleNames = ruleNamesMap[ruleName],
            indexA = ruleNames.indexOf(ruleNameA),
            indexB = ruleNames.indexOf(ruleNameB);

      difference = (indexA - indexB);
    }
  }

  return difference;
}
