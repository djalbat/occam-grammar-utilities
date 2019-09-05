'use strict';

const partUtilities = require('../utilities/part'),
      ruleUtilities = require('../utilities/rule'),
      arrayUtilities = require('../utilities/array');

const { first } = arrayUtilities,
      { findRuleByName } = ruleUtilities,
      { isPartLeftRecursive, leftRecursiveRuleNameFromPart } = partUtilities;

function ruleFromDefinition(definition, rules) {
  let rule = null;

  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartRuleName = ruleNameFromPart(firstPart);

  if (firstPartRuleName !== null) {
    const name = firstPartRuleName;

    rule = findRuleByName(name, rules);
  }

  return rule;
}

function isDefinitionLeftRecursive(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartLeftRecursive = isPartLeftRecursive(firstPart),
        definitionLeftRecursive = firstPartLeftRecursive;  ///

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
  ruleFromDefinition,
  isDefinitionLeftRecursive,
  leftRecursiveRuleNameFromDefinition
};
