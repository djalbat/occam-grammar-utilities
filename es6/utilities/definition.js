'use strict';

const arrayUtilities = require('../utilities/array'),
      recursivePartUtilities = require('../utilities/recursivePart');

const { first } = arrayUtilities,
      { recursiveRuleNamesFromPart, leftRecursiveRuleNameFromPart } = recursivePartUtilities;

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
  recursiveRuleNamesFromDefinition,
  leftRecursiveRuleNameFromDefinition
};
