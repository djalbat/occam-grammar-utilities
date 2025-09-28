"use strict";

export function permuteRuleNames(ruleNames, ruleName) {
  let start,
        end;

  const index = ruleNames.indexOf(ruleName);

  start = 0;

  end = index;  ///

  const leadingRuleNames = ruleNames.slice(start, end);

  start = index;  ///

  const trailingRuleNames = ruleNames.slice(start),
        permutedRuleNames = [
          ...trailingRuleNames,
          ...leadingRuleNames
        ];

  return permutedRuleNames;
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
