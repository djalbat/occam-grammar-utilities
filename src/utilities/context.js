"use strict";

import DirectlyLeftRecursiveDefinition from "../recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "../recursiveDefinition/left/indirectly";

import { push, leftDifference } from "../utilities/array";

export function addLeftRecursiveDefinition(leftRecursiveDefinition, context) {
  const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

  if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
    const directlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///

    addDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, context);
  }

  const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition);

  if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
    const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///

    addIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, context);
  }
}

export function addDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, context) {
  const { directlyLeftRecursiveDefinitions } = context;

  directlyLeftRecursiveDefinitions.push(directlyLeftRecursiveDefinition);
}

export function addDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context) {
  const directlyLeftRecursiveDefinitionsB = directlyLeftRecursiveDefinitions; ///

  ({directlyLeftRecursiveDefinitions} = context);

  const directlyLeftRecursiveDefinitionsA = directlyLeftRecursiveDefinitions; ///

  push(directlyLeftRecursiveDefinitionsA, directlyLeftRecursiveDefinitionsB);
}

export function addIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, context) {
  const { indirectlyLeftRecursiveDefinitions } = context;

  indirectlyLeftRecursiveDefinitions.push(indirectlyLeftRecursiveDefinition);
}

export function addIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context) {
  const indirectlyLeftRecursiveDefinitionsB = indirectlyLeftRecursiveDefinitions; ///

  ({indirectlyLeftRecursiveDefinitions} = context);

  const indirectlyLeftRecursiveDefinitionsA = indirectlyLeftRecursiveDefinitions; ///

  push(indirectlyLeftRecursiveDefinitionsA, indirectlyLeftRecursiveDefinitionsB);
}

export function findDirectlyLeftRecursiveDefinition(rule, context) {
  if (context === undefined) {
    context = rule; ///
    rule = null;
  }

  const { directlyLeftRecursiveDefinitions } = context,
        directlyLeftRecursiveDefinition = directlyLeftRecursiveDefinitions.find((directlyLeftRecursiveDefinition) => {
          const directlyLeftRecursiveDefinitionRule = directlyLeftRecursiveDefinition.getRule();

          if ((rule === null) || rule === directlyLeftRecursiveDefinitionRule) {
            return true;
          }
        }) || null;

  return directlyLeftRecursiveDefinition;
}

export function findDirectlyLeftRecursiveDefinitions(rule, context) {
  let { directlyLeftRecursiveDefinitions } = context;

  directlyLeftRecursiveDefinitions = directlyLeftRecursiveDefinitions.filter((directlyLeftRecursiveDefinitions) => {  ///
    const directlyLeftRecursiveDefinitionsRule = directlyLeftRecursiveDefinitions.getRule();

    if (directlyLeftRecursiveDefinitionsRule === rule) {
      return true;
    }
  });

  return directlyLeftRecursiveDefinitions;
}

export function findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, context) {
  let { indirectlyLeftRecursiveDefinitions } = context;

  indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.filter((indirectlyLeftRecursiveDefinition) => { ///
    const indirectlyLeftRecursiveDefinitionRule = indirectlyLeftRecursiveDefinition.getRule();

    if (indirectlyLeftRecursiveDefinitionRule === rule) {
      if (leftRecursiveRuleName === null) {
        return true;
      }

      const indirectlyLeftRecursiveDefinitionDefinition = indirectlyLeftRecursiveDefinition.getDefinition(),
          indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

      if ((indirectlyLeftRecursiveDefinitionDefinition !== definition) && (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName)) {
        return true;
      }
    }
  });

  return indirectlyLeftRecursiveDefinitions;
}

export function removeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context) {
  const directlyLeftRecursiveDefinitionsB = directlyLeftRecursiveDefinitions; ///

  ({ directlyLeftRecursiveDefinitions } = context);

  const directlyLeftRecursiveDefinitionsA = directlyLeftRecursiveDefinitions; ///

  leftDifference(directlyLeftRecursiveDefinitionsA, directlyLeftRecursiveDefinitionsB);
}

export function removeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context) {
  const indirectlyLeftRecursiveDefinitionsB = indirectlyLeftRecursiveDefinitions; ///

  ({ indirectlyLeftRecursiveDefinitions } = context);

  const indirectlyLeftRecursiveDefinitionsA = indirectlyLeftRecursiveDefinitions; ///

  leftDifference(indirectlyLeftRecursiveDefinitionsA, indirectlyLeftRecursiveDefinitionsB);
}
