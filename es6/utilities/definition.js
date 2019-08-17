'use strict';

const partUtilities = require('../utilities/part'),
      arrayUtilities = require('../utilities/array');

const { isPartRuleNamePart } = partUtilities;

const { first } = arrayUtilities;

function isDefinitionImmediatelyLeftRecursive(definition, ruleName) {
  let definitionImmediatelyLeftRecursive = false;

  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartRuleNamePart = isPartRuleNamePart(firstPart);

  if (firstPartRuleNamePart) {
    const ruleNamePart = firstPart, ///
          ruleNamePartRuleName = ruleNamePart.getRuleName();

    if (ruleNamePartRuleName === ruleName) {
      definitionImmediatelyLeftRecursive = true;
    }
  }

  return definitionImmediatelyLeftRecursive;
}

function leftRecursiveRuleNameFromLeftRecursiveDefinition(leftRecursiveDefinition) {
  const parts = leftRecursiveDefinition.getParts(),
        firstPart = first(parts),
        ruleNamePart = firstPart,
        ruleName = ruleNamePart.getRuleName(),
        leftRecursiveRuleName = ruleName; ///

  return leftRecursiveRuleName;
}

module.exports = {
  isDefinitionImmediatelyLeftRecursive,
  leftRecursiveRuleNameFromLeftRecursiveDefinition
};
