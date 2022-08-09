"use strict";

export function retrieveLeftRecursiveRuleNames(lLeftRecursiveRule, LeftRecursiveDefinition, callback) {
  const leftRecursiveRuleNames = [],
        definitions = lLeftRecursiveRule.getDefinitions();

  definitions.forEach((definition) => {
    if (definition instanceof LeftRecursiveDefinition) {
      const leftRecursiveDefinition = definition, ///
            ruleName = callback(leftRecursiveDefinition),
            leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

      if (!leftRecursiveRuleNamesIncludesRuleName) {
        const leftRecursiveRuleName = ruleName;  ///

        leftRecursiveRuleNames.push(leftRecursiveRuleName);
      }
    }
  });

  return leftRecursiveRuleNames;
}
