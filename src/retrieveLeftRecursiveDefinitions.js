"use strict";

import { arrayUtilities } from "necessary";

import RecursiveDefinition from "./recursiveDefinition";
import LeftRecursiveDefinition from "./recursiveDefinition/left";
import DirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/indirectly";

const { find } = arrayUtilities;

export default function retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, context) {
  const { ruleMap, leftRecursiveDefinitions } = context,
        definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    const recursiveDefinition = retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, context);

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

            retrieveLeftRecursiveDefinitions(rule, recursiveDefinitions, context);
          }
        }
      });
    }
  });
}

function retrieveLeftRecursiveDefinition(rule, definition, recursiveDefinitions, context) {
  let recursiveDefinition = IndirectlyLeftRecursiveDefinition.fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions) ||
                            DirectlyLeftRecursiveDefinition.fromRuleAndDefinition(rule, definition) ||
                            LeftRecursiveDefinition.fromRuleAndDefinition(rule, definition) ||
                            RecursiveDefinition.fromRuleAndDefinition(rule, definition);

  if (recursiveDefinition !== null) {
    if (false) {
      ///
    } else if (recursiveDefinition instanceof IndirectlyLeftRecursiveDefinition) {
      const indirectlyLeftRRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(context);

      indirectlyLeftRRecursiveDefinitions.some((indirectlyLeftRRecursiveDefinition) => {
        const indirectlyLeftRecursiveDefinitionEquivalentToRecursiveDefinition = indirectlyLeftRRecursiveDefinition.isEquivalentTo(recursiveDefinition);  ///

        if (indirectlyLeftRecursiveDefinitionEquivalentToRecursiveDefinition) {
          recursiveDefinition = null;

          return true;
        }
      });
    } else if (recursiveDefinition instanceof DirectlyLeftRecursiveDefinition) {
      const directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(definition, context);

      directlyLeftRecursiveDefinitions.some((directlyLeftRecursiveDefinition) => {  ///
        recursiveDefinition = null;

        return true;
      });
    }
  }

  return recursiveDefinition;
}

function findDirectlyLeftRecursiveDefinitions(definition, context) {
  const { leftRecursiveDefinitions } = context,
        directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
          const leftRecursiveDefinitionDefinition = leftRecursiveDefinition.getDefinition();

          if (leftRecursiveDefinitionDefinition === definition) {
            const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

            if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
              return true;
            }
          }
        });

  return directlyLeftRecursiveDefinitions;
}

function findIndirectlyLeftRecursiveDefinitions(context) {
  const { leftRecursiveDefinitions } = context,
        indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
          const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition);

          if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
            return true;
          }
        });

  return indirectlyLeftRecursiveDefinitions;
}
