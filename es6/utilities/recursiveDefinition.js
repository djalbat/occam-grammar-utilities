'use strict';

const arrayUtilities = require('../utilities/array');

const { first } = arrayUtilities;

function findIndirectlyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions) {
  let indirectlyLeftRecursiveDefinition = null;

  const leftRecursiveDefinitionsCycle = findLeftRecursiveDefinitionsCycle(leftRecursiveDefinition, recursiveDefinitions);

  if (leftRecursiveDefinitionsCycle !== null) {
    const firstLeftRecursiveDefinition = first(leftRecursiveDefinitionsCycle);

    indirectlyLeftRecursiveDefinition = firstLeftRecursiveDefinition;  ///
  }

  return indirectlyLeftRecursiveDefinition;
}

module.exports = {
  findIndirectlyLeftRecursiveDefinition
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

function findLeftRecursiveDefinitionsCycle(leftRecursiveDefinition, recursiveDefinitions) {
  let leftRecursiveDefinitionsCycle = null;

  const leftRecursiveRuleName = leftRecursiveDefinition.getLeftRecursiveRuleName(),
        recursiveRuleName = leftRecursiveRuleName,  ///
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