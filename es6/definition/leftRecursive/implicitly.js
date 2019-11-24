'use strict';

const necessary = require('necessary');

const types = require('../../types'),
      LeftRecursiveDefinition = require('../../definition/leftRecursive');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { LEFT_RECURSIVE_TYPE, IMPLICITLY_LEFT_RECURSIVE_TYPE } = types;

class ImplicitlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  static fromLeftRecursiveRuleNameAndRecursiveDefinitions(leftRecursiveRuleName, recursiveDefinitions) {
    let implicitlyLeftRecursiveDefinition = null;

    const leftRecursiveDefinition = findLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions);

    if (leftRecursiveDefinition !== null) {
      const type = IMPLICITLY_LEFT_RECURSIVE_TYPE,
            parts = leftRecursiveDefinition.getParts(),
            ruleName = leftRecursiveDefinition.getRuleName(),
            definition = leftRecursiveDefinition, ///
            recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(),
            leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();

      implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return implicitlyLeftRecursiveDefinition;
  }
}

module.exports = ImplicitlyLeftRecursiveDefinition;

function findLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions) {
  let leftRecursiveDefinition = null;

  const leftRecursiveDefinitionsCycle = findLeftRecursiveDefinitionsCycle(leftRecursiveRuleName, recursiveDefinitions);

  if (leftRecursiveDefinitionsCycle !== null) {
    const firstLeftRecursiveDefinition = first(leftRecursiveDefinitionsCycle);

    leftRecursiveDefinition = firstLeftRecursiveDefinition; ///
  }

  return leftRecursiveDefinition;
}

function findRecursiveDefinitionsCycle(recursiveRuleName, recursiveDefinitions) {
  let recursiveDefinitionsCycle = null;

  recursiveDefinitions.some((recursiveDefinition, index) => {
    const recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
          recursiveDefinitionRuleNameRecursiveRuleName = (recursiveDefinitionRuleName === recursiveRuleName);

    if (recursiveDefinitionRuleNameRecursiveRuleName) {
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
    const type = recursiveDefinition.getType();

    if (type === LEFT_RECURSIVE_TYPE) {
      return true;
    }
  });

  return recursiveDefinitionsCycleLeftRecursive;
}
