"use strict";

import RecursiveDefinition from "./recursiveDefinition";
import LeftRecursiveDefinition from "./recursiveDefinition/left";
import DirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/indirectly";

export default function retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    const recursiveDefinition = IndirectlyLeftRecursiveDefinition.fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions) ||
                                DirectlyLeftRecursiveDefinition.fromRuleAndDefinition(rule, definition) ||
                                LeftRecursiveDefinition.fromRuleAndDefinition(rule, definition) ||
                                RecursiveDefinition.fromRuleAndDefinition(rule, definition);

    if (recursiveDefinition !== null) {
      if (recursiveDefinition instanceof LeftRecursiveDefinition) {
        const leftRecursiveDefinition = recursiveDefinition;  ///

        leftRecursiveDefinitions.push(leftRecursiveDefinition);
      }

      const previousRecursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ],
            previousRecursiveRuleNames = previousRecursiveDefinitions.map((previousRecursiveDefinition) => {
              const previousRecursiveDefinitionRuleName = previousRecursiveDefinition.getRuleName(),
                    previousRecursiveRuleName = previousRecursiveDefinitionRuleName;  ///

              return previousRecursiveRuleName;
            }),
            recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames();

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const previousRecursiveRuleNamesIncludesRecursiveRuleName = previousRecursiveRuleNames.includes(recursiveRuleName);

        if (!previousRecursiveRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = ruleMap[ruleName] || null; ///

          if (rule !== null) {
            const recursiveDefinitions = previousRecursiveDefinitions;  ///

            retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);
          }
        }
      });
    }
  });
}
