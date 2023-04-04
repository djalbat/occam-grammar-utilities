"use strict";

import DirectlyLeftRecursiveDefinition from "../recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "../recursiveDefinition/left/indirectly";

import { push, leftDifference } from "../utilities/array";
import { isDefinitionLeftRecursive } from "../utilities/definition";

export function addLeftRecursiveDefinition(addedLeftRecursiveDefinition, context) {
  const { leftRecursiveDefinitions } = context;

  leftRecursiveDefinitions.push(addedLeftRecursiveDefinition);
}

export function addLeftRecursiveDefinitions(addedLeftRecursiveDefinitions, context) {
  const { leftRecursiveDefinitions } = context;

  push(leftRecursiveDefinitions, addedLeftRecursiveDefinitions);
}

export function findLeftRecursiveDefinitions(rule, callback) {
  const definitions = rule.getDefinitions(),
        leftRecursiveDefinitions = definitions.filter((definition) => {  ///
          const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

          if (definitionLeftRecursive) {
            const leftRecursiveDefinition = definition,
                  found = callback(leftRecursiveDefinition);

            if (found) {
              return true;
            }
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
    context = callback; ///

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
