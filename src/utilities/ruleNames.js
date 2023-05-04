"use strict";

export function ruleNamesFromCycles(cycles) {
  const ruleNames = [];

  cycles.forEach((cycle) => {
    const cyclicRuleNames = cycle;  ///

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

export function forEachRuleNameAndLeftRecursiveRuleName(ruleNames, callback) {
  const ruleNamesLength = ruleNames.length,
        lastIndex = ruleNamesLength - 1;

  ruleNames.forEach((ruleName, index) => {
    const nextIndex = (index === lastIndex) ?
                        0 :
                          index + 1,
          leftRecursiveRuleName = ruleNames[nextIndex];

    callback(ruleName, leftRecursiveRuleName, index);
  });
}
