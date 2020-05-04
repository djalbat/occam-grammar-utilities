"use strict";

const necessary = require("necessary");

const types = require("../../types"),
      ruleUtilities = require("../../utilities/rule"),
      LeftRecursiveDefinition = require("../../definition/leftRecursive");

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

  static fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
    let implicitlyLeftRecursiveDefinition = null;

    const leftRecursiveDefinition = findLeftRecursiveDefinition(ruleName, leftRecursiveRuleName, recursiveDefinitions);

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

function findLeftRecursiveDefinition(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
  let leftRecursiveDefinition = null;

  const leftRecursiveDefinitionsPath = findLeftRecursiveDefinitionsPath(ruleName, leftRecursiveRuleName, recursiveDefinitions);

  if (leftRecursiveDefinitionsPath !== null) {
    const firstLeftRecursiveDefinition = first(leftRecursiveDefinitionsPath);

    leftRecursiveDefinition = firstLeftRecursiveDefinition; ///
  }

  return leftRecursiveDefinition;
}

function findRecursiveDefinitionsPath(ruleName, recursiveRuleName, recursiveDefinitions) {
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

function findLeftRecursiveDefinitionsPath(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
  let leftRecursiveDefinitionsPath = null;

  const recursiveRuleName = leftRecursiveRuleName,  ///
      recursiveDefinitionsPath = findRecursiveDefinitionsPath(ruleName, recursiveRuleName, recursiveDefinitions);

  if (recursiveDefinitionsPath !== null) {
    const recursiveDefinitionsPathLeftRecursive = isRecursiveDefinitionsPathLeftRecursive(ruleName, recursiveDefinitionsPath);

    if (recursiveDefinitionsPathLeftRecursive) {
      leftRecursiveDefinitionsPath = recursiveDefinitionsPath;  ///
    }
  }

  return leftRecursiveDefinitionsPath;
}

function isRecursiveDefinitionsPathLeftRecursive(ruleName, recursiveDefinitionsPath) {
  const ruleNames = ruleNamesFromRuleNameAndRecursiveDefinitionsPath(ruleName, recursiveDefinitionsPath),
        recursiveDefinitionsPathLeftRecursive = recursiveDefinitionsPath.every((recursiveDefinition, index) => {
          const type = recursiveDefinition.getType();

          if (type === LEFT_RECURSIVE_TYPE) {
            const ruleName = ruleNames[index],
                  leftRecursiveRuleNames = recursiveDefinition.getLeftRecursiveRuleNames(),
                  leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

            if (leftRecursiveRuleNamesIncludesRuleName) {
              return true;
            }
          }
        });

  return recursiveDefinitionsPathLeftRecursive;
}

function ruleNamesFromRuleNameAndRecursiveDefinitionsPath(ruleName, recursiveDefinitionsPath) {
  const ruleNames = recursiveDefinitionsPath.map((recursiveDefinition) => recursiveDefinition.getRuleName());

  ruleNames.push(ruleName);

  const firstRuleName = ruleNames.shift(),
        lastRuleName = firstRuleName; ///

  ruleNames.push(lastRuleName);

  return ruleNames;
}
