'use strict';

const partUtilities = require('../utilities/part'),
      arrayUtilities = require('../utilities/array');

const { first } = arrayUtilities,
      { recursiveRuleNamesFromPart, leftRecursiveRuleNameFromPart } = partUtilities;

function isDefinitionRecursive(definition) {
  const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
        recursiveRuleNamesLength = recursiveRuleNames.length,
        definitionRecursive = (recursiveRuleNamesLength > 0);

  return definitionRecursive
}

function isDefinitionLeftRecursive(definition) {
  const leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
        definitionLeftRecursive = (leftRecursiveRuleName !== null);

  return definitionLeftRecursive;
}

function recursiveRuleNamesFromDefinition(definition, recursiveRuleNames = []) {
  const parts = definition.getParts();

  parts.forEach((part) => {
    recursiveRuleNamesFromPart(part, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

function leftRecursiveRuleNameFromDefinition(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        part = firstPart, ///
        leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);

  return leftRecursiveRuleName;
}

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
  isDefinitionRecursive,
  isDefinitionLeftRecursive,
  recursiveRuleNamesFromDefinition,
  leftRecursiveRuleNameFromDefinition,
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
