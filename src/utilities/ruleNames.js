"use strict";

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
