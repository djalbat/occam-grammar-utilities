'use strict';

const necessary = require('necessary');

const types = require('../../types'),
      ruleUtilities = require('../../utilities/rule'),
      LeftRecursiveDefinition = require('../../definition/leftRecursive');

const { findRule } = ruleUtilities,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { LEFT_RECURSIVE_TYPE, IMPLICITLY_LEFT_RECURSIVE_TYPE } = types;

class ImplicitlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  constructor(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition) {
    super(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);

    this.leftRecursiveDefinition = leftRecursiveDefinition;
  }

  getLeftRecursiveDefinition() {
    this.leftRecursiveDefinition = leftRecursiveDefinition;
  }

  replace(rules) {
    const rule = findRule(this.ruleName, rules),
          replacedDefinition = this.leftRecursiveDefinition,  ///
          replacementDefinition = this; ///

    rule.replaceDefinition(replacedDefinition, replacementDefinition);
  }

  static fromLeftRecursiveRuleNameAndRecursiveDefinitions(leftRecursiveRuleName, recursiveDefinitions) {
    let implicitlyLeftRecursiveDefinition = null;

    const leftRecursiveDefinition = findLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions);

    if (leftRecursiveDefinition !== null) {
      const type = IMPLICITLY_LEFT_RECURSIVE_TYPE,
            parts = leftRecursiveDefinition.getParts(),
            ruleName = leftRecursiveDefinition.getRuleName(),
            definition = null, ///
            recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(),
            leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();

      implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition);
    }

    return implicitlyLeftRecursiveDefinition;
  }
}

module.exports = ImplicitlyLeftRecursiveDefinition;

function findLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions) {
  let leftRecursiveDefinition = null;

  const leftRecursiveDefinitionsPath = findLeftRecursiveDefinitionsPath(leftRecursiveRuleName, recursiveDefinitions);

  if (leftRecursiveDefinitionsPath !== null) {
    const firstLeftRecursiveDefinition = first(leftRecursiveDefinitionsPath);

    leftRecursiveDefinition = firstLeftRecursiveDefinition; ///
  }

  return leftRecursiveDefinition;
}

function findRecursiveDefinitionsPath(recursiveRuleName, recursiveDefinitions) {
  let recursiveDefinitionsPath = null;

  recursiveDefinitions.some((recursiveDefinition, index) => {
    const recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
          recursiveDefinitionRuleNameRecursiveRuleName = (recursiveDefinitionRuleName === recursiveRuleName);

    if (recursiveDefinitionRuleNameRecursiveRuleName) {
      recursiveDefinitionsPath = recursiveDefinitions.slice(index);

      return true;
    }
  });

  return recursiveDefinitionsPath;
}

function findLeftRecursiveDefinitionsPath(leftRecursiveRuleName, recursiveDefinitions) {
  let leftRecursiveDefinitionsPath = null;

  const recursiveRuleName = leftRecursiveRuleName,  ///
      recursiveDefinitionsPath = findRecursiveDefinitionsPath(recursiveRuleName, recursiveDefinitions);

  if (recursiveDefinitionsPath !== null) {
    const recursiveDefinitionsPathLeftRecursive = isRecursiveDefinitionsPathLeftRecursive(recursiveDefinitionsPath);

    if (recursiveDefinitionsPathLeftRecursive) {
      leftRecursiveDefinitionsPath = recursiveDefinitionsPath;  ///
    }
  }

  return leftRecursiveDefinitionsPath;
}

function isRecursiveDefinitionsPathLeftRecursive(recursiveDefinitionsPath) {
  const recursiveDefinitionsPathLeftRecursive = recursiveDefinitionsPath.every((recursiveDefinition) => {
    const type = recursiveDefinition.getType();

    if (type === LEFT_RECURSIVE_TYPE) {
      return true;
    }
  });

  return recursiveDefinitionsPathLeftRecursive;
}
