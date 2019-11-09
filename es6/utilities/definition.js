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

function leftRecursiveRuleNameFromDefinition(definition) {
  let leftRecursiveRuleName = null;

  const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
        leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length;

  if (leftRecursiveRuleNamesLength > 0) {
    const firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

    leftRecursiveRuleName = firstLeftRecursiveRuleName; ///
  }

  return leftRecursiveRuleName;
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
  leftRecursiveRuleNameFromDefinition
};
