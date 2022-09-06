"use strict";

import RecursiveDefinition from "./recursiveDefinition";
import LeftRecursiveDefinition from "./recursiveDefinition/left";
import DirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/indirectly";

export default function retrieveLeftRecursiveDefinitions(rule, context, recursiveDefinitions = []) {
  const definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    const recursiveDefinition = retrieveLeftRecursiveDefinition(rule, definition, context, recursiveDefinitions);

    if (recursiveDefinition !== null) {
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
          const { ruleMap } = context,
                ruleName = recursiveRuleName,  ///
                rule = ruleMap[ruleName] || null; ///

          if (rule !== null) {
            const recursiveDefinitions = previousRecursiveDefinitions;  ///

            retrieveLeftRecursiveDefinitions(rule, context, recursiveDefinitions);
          }
        }
      });
    }
  });
}

function retrieveLeftRecursiveDefinition(rule, definition, context, recursiveDefinitions) {
  let recursiveDefinition = null;

  if (recursiveDefinition === null) {
    let indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions);

    if (indirectlyLeftRecursiveDefinition !== null) {
      const { indirectlyLeftRecursiveDefinitions } = context,
            indirectlyLeftRecursiveDefinitionsB = indirectlyLeftRecursiveDefinitions, ///
            indirectlyLeftRecursiveDefinitionA = indirectlyLeftRecursiveDefinition; ///

      indirectlyLeftRecursiveDefinitionsB.some((indirectlyLeftRecursiveDefinitionB) => {
        const indirectlyLeftRecursiveDefinitionAEquivalentToRecursiveDefinitionB = indirectlyLeftRecursiveDefinitionA.isEquivalentTo(indirectlyLeftRecursiveDefinitionB);

        if (indirectlyLeftRecursiveDefinitionAEquivalentToRecursiveDefinitionB) {
          indirectlyLeftRecursiveDefinition = null;

          return true;
        }
      });

      if (indirectlyLeftRecursiveDefinition !== null) {
        indirectlyLeftRecursiveDefinitions.push(indirectlyLeftRecursiveDefinition);
      }
    }

    recursiveDefinition = indirectlyLeftRecursiveDefinition;  ///
  }

  if (recursiveDefinition === null) {
    const directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleAndDefinition(rule, definition);

    if (directlyLeftRecursiveDefinition !== null) {
      const { directlyLeftRecursiveDefinitions } = context;

      directlyLeftRecursiveDefinitions.push(directlyLeftRecursiveDefinition);
    }

    recursiveDefinition = directlyLeftRecursiveDefinition;  ///
  }

  if (recursiveDefinition === null) {
    const leftRecursiveDefinition = LeftRecursiveDefinition.fromRuleAndDefinition(rule, definition);

    recursiveDefinition = leftRecursiveDefinition;  ///
  }

  if (recursiveDefinition === null) {
    recursiveDefinition = RecursiveDefinition.fromRuleAndDefinition(rule, definition);
  }

  return recursiveDefinition;
}
