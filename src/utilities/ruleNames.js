"use strict";

export function retrieveLeftRecursiveRuleNames(lLeftRecursiveRule, LeftRecursiveDefinition, callback) {
  const leftRecursiveRuleNames = [],
        definitions = lLeftRecursiveRule.getDefinitions();

  definitions.forEach((definition) => {
    const definitionLeftRecursiveDefinition = (definition instanceof LeftRecursiveDefinition);

    if (definitionLeftRecursiveDefinition) {
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
