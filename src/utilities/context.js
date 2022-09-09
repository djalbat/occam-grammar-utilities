"use strict";

import DirectlyLeftRecursiveDefinition from "../recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "../recursiveDefinition/left/indirectly";

import { push, leftDifference } from "../utilities/array";

export function addLeftRecursiveDefinition(addedLeftRecursiveDefinition, context) {
  const { leftRecursiveDefinitions } = context;

  leftRecursiveDefinitions.push(addedLeftRecursiveDefinition);
}

export function addLeftRecursiveDefinitions(addedLeftRecursiveDefinitions, context) {
  const { leftRecursiveDefinitions } = context;

  push(leftRecursiveDefinitions, addedLeftRecursiveDefinitions);
}

export function findLeftRecursiveDefinitions(rule, context) {
  let { leftRecursiveDefinitions } = context;

  leftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition) => {  ///
    if (rule === null) {
      return true;
    }

    const leftRecursiveDefinitionsRule = leftRecursiveDefinition.getRule();

    if (leftRecursiveDefinitionsRule === rule) {
      return true;
    }
  });

  return leftRecursiveDefinitions;
}

export function removeLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, context) {
  const { leftRecursiveDefinitions } = context;

  leftDifference(leftRecursiveDefinitions, removedLeftRecursiveDefinitions);
}

export function findDirectlyLeftRecursiveDefinition(rule, context) {
  if (context === undefined) {
    context = rule; ///
    rule = null;
  }

  const { leftRecursiveDefinitions } = context,
        directlyLeftRecursiveDefinition = leftRecursiveDefinitions.find((leftRecursiveDefinition) => {
          const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

          if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
            if (rule === null) {
              return true;
            }

            const directlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
                  directlyLeftRecursiveDefinitionRule = directlyLeftRecursiveDefinition.getRule();

            if (rule === directlyLeftRecursiveDefinitionRule) {
              return true;
            }
          }
        }) || null;

  return directlyLeftRecursiveDefinition;
}

export function findDirectlyLeftRecursiveDefinitions(rule, context) {
  const { leftRecursiveDefinitions } = context,
      directlyLeftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition) => {
        const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

        if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
          if (rule === null) {
            return true;
          }

          const directlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
              directlyLeftRecursiveDefinitionsRule = directlyLeftRecursiveDefinition.getRule();

          if (directlyLeftRecursiveDefinitionsRule === rule) {
            return true;
          }
        }
      });

  return directlyLeftRecursiveDefinitions;
}

export function findIndirectlyLeftRecursiveDefinitions(rule, callback, context) {
  if (context === undefined) {
    context = callback;
    callback = (indirectlyLeftRecursiveDefinition) => true
  }

  const { leftRecursiveDefinitions } = context,
        indirectlyLeftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition) => {
          const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition);

          if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
            if (rule === null) {
              return true;
            }

            const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
                  indirectlyLeftRecursiveDefinitionRule = indirectlyLeftRecursiveDefinition.getRule();

            if (indirectlyLeftRecursiveDefinitionRule === rule) {
              const found = callback(indirectlyLeftRecursiveDefinition);

              if (found) {
                return true;
              }
            }
          }
        });

  return indirectlyLeftRecursiveDefinitions;
}

export function retrieveGreatestIndirectlyLeftRecursiveDefinition(context) {
  let greatestIndirectlyLeftRecursiveDefinition = null;

  const { leftRecursiveDefinitions } = context;

  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
    const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///

      if (greatestIndirectlyLeftRecursiveDefinition === null) {
        greatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
      } else {
        const indirectlyLeftRecursiveDefinitionGreaterThanGreatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.isGreaterThan(greatestIndirectlyLeftRecursiveDefinition);

        if (indirectlyLeftRecursiveDefinitionGreaterThanGreatestIndirectlyLeftRecursiveDefinition) {
          greatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
        }
      }
    }
  });

  return greatestIndirectlyLeftRecursiveDefinition;
}
