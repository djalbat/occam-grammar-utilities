'use strict';

const arrayUtilities = require('../utilities/array');

const { first } = arrayUtilities;

function findImplicitlyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveRuleNames) {
  let implicitlyLeftRecursiveDefinition = null;

  const leftRecursiveDefinitionsCycle = findLeftRecursiveDefinitionsCycle(leftRecursiveDefinition, recursiveRuleNames);

  if (leftRecursiveDefinitionsCycle !== null) {
    const firstLeftRecursiveDefinition = first(leftRecursiveDefinitionsCycle);

    implicitlyLeftRecursiveDefinition = firstLeftRecursiveDefinition;  ///
  }

  return implicitlyLeftRecursiveDefinition;
}

module.exports = {
  findImplicitlyLeftRecursiveDefinition
};

function findRecursiveDefinitionsCycle(leftRecursiveDefinition, recursiveRuleNames) {
  let recursiveDefinitionsCycle = null;

  const leftRecursiveDefinitionRuleName = leftRecursiveDefinition.getRuleName();

  recursiveRuleNames.some((recursiveRuleName, index) => {
    const leftRecursiveDefinitionRuleNameRecursiveRuleName = (leftRecursiveDefinitionRuleName === recursiveRuleName);

    if (leftRecursiveDefinitionRuleNameRecursiveRuleName) {
      recursiveDefinitionsCycle = recursiveRuleNames.slice(index);

      return true;
    }
  });

  return recursiveDefinitionsCycle;
}

function findLeftRecursiveDefinitionsCycle(leftRecursiveDefinition, recursiveRuleNames) {
  let leftRecursiveDefinitionsCycle = null;

  const leftRecursiveRuleName = leftRecursiveDefinition.getLeftRecursiveRuleName(),
        recursiveRuleName = leftRecursiveRuleName,  ///
        recursiveDefinitionsCycle = findRecursiveDefinitionsCycle(recursiveRuleName, recursiveRuleNames);

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
