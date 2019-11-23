'use strict';

const arrayUtilities = require('../utilities/array');

const { first } = arrayUtilities;

function findImplicitlyLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions) {
  let implicitlyLeftRecursiveDefinition = null;

  const leftRecursiveDefinitionsCycle = findLeftRecursiveDefinitionsCycle(leftRecursiveRuleName, recursiveDefinitions);

  if (leftRecursiveDefinitionsCycle !== null) {
    const firstLeftRecursiveDefinition = first(leftRecursiveDefinitionsCycle);

    implicitlyLeftRecursiveDefinition = firstLeftRecursiveDefinition;  ///
  }

  return implicitlyLeftRecursiveDefinition;
}

module.exports = {
  findImplicitlyLeftRecursiveDefinition
};

function findRecursiveDefinitionsCycle(recursiveRuleName, recursiveDefinitions) {
  let recursiveDefinitionsCycle = null;

  recursiveDefinitions.some((recursiveDefinition, index) => {
    const recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
          recursiveDefinitionRuleNameLeftRecursiveRuleName = (recursiveDefinitionRuleName === recursiveRuleName);

    if (recursiveDefinitionRuleNameLeftRecursiveRuleName) {
      recursiveDefinitionsCycle = recursiveDefinitions.slice(index);

      return true;
    }
  });

  return recursiveDefinitionsCycle;
}

function findLeftRecursiveDefinitionsCycle(leftRecursiveRuleName, recursiveDefinitions) {
  let leftRecursiveDefinitionsCycle = null;

  const recursiveRuleName = leftRecursiveRuleName,  ///
        recursiveDefinitionsCycle = findRecursiveDefinitionsCycle(recursiveRuleName, recursiveDefinitions);

  if (recursiveDefinitionsCycle !== null) {
    const recursiveDefinitionsCycleLeftRecursive = isRecursiveDefinitionsCycleLeftRecursive(recursiveDefinitionsCycle);

    if (recursiveDefinitionsCycleLeftRecursive) {
      leftRecursiveDefinitionsCycle = recursiveDefinitionsCycle;  ///
    }
  }

  return leftRecursiveDefinitionsCycle;
}

function isRecursiveDefinitionsCycleLeftRecursive(recursiveDefinitionsCycle) {
  const recursiveDefinitionsCycleLeftRecursive = recursiveDefinitionsCycle.every((recursiveDefinition) => {
    const recursiveDefinitionLeftRecursive = recursiveDefinition.isLeftRecursive();

    if (recursiveDefinitionLeftRecursive) {
      return true;
    }
  });

  return recursiveDefinitionsCycleLeftRecursive;
}