'use strict';

const arrayUtilities = require('../utilities/array'),
      recursivePartUtilities = require('../utilities/recursivePart');

const { first } = arrayUtilities,
      { recursiveRuleNamesFromPart, leftRecursiveRuleNamesFromPart } = recursivePartUtilities;

function recursiveRuleNamesFromDefinition(definition) {
  const recursiveRuleNames = [],
        parts = definition.getParts();

  parts.forEach((part) => {
    recursiveRuleNamesFromPart(part, recursiveRuleNames);
  });

  return recursiveRuleNames;
}

function leftRecursiveRuleNamesFromDefinition(definition) {
  const leftRecursiveRuleNames = [],
        parts = definition.getParts(),
        firstPart = first(parts),
        part = firstPart; ///

  leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);

  return leftRecursiveRuleNames;
}

module.exports = {
  recursiveRuleNamesFromDefinition,
  leftRecursiveRuleNamesFromDefinition
};
