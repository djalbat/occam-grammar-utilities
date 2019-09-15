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

module.exports = {
  isDefinitionRecursive,
  isDefinitionLeftRecursive,
  recursiveRuleNamesFromDefinition,
  leftRecursiveRuleNameFromDefinition
};
