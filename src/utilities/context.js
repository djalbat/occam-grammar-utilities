"use strict";

import DirectlyLeftRecursiveDefinition from "../recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "../recursiveDefinition/left/indirectly";

import { push, leftDifference } from "../utilities/array";

export function addLeftRecursiveDefinition(leftRecursiveDefinition, context) {
  const { leftRecursiveDefinitions } = context;

  leftRecursiveDefinitions.push(leftRecursiveDefinition);
}

export function addDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, context) {
  const { leftRecursiveDefinitions } = context,
        leftRecursiveDefinition = directlyLeftRecursiveDefinition;  ///

  leftRecursiveDefinitions.push(leftRecursiveDefinition);
}

export function addDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context) {
  const { leftRecursiveDefinitions } = context,
        leftRecursiveDefinitionsA = leftRecursiveDefinitions, ///
        leftRecursiveDefinitionsB = directlyLeftRecursiveDefinitions; ///

  push(leftRecursiveDefinitionsA, leftRecursiveDefinitionsB);
}

export function addIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, context) {
  const { leftRecursiveDefinitions } = context,
        leftRecursiveDefinition = indirectlyLeftRecursiveDefinition;  ///

  leftRecursiveDefinitions.push(leftRecursiveDefinition);
}

export function addIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context) {
  const { leftRecursiveDefinitions } = context,
        leftRecursiveDefinitionsA = leftRecursiveDefinitions, ///
        leftRecursiveDefinitionsB = indirectlyLeftRecursiveDefinitions; ///

  push(leftRecursiveDefinitionsA, leftRecursiveDefinitionsB);
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

export function findDirectlyLeftRecursiveDefinition(rule, context) {
  if (context === undefined) {
    context = rule; ///
    rule = null;
  }

  const { leftRecursiveDefinitions } = context,
        directlyLeftRecursiveDefinition = leftRecursiveDefinitions.find((leftRecursiveDefinition) => {
          if (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition) {
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
          if (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition) {
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
  const { leftRecursiveDefinitions } = context,
        indirectlyLeftRecursiveDefinitions = leftRecursiveDefinitions.filter((leftRecursiveDefinition) => {
          if (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition) {
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

export function removeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context) {
  const { leftRecursiveDefinitions } = context,
        leftRecursiveDefinitionsA = leftRecursiveDefinitions, ///
        leftRecursiveDefinitionsB = directlyLeftRecursiveDefinitions; ///

  leftDifference(leftRecursiveDefinitionsA, leftRecursiveDefinitionsB);
}

export function removeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context) {
  const { leftRecursiveDefinitions } = context,
        leftRecursiveDefinitionsA = leftRecursiveDefinitions, ///
        leftRecursiveDefinitionsB = indirectlyLeftRecursiveDefinitions; ///

  leftDifference(leftRecursiveDefinitionsA, leftRecursiveDefinitionsB);
}

export function retrieveGreatestIndirectlyLeftRecursiveDefinition(context) {
  let greatestIndirectlyLeftRecursiveDefinition = null;

  const { leftRecursiveDefinitions } = context;

  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
    if (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition) {
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
