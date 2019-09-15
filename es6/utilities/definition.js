'use strict';

const partUtilities = require('../utilities/part'),
      arrayUtilities = require('../utilities/array');

const { first } = arrayUtilities,
      { ruleNamesFromPart, leftRecursiveRuleNameFromPart } = partUtilities;

function isDefinitionRecursive(definition) {
  const ruleNames = ruleNamesFromDefinition(definition),
        ruleNamesLength = ruleNames.length,
        definitionRecursive = (ruleNamesLength > 0);

  return definitionRecursive
}

function ruleNamesFromDefinition(definition, ruleNames = []) {
  const parts = definition.getParts();

  parts.forEach((part) => {
    ruleNamesFromPart(part, ruleNames);
  });

  return ruleNames;
}

function isDefinitionLeftRecursive(definition) {
  const leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
        definitionLeftRecursive = (leftRecursiveRuleName !== null);

  return definitionLeftRecursive;
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
  ruleNamesFromDefinition,
  isDefinitionLeftRecursive,
  leftRecursiveRuleNameFromDefinition
};
